package github.eobrazovanje.controller;


import github.eobrazovanje.converter.NastavnikToNastavnikDto;
import github.eobrazovanje.converter.UcenikToUcenikDto;
import github.eobrazovanje.converter.UserToUserDto;
import github.eobrazovanje.entity.Nastavnik;
import github.eobrazovanje.entity.Ucenik;
import github.eobrazovanje.entity.User;
import github.eobrazovanje.security.NavItem;
import github.eobrazovanje.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
    private NastavnikToNastavnikDto toNastavnikDto;

    @Autowired
    private UcenikToUcenikDto toUcenikDto;

    @Autowired
    private UserToUserDto toUserDto;

    @Value("${jwt.expires_in}")
    private long EXPIRES_IN;

    @GetMapping("/me")
    public ResponseEntity get(Principal principal) {
        User user = userService.findByUsername(principal.getName());
        user.setOnline(true);
        user.setLastOnline(new Date());
        userService.save(user);
        if(user instanceof Nastavnik){
            return ResponseEntity.ok(toNastavnikDto.convert((Nastavnik) user));
        }else if(user instanceof Ucenik){
            return ResponseEntity.ok(toUcenikDto.convert((Ucenik) user));
        }
        return ResponseEntity.ok(toUserDto.convert(user)); //admin
    }
    @GetMapping("nav_items")
    public ResponseEntity getNav(Principal principal){
        User user = userService.findByUsername(principal.getName());
        List<NavItem> navItems = new ArrayList<>();
        navItems.add(new NavItem("Home","/","home"));
        if(user.isAdmin()) {
            navItems.add(new NavItem("Users","/users", "people"));
            navItems.add(new NavItem("Predmeti","/predmeti", "subject"));
            navItems.add(new NavItem("Codebook","/codebook", "library_books"));
        }else if(user.isNastavnik()){
            // bla bla za profesora
        }else {
            // bla bla za ucenika
        }
        navItems.add(new NavItem("Inbox","/inbox", "message"));
        navItems.add(new NavItem("Group Chat","/group_chat", "chat"));
        navItems.add(new NavItem("Profile","/users/"+principal.getName(), "person"));
        return ResponseEntity.ok(navItems);
    }

    @GetMapping("/offline")
    public ResponseEntity offline(Principal principal) {
        User user = userService.findByUsername(principal.getName());
        user.setOnline(false);
        user.setLastOnline(new Date());
        userService.save(user);
        return ResponseEntity.ok(toUserDto.convert(user)); //admin
    }
}
