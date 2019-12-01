package github.eobrazovanje.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by IntelliJ IDEA
 * User: vladimir_antin
 * Date: 01.12.2019
 * Time: 19:56
 */
// https://stackoverflow.com/questions/39331929/spring-catch-all-route-for-index-html/39352299
@Configuration
public class AngularView extends WebMvcConfigurerAdapter {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/{spring:\\w+}")
                .setViewName("forward:/");
        registry.addViewController("/**/{spring:\\w+}")
                .setViewName("forward:/");
        registry.addViewController("/{spring:\\b(?!assets)\\w+}/*{spring:?!(\\.js|\\.css)$}")
                .setViewName("forward:/");
    }

}
