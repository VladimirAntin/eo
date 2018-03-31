package github.eobrazovanje.repo;

import github.eobrazovanje.entity.Message;
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

    List<Message> findAllBySender_idOrRecipient_idOrderByDate(long sender_id, long recipient_id);

    List<Message> findAllBySender_UsernameOrRecipient_UsernameOrderByDate(String sender_username, String recipient_username);

    List<Message> findAllBySender_UsernameOrRecipient_UsernameOrderByDateDesc(String sender_username, String recipient_username);

    List<Message> findAllByRecipient_UsernameAndSeenIsFalseOrderBySender(String username);
}
