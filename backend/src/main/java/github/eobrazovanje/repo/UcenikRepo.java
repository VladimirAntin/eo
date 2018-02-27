package github.eobrazovanje.repo;

import github.eobrazovanje.entity.Ucenik;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 26.2.18.
  Time: 15.25
*/
@Repository
public interface UcenikRepo extends JpaRepository<Ucenik,Long>{
}
