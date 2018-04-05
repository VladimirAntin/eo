package github.eobrazovanje.controller;

import github.eobrazovanje.converter.ChatDtoToChat;
import github.eobrazovanje.converter.ChatToChatDto;
import github.eobrazovanje.converter.MessageDtoToMessage;
import github.eobrazovanje.converter.MessageToMessageDto;
import github.eobrazovanje.dto.ChatDto;
import github.eobrazovanje.dto.MessageDto;
import github.eobrazovanje.entity.Chat;
import github.eobrazovanje.entity.Message;
import github.eobrazovanje.entity.User;
import github.eobrazovanje.security.TokenHelper;
import github.eobrazovanje.service.ChatService;
import github.eobrazovanje.service.MessageService;
import github.eobrazovanje.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.security.Principal;
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

    @Autowired
    private ChatService chatService;

    @Autowired
    private ChatToChatDto toChatDto;

    @Autowired
    private ChatDtoToChat toChat;

    @MessageMapping("/chatting/{id}")
    public void sendSingle(@DestinationVariable long id, @Payload MessageDto message, Principal principal) {
        try {
            message.setText(message.getText().trim());
            if (!message.getText().equals("")){
                User loginUser = userService.findByUsername(principal.getName());
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
            }
        }catch (Exception e){ }
    }

    @MessageMapping("/chatting/group")
    public void sendGroup(@Payload ChatDto dto,
                           Principal principal) {
        try {
            dto.setText(dto.getText().trim());
            if(!dto.getText().equals("")){
                User loginUser = userService.findByUsername(principal.getName());
                if(loginUser!=null){
                    dto.setId(0)
                            .setDate(new Date());
                    dto.getSender().setId(loginUser.getId());
                    Chat newMessage = chatService.save(toChat.convert(dto));
                    simpMessagingTemplate.convertAndSend(
                            "/chatting/topic/group",
                            toChatDto.convert(newMessage));
                }
            }
        }catch (Exception e){ }
    }
}
