package github.eobrazovanje.converter;

import github.eobrazovanje.dto.MessageDto;
import github.eobrazovanje.entity.Message;
import github.eobrazovanje.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 31.3.18.
  Time: 14.58
*/
@Component
public class MessageDtoToMessage implements Converter<MessageDto,Message>{

    @Autowired
    private UserService userService;

    @Override
    public Message convert(MessageDto dto) {
        return new Message()
                .setId(dto.getId())
                .setSeen(dto.isSeen())
                .setDate(dto.getDate())
                .setText(dto.getText())
                .setSender(userService.findOne(dto.getSender()))
                .setRecipient(userService.findOne(dto.getRecipient()));
    }
}
