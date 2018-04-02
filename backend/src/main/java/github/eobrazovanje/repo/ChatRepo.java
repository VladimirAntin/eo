package github.eobrazovanje.repo;

import github.eobrazovanje.entity.Chat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.4.18.
  Time: 18.03
*/
@Repository
public interface ChatRepo extends JpaRepository<Chat,Long>{
    List<Chat> findAllByOrderByDate();
    List<Chat> findAllByOrderByDateDesc();
}
