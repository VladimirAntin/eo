package github.eobrazovanje.controller;

import github.eobrazovanje.converter.MessageDtoToMessage;
import github.eobrazovanje.converter.MessageToMessageDto;
import github.eobrazovanje.dto.MessageDto;
import github.eobrazovanje.entity.Message;
import github.eobrazovanje.entity.User;
import github.eobrazovanje.security.TokenHelper;
import github.eobrazovanje.service.MessageService;
import github.eobrazovanje.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Date;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.4.18.
  Time: 12.28
*/
@Controller
public class ChatController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
    TokenHelper tokenHelper;

    @Autowired
    private UserService userService;

    @Autowired
    private MessageService messageService;

    @Autowired
    private MessageToMessageDto toMessageDto;

    @Autowired
    private MessageDtoToMessage toMessage;

    @MessageMapping("/chatting/{id}")
    public void sendSingle(@DestinationVariable long id, @Payload MessageDto message,
                           SimpMessageHeaderAccessor headerAccessor) {
        try {
            String loginUsername = tokenHelper.getUsernameFromToken(
                    headerAccessor.getNativeHeader("Authorization").get(0));
            User loginUser = userService.findByUsername(loginUsername);
            if(loginUser!=null){
                message.setId(0)
                        .setSender(loginUser.getId())
                        .setRecipient(id)
                        .setSeen(false)
                        .setDate(new Date());
                Message newMessage = messageService.save(toMessage.convert(message));
                simpMessagingTemplate.convertAndSend(
                        "/chatting/topic/"+String.valueOf(id),
                        toMessageDto.convert(newMessage));
                simpMessagingTemplate.convertAndSend(
                        "/chatting/topic/"+String.valueOf(message.getSender()),
                        toMessageDto.convert(newMessage));

            }
        }catch (Exception e){ }
    }
}
