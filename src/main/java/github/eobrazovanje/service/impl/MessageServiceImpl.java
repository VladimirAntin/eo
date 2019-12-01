package github.eobrazovanje.service.impl;

import github.eobrazovanje.entity.Message;
import github.eobrazovanje.repo.MessageRepo;
import github.eobrazovanje.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 31.3.18.
  Time: 14.07
*/
@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageRepo repo;


    @Override
    public List<Message> findAllByUserUsername(String username) {
        return repo.findAllBySender_UsernameOrRecipient_UsernameOrderByDate(username, username);
    }

    @Override
    public List<Message> findAllByUserUsernameDesc(String username) { //ostaje
        return repo.findAllBySender_UsernameOrRecipient_UsernameOrderByDateDesc(username, username);
    }

    @Override
    public Page<Message> findAllByUserUsernameAndRecipient(String username, String recipient, Pageable pageable) {
        return repo.findAllBySender_UsernameAndRecipient_UsernameOrSender_UsernameAndRecipient_UsernameOrderByDate(
                username,recipient,recipient,username, pageable);
    }

    @Override
    public List<Message> findAllByRecipient(String username) {
        return repo.findAllByRecipient_UsernameAndSeenIsFalseOrderBySender(username);
    }

    @Override
    public Message save(Message messsage) {
        return repo.save(messsage);
    }

    @Override
    public List<Message> save(Collection<Message> messages) {
        return repo.save(messages);
    }

    @Override
    public void delete(long id) {
        repo.delete(id);
    }
}
