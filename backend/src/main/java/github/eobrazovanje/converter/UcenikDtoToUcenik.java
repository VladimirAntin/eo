package github.eobrazovanje.converter;

import github.eobrazovanje.dto.UcenikDto;
import github.eobrazovanje.entity.Nastavnik;
import github.eobrazovanje.entity.Ucenik;
import github.eobrazovanje.entity.User;
import github.eobrazovanje.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Date;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 18.22
*/
@Component
public class UcenikDtoToUcenik implements Converter<UcenikDto,Ucenik> {

    @Autowired
    private UserService userService;

    @Override
    public Ucenik convert(UcenikDto dto) {
        User backUser = null;
        if(dto.getId()!=0){
            backUser = userService.findOne(dto.getId());
        }
        return new Ucenik()
                .setId(dto.getId())
                .setIme(dto.getIme().substring(0, 1).toUpperCase() + dto.getIme().substring(1))
                .setPrezime(dto.getPrezime().substring(0, 1).toUpperCase() + dto.getPrezime().substring(1))
                .setUsername(dto.getUsername())
                .setEmail(dto.getEmail())
                .setPassword(dto.getPassword()==null?
                        backUser.getPassword() : new BCryptPasswordEncoder().encode(dto.getPassword()))
                .setOnline(backUser != null && backUser.isOnline())
                .setPicture(dto.getPicture())
                .setLastOnline(backUser!=null? backUser.getLastOnline() : new Date())
                .setBrojIndexa(dto.getBrojIndexa());
    }
}
