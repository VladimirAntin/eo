package github.eobrazovanje.repo;

import github.eobrazovanje.entity.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 3.3.18.
  Time: 14.37
*/
@Repository
public interface AuthorityRepo extends JpaRepository<Authority,Long> {
}
