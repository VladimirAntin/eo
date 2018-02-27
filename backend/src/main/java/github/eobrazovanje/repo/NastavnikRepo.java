package github.eobrazovanje.repo;

import github.eobrazovanje.entity.Nastavnik;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 26.2.18.
  Time: 15.24
*/
@Repository
public interface NastavnikRepo extends JpaRepository<Nastavnik, Long> {
}
