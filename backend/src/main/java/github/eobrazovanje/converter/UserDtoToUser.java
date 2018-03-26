package github.eobrazovanje.converter;

import github.eobrazovanje.dto.UserDto;
import github.eobrazovanje.dto.UserPasswordDto;
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
  Date: 2.3.18.
  Time: 19.45
*/
@Component
public class UserDtoToUser implements Converter<UserDto,User> {

    @Autowired
    private UserService userService;

    @Override
    public User convert(UserDto dto) {
        User backUser = null;
        if(dto.getId()!=0){
            backUser = userService.findOne(dto.getId());
        }
        return new User()
                .setId(dto.getId())
                .setIme(dto.getIme().substring(0, 1).toUpperCase() + dto.getIme().substring(1))
                .setPrezime(dto.getPrezime().substring(0, 1).toUpperCase() + dto.getPrezime().substring(1))
                .setUsername(dto.getUsername())
                .setEmail(dto.getEmail())
                .setOnline(backUser!=null? backUser.isOnline() : false)
                .setLastOnline(backUser!=null? backUser.getLastOnline() : new Date())
                .setPassword(dto.getPassword()==null? backUser.getPassword() : new BCryptPasswordEncoder().encode(dto.getPassword()));
    }


    public User changePassword(UserPasswordDto dto,User userB) {
        User user = userB
                .setPassword(new BCryptPasswordEncoder().encode(dto.getNewPassword()));
        return user;
    }
}
