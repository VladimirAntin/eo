package github.eobrazovanje.repo;

import github.eobrazovanje.entity.Message;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 31.3.18.
  Time: 14.04
*/
@Repository
public interface MessageRepo extends JpaRepository<Message,Long>{

    List<Message> findAllBySender_UsernameOrRecipient_UsernameOrderByDate(String sender_username, String recipient_username);
    Page<Message> findAllBySender_UsernameAndRecipient_UsernameOrSender_UsernameAndRecipient_UsernameOrderByDate
            (String sender_username1, String recipient_username1,
             String sender_username2, String recipient_username2, Pageable pageable);
    //ostaje
    List<Message> findAllBySender_UsernameOrRecipient_UsernameOrderByDateDesc(String sender_username, String recipient_username);

    List<Message> findAllByRecipient_UsernameAndSeenIsFalseOrderBySender(String username);
}
