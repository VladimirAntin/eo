package github.eobrazovanje.controller;


import github.eobrazovanje.converter.NastavnikToNastavnikDto;
import github.eobrazovanje.converter.UcenikToUcenikDto;
import github.eobrazovanje.entity.Nastavnik;
import github.eobrazovanje.entity.Ucenik;
import github.eobrazovanje.entity.User;
import github.eobrazovanje.service.NastavnikService;
import github.eobrazovanje.service.UcenikService;
import github.eobrazovanje.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.3.18.
  Time: 11.17
*/

@RestController
@RequestMapping("/api")
public class ApiController {


    @Autowired
    private UserService userService;

    @Autowired
    private NastavnikService nastavnikService;

    @Autowired
    private UcenikService ucenikService;

    @Autowired
    private NastavnikToNastavnikDto toNastavnikDto;

    @Autowired
    private UcenikToUcenikDto toUcenikDto;

    @Value("${jwt.expires_in}")
    private long EXPIRES_IN;


    @GetMapping("/me")
    public ResponseEntity get(Principal principal) {
        User user = userService.findByUsername(principal.getName());
        if(user instanceof Nastavnik){
            return ResponseEntity.ok(toNastavnikDto.convert((Nastavnik) user));
        }else if(user instanceof Ucenik){
            return ResponseEntity.ok(toUcenikDto.convert((Ucenik) user));
        }
        return ResponseEntity.ok(user); //admin
    }
    @GetMapping("/check")
    public ResponseEntity check() {
        return ResponseEntity.ok(true);
    }

}
