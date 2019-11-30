package github.eobrazovanje.repo;

import github.eobrazovanje.entity.Aktivnost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 13.59
*/
@Repository
public interface AktivnostRepo extends JpaRepository<Aktivnost,Long>{
}
