package github.eobrazovanje.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.3.18.
  Time: 11.08
*/
// https://stackoverflow.com/questions/38516667/springboot-angular2-how-to-handle-html5-urls
@Controller
public class ViewController {

    @RequestMapping(
            { "/users", "/users/**", "/categories", "/categories/**",
                    "/languages", "/languages/**"

            }
    )
    public String index() {
        return "forward:/";
    }
}