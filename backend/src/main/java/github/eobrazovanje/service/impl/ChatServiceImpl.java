package github.eobrazovanje.service.impl;

import github.eobrazovanje.entity.Chat;
import github.eobrazovanje.repo.ChatRepo;
import github.eobrazovanje.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.4.18.
  Time: 18.08
*/
@Service
public class ChatServiceImpl implements ChatService {

    @Autowired
    private ChatRepo repo;

    @Override
    public List<Chat> findAllOrderByDateDesc() {
        return repo.findAllByOrderByDateDesc();
    }

    @Override
    public List<Chat> findAllOrderByDate() {
        return repo.findAllByOrderByDate();
    }

    @Override
    public Chat save(Chat chat) {
        return repo.save(chat);
    }
}
