package github.eobrazovanje.controller.entity;

import github.eobrazovanje.converter.NastavnikToNastavnikDto;
import github.eobrazovanje.converter.UcenikToUcenikDto;
import github.eobrazovanje.converter.UserToUserDto;
import github.eobrazovanje.entity.Nastavnik;
import github.eobrazovanje.entity.Ucenik;
import github.eobrazovanje.entity.User;
import github.eobrazovanje.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 2.3.18.
  Time: 19.59
*/
@RestController
@RequestMapping("api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private NastavnikToNastavnikDto toNastavnikDto;

    @Autowired
    private UcenikToUcenikDto toUcenikDto;

    @Autowired
    private UserToUserDto toUserDto;

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity getAll(){
        return ResponseEntity.ok(toUserDto.convert(userService.findAll()));
    }

    @GetMapping(value = "/{id}") //username or id
    public ResponseEntity get(@PathVariable String id){
        User user;
        try{
            long idLong = Long.parseLong(id);
            user = userService.findOne(idLong);
        }catch (NumberFormatException ex){
            user = userService.findByUsername(id);
        }
        if(user==null){
            return ResponseEntity.notFound().build();
        }
        if(user instanceof Nastavnik){
            return ResponseEntity.ok(toNastavnikDto.convert((Nastavnik) user));
        }else if(user instanceof Ucenik){
            return ResponseEntity.ok(toUcenikDto.convert((Ucenik) user));
        }
        return ResponseEntity.ok(toUserDto.convert(user));
    }
}
