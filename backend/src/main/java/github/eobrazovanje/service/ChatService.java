package github.eobrazovanje.service;

import github.eobrazovanje.entity.Chat;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.4.18.
  Time: 18.07
*/
public interface ChatService {

    List<Chat> findAllOrderByDateDesc();
    List<Chat> findAllOrderByDate();

    Chat save(Chat chat);
}
