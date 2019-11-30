package github.eobrazovanje.repo;

import github.eobrazovanje.entity.Uplata;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.04
*/
@Repository
public interface UplataRepo extends JpaRepository<Uplata,Long>{
}
