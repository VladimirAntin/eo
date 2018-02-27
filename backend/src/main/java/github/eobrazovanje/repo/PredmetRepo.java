package github.eobrazovanje.repo;

import github.eobrazovanje.entity.Predmet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.03
*/
@Repository
public interface PredmetRepo extends JpaRepository<Predmet,Long>{
}
