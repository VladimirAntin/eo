package github.eobrazovanje.config;

import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.web.servlet.ErrorPage;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 19.4.18.
  Time: 18.01
*/
// https://github.com/spring-guides/tut-spring-boot-oauth2/tree/master/custom-error
@Component
public class ErrorPages {

    @Bean
    public EmbeddedServletContainerCustomizer customizer() {
        return container -> {
          container.addErrorPages(new ErrorPage(HttpStatus.UNAUTHORIZED, "/"));
        };
    }
}
