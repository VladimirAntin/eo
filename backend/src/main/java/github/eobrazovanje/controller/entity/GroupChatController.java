package github.eobrazovanje.controller.entity;

import github.eobrazovanje.converter.ChatToChatDto;
import github.eobrazovanje.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.4.18.
  Time: 18.16
*/
@RestController
@RequestMapping("/api/group_chat")
public class GroupChatController {

    @Autowired
    private ChatService chatService;

    @Autowired
    private ChatToChatDto toChatDto;

    @GetMapping
    public ResponseEntity getAll() {
        return ResponseEntity.ok(toChatDto.convert(chatService.findAllOrderByDate()));
    }

}
