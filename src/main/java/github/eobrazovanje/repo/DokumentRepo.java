package github.eobrazovanje.repo;

import github.eobrazovanje.entity.Dokument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.00
*/
@Repository
public interface DokumentRepo extends JpaRepository<Dokument,Long>{
}
