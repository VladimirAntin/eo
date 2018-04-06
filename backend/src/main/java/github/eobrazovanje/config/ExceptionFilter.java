package github.eobrazovanje.config;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.util.logging.LogRecord;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 6.4.18.
  Time: 13.15
*/

// https://stackoverflow.com/questions/18849415/how-to-stop-printing-exception-stack-trace-on-console
@Component
public class ExceptionFilter implements Filter {
    private final Log logger = LogFactory.getLog(this.getClass());


    @Override
    public void doFilter(ServletRequest req, ServletResponse res,
                         FilterChain chain) {
        try{
            chain.doFilter(req, res);
        }catch(Exception e ){
            HttpServletRequest request = (HttpServletRequest) req;
            if(request.getRequestURI().toLowerCase().contains("chatting")){
                logger.error("Broken Pipe SockJS and StompClient");
            }
        }
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void destroy() {

    }
}
