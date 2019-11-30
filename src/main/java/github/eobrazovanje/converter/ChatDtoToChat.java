package github.eobrazovanje.converter;

import github.eobrazovanje.dto.ChatDto;
import github.eobrazovanje.entity.Chat;
import github.eobrazovanje.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.4.18.
  Time: 18.13
*/
@Component
public class ChatDtoToChat implements Converter<ChatDto,Chat> {

    @Autowired
    private UserService userService;

    @Override
    public Chat convert(ChatDto dto) {
        return new Chat()
                .setId(dto.getId())
                .setDate(dto.getDate())
                .setSender(userService.findOne(dto.getSender().getId()))
                .setText(dto.getText());
    }
}
