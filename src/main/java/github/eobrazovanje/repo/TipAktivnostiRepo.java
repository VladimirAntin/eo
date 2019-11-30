package github.eobrazovanje.repo;

import github.eobrazovanje.entity.TipAktivnosti;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.5.18.
  Time: 13.09
*/
@Repository
public interface TipAktivnostiRepo extends JpaRepository<TipAktivnosti, Long> {
}
