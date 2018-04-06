package github.eobrazovanje.service;

import github.eobrazovanje.entity.Chat;
import org.springframework.data.domain.Page;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.4.18.
  Time: 18.07
*/
public interface ChatService {

    Page<Chat> findAllOrderByDate(int brojStranice, int brojPrikazanih);

    Chat save(Chat chat);
}
