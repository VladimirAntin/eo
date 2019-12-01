package github.eobrazovanje.converter;

import github.eobrazovanje.dto.ChatDto;
import github.eobrazovanje.dto.UserDto;
import github.eobrazovanje.entity.Chat;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.4.18.
  Time: 18.10
*/
@Component
public class ChatToChatDto implements Converter<Chat,ChatDto> {

    @Override
    public ChatDto convert(Chat chat) {
        return new ChatDto()
                .setId(chat.getId())
                .setDate(chat.getDate())
                .setText(chat.getText())
                .setSender(
                        new UserDto().setId(chat.getSender().getId())
                                    .setUsername(chat.getSender().getUsername())
                                    .setIme(chat.getSender().getIme())
                                    .setPrezime(chat.getSender().getPrezime())
                );
    }

    public List<ChatDto> convert(Collection<Chat> chats){
        return chats.stream().map(this::convert).collect(Collectors.toList());
    }
}
