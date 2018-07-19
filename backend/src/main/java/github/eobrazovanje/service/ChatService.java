package github.eobrazovanje.service;

import github.eobrazovanje.entity.Chat;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.4.18.
  Time: 18.07
*/
public interface ChatService {

    Page<Chat> findAllOrderByDate(Pageable pageable);

    Chat save(Chat chat);
}
