package github.eobrazovanje.converter;

import github.eobrazovanje.dto.UserDto;
import github.eobrazovanje.entity.User;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 2.3.18.
  Time: 19.45
*/
@Component
public class UserToUserDto implements Converter<User,UserDto> {
    @Override
    public UserDto convert(User user) {
        return new UserDto()
                .setId(user.getId())
                .setIme(user.getIme())
                .setPrezime(user.getPrezime())
                .setUsername(user.getUsername());
    }

    public List<UserDto> convert(List<User> users){
        return users.stream().map(this::convert).collect(Collectors.toList());
    }
}
