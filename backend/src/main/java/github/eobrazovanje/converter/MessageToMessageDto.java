package github.eobrazovanje.converter;

import github.eobrazovanje.dto.MessageDto;
import github.eobrazovanje.entity.Message;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 31.3.18.
  Time: 14.54
*/
@Component
public class MessageToMessageDto implements Converter<Message,MessageDto>{

    @Override
    public MessageDto convert(Message message) {
        return new MessageDto()
                .setId(message.getId())
                .setDate(message.getDate())
                .setText(message.getText())
                .setSeen(message.isSeen())
                .setRecipient(message.getRecipient().getId())
                .setSender(message.getSender().getId());
    }

    public List<MessageDto> convert(Collection<Message> messages){
        return messages.stream().map(this::convert).collect(Collectors.toList());
    }
}
