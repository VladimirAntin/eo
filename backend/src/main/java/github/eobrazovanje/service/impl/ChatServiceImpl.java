package github.eobrazovanje.service.impl;

import github.eobrazovanje.entity.Chat;
import github.eobrazovanje.repo.ChatRepo;
import github.eobrazovanje.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

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
    public Page<Chat> findAllOrderByDate(Pageable pageable) {
        return repo.findAllByOrderByDate(pageable);
    }

    @Override
    public Chat save(Chat chat) {
        return repo.save(chat);
    }
}
