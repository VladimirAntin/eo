package github.eobrazovanje.cron;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * Created by IntelliJ IDEA
 * User: vladimir_antin
 * Date: 01.12.2019
 * Time: 10:49
 */
@Component
public class Tasks {


    @Scheduled(fixedRate = 1500000)
    public void doNotTurnOffServer() {
        System.out.println("do not turn off server");
    }

}
