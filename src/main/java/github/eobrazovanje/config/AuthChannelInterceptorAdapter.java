package github.eobrazovanje.config;

import github.eobrazovanje.entity.User;
import github.eobrazovanje.security.TokenHelper;
import github.eobrazovanje.security.auth.TokenBasedAuthentication;
import github.eobrazovanje.service.UserService;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptorAdapter;
import org.springframework.messaging.support.MessageHeaderAccessor;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Arrays;
import java.util.List;
import java.util.ResourceBundle;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 5.4.18.
  Time: 22.38
*/

// https://stackoverflow.com/questions/45405332/websocket-authentication-and-authorization-in-spring
@Configuration
public class AuthChannelInterceptorAdapter extends ChannelInterceptorAdapter {
    private final TokenHelper tokenHelper;

    private UserDetailsService userDetailsService;

    private UserService userService;

    private String AUTH_HEADER;

    public AuthChannelInterceptorAdapter(final TokenHelper tokenHelper,
                                         UserDetailsService userDetailsService,
                                         UserService userService) {
        this.tokenHelper = tokenHelper;
        this.userDetailsService = userDetailsService;
        this.userService = userService;
        this.AUTH_HEADER = ResourceBundle.getBundle("application").getString("jwt.header");
    }

    @Override
    public Message<?> preSend(final Message<?> message, final MessageChannel channel) {
        final StompHeaderAccessor accessor = MessageHeaderAccessor.getAccessor(message, StompHeaderAccessor.class);
        try {
            final String auth = accessor.getFirstNativeHeader(AUTH_HEADER);
            final String user = tokenHelper.getUsernameFromToken(auth);
            accessor.setUser(new TokenBasedAuthentication(userDetailsService.loadUserByUsername(user)));
        }catch (Exception e){
            return null;
        }
        if(StompCommand.SUBSCRIBE == accessor.getCommand()){
            List<String> dest = Arrays.asList(accessor.getDestination().split("/"));
            if (dest.contains("group")){
                return message;
            }
            User user = userService.findByUsername(accessor.getUser().getName());
            if(dest.contains(String.valueOf(user.getId()))){
                return message;
            }else{
                return null;
            }
        }

        return message;
    }
}
