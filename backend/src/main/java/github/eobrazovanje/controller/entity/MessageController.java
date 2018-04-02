package github.eobrazovanje.controller.entity;

import github.eobrazovanje.converter.MessageDtoToMessage;
import github.eobrazovanje.converter.MessageToMessageDto;
import github.eobrazovanje.converter.UserToUserDto;
import github.eobrazovanje.dto.MessageDto;
import github.eobrazovanje.entity.Message;
import github.eobrazovanje.entity.User;
import github.eobrazovanje.service.MessageService;
import github.eobrazovanje.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 31.3.18.
  Time: 14.25
*/
@RestController
@RequestMapping("api/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private UserToUserDto toUserDto;

    @Autowired
    private MessageToMessageDto toMessageDto;

    @Autowired
    private MessageDtoToMessage toMessage;

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity get(Principal principal){
        return ResponseEntity.ok(toUserDto.convert(
                messageService.findAllByUserUsernameDesc(principal.getName())
                        .stream()
                        .filter(m -> m.getSender().getUsername().equals(principal.getName())
                                || m.getRecipient().getUsername().equals(principal.getName()))
                        .map(m -> m.getSender().getUsername().equals(principal.getName())?
                                m.getRecipient(): m.getSender()).distinct()
                        .collect(Collectors.toList())
        ));
    }

    @GetMapping("/{id}")
    public ResponseEntity getChat(@PathVariable long id, Principal principal){
        User loginUser = userService.findByUsername(principal.getName());
        if(loginUser.getId() == id){
            return ResponseEntity.notFound().build();
        }
        List<Message> messages =
                messageService.findAllByUserUsername(principal.getName())
                        .stream()
                        .filter(m -> m.getSender().getId()==id || m.getRecipient().getId()==id)
                        .collect(Collectors.toList());
        messages.stream().forEach(m -> m.setSeen(m.getSender().getId()==id?true:m.isSeen()));
        messages = messageService.save(messages);
        return ResponseEntity.ok(toMessageDto.convert(messages));
    }

    @GetMapping("/{id}/unread")
    public ResponseEntity getUnreadUser(@PathVariable long id, Principal principal){
        return ResponseEntity.ok(messageService.findAllByUserUsername(principal.getName())
                .stream()
                .filter(m -> m.getSender().getId()==id && !m.isSeen()).count());
    }

    @GetMapping("/unread_count")
    public ResponseEntity getUnreadCount(Principal principal){
        return ResponseEntity.ok(
                messageService.findAllByRecipient(principal.getName())
                        .stream().map(m -> m.getSender()).distinct().count());
    }

    @GetMapping("/unread")
    public ResponseEntity getUnread(Principal principal){
        return ResponseEntity.ok(toMessageDto.convert(
                messageService.findAllByRecipient(principal.getName())));
    }

}
