package github.eobrazovanje.repo;

import github.eobrazovanje.entity.TipDokumenta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.04
*/
@Repository
public interface TipDokumentaRepo extends JpaRepository<TipDokumenta,Long>{
}
