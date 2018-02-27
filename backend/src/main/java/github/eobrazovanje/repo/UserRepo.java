package github.eobrazovanje.repo;

import github.eobrazovanje.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.05
*/
@Repository
public interface UserRepo extends JpaRepository<User,Long>{
}
