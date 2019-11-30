package github.eobrazovanje.converter;

import github.eobrazovanje.dto.NastavnikDto;
import github.eobrazovanje.dto.UcenikDto;
import github.eobrazovanje.dto.UserDto;
import github.eobrazovanje.entity.Authority;
import github.eobrazovanje.entity.Nastavnik;
import github.eobrazovanje.entity.Ucenik;
import github.eobrazovanje.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 2.3.18.
  Time: 19.45
*/
@Component
public class UserToUserDto implements Converter<User,UserDto> {

    @Autowired
    private ZvanjeToZvanjeDto toZvanjeDto;

    @Override
    public UserDto convert(User user) {

        if(user instanceof Nastavnik){
            return new NastavnikDto()
                    .setId(user.getId())
                    .setIme(user.getIme())
                    .setPrezime(user.getPrezime())
                    .setUsername(user.getUsername())
                    .setEmail(user.getEmail())
                    .setOnline(user.isOnline())
                    .setLastOnline(user.getLastOnline())
                    .setPicture(user.getPicture())
                    .setAuthorities((Set<Authority>) user.getAuthorities())
                    .setZvanje(toZvanjeDto.convert(((Nastavnik) user).getZvanje()));
        }else if(user instanceof Ucenik){
            return new UcenikDto()
                    .setId(user.getId())
                    .setIme(user.getIme())
                    .setPrezime(user.getPrezime())
                    .setUsername(user.getUsername())
                    .setEmail(user.getEmail())
                    .setOnline(user.isOnline())
                    .setLastOnline(user.getLastOnline())
                    .setPicture(user.getPicture())
                    .setAuthorities((Set<Authority>) user.getAuthorities())
                    .setBrojIndexa(((Ucenik) user).getBrojIndexa());
        }
        return new UserDto()
                .setId(user.getId())
                .setIme(user.getIme())
                .setPrezime(user.getPrezime())
                .setUsername(user.getUsername())
                .setEmail(user.getEmail())
                .setOnline(user.isOnline())
                .setLastOnline(user.getLastOnline())
                .setPicture(user.getPicture())
                .setAuthorities((Set<Authority>) user.getAuthorities());
    }

    public List<UserDto> convert(List<User> users){
        return users.stream().map(this::convert).collect(Collectors.toList());
    }
}
