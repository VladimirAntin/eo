package github.eobrazovanje.repo;

import github.eobrazovanje.entity.Zvanje;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 26.2.18.
  Time: 15.40
*/
@Repository
public interface ZvanjeRepo extends JpaRepository<Zvanje,Long>{
}
