package github.eobrazovanje.security.auth;

import github.eobrazovanje.security.TokenHelper;
import io.jsonwebtoken.ExpiredJwtException;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


public class TokenAuthenticationFilter extends OncePerRequestFilter {

    private final Log logger = LogFactory.getLog(this.getClass());

    private TokenHelper tokenHelper;

    private UserDetailsService userDetailsService;

    public TokenAuthenticationFilter(TokenHelper tokenHelper, UserDetailsService userDetailsService) {
        this.tokenHelper = tokenHelper;
        this.userDetailsService = userDetailsService;
    }

    @Override
    public void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)  {

        String username = null;
        String authToken = tokenHelper.getToken(request);
        if (authToken != null) {
            // get username from token
            try {
                username = tokenHelper.getUsernameFromToken(authToken);
            } catch (IllegalArgumentException e) {
                logger.error("an error occured during getting username from token");
            } catch (ExpiredJwtException e){
                logger.error("The token has expired");
            } catch (Exception e){}
            if (username != null) {
                // get user
                try{
                    UserDetails userDetails = userDetailsService.loadUserByUsername(username);
                    // create authentication
                    TokenBasedAuthentication authentication = new TokenBasedAuthentication(userDetails);
                    authentication.setToken(authToken);
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }catch (UsernameNotFoundException e){
                    logger.error("No user found with username "+username);
                }
            }
        }
        try {
            chain.doFilter(request, response);
        } catch (IOException e) {
        } catch (ServletException e) {
        }
    }

}