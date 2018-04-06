package github.eobrazovanje.controller.entity;

import github.eobrazovanje.converter.ChatToChatDto;
import github.eobrazovanje.entity.Chat;
import github.eobrazovanje.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    public ResponseEntity getAll(@RequestParam(value = "page",defaultValue = "0") int page,
                                 @RequestParam(value = "num",defaultValue = "20") int num) {
        Page<Chat> chat = chatService.findAllOrderByDate(page,num);
        HttpHeaders headers = new HttpHeaders();
        headers.set("total",String.valueOf(chat.getTotalElements()));
        return ResponseEntity.ok()
                .headers(headers)
                .body(toChatDto.convert(chat.getContent()));
    }

}
