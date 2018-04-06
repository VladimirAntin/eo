package github.eobrazovanje.service;

import github.eobrazovanje.entity.Message;
import org.springframework.data.domain.Page;

import java.util.Collection;
import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 31.3.18.
  Time: 14.05
*/
public interface MessageService {

    List<Message> findAllByUserUsername(String username);
    Page<Message> findAllByUserUsernameAndRecipient(String username, String recipient, int brojStranice, int brojPrikazanih);
    List<Message> findAllByUserUsernameDesc(String username);
    List<Message> findAllByRecipient(String username);

    Message save(Message message);

    List<Message> save(Collection<Message> messages);

    void delete(long id);
}
