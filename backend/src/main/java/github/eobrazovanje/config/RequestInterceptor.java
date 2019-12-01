package github.eobrazovanje.config;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Enumeration;
import java.util.HashMap;

/**
 * Created by IntelliJ IDEA
 * User: vladimir_antin
 * Date: 01.12.2019
 * Time: 20:50
 */
@Component
public class RequestInterceptor extends HandlerInterceptorAdapter {
    private static Log log = LogFactory.getLog(RequestInterceptor.class.getName());

    @Override
    public boolean preHandle(
            HttpServletRequest request,
            HttpServletResponse response,
            Object handler) {
        Enumeration<String> headerNames = request.getHeaderNames();
        HashMap<String, Object> map = new HashMap<String, Object>();
        map.put("Method", request.getMethod());
        map.put("URL", request.getRequestURI());
        map.put("Protocol", request.getProtocol());
        if (headerNames != null) {
            while (headerNames.hasMoreElements()) {
                String name = headerNames.nextElement();
                map.put(name, request.getHeader(name));
            }
        }


        log.info(map);
        return true;
    }
}
