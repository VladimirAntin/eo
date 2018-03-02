package github.eobrazovanje.converter;

import github.eobrazovanje.dto.UserDto;
import github.eobrazovanje.entity.User;
import github.eobrazovanje.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

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
        return new User()
                .setId(dto.getId())
                .setIme(dto.getIme())
                .setPrezime(dto.getPrezime())
                .setUsername(dto.getUsername())
                .setPassword(userService.findOne(dto.getId()).getPassword());
    }
}
