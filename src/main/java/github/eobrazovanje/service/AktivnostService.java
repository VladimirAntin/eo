package github.eobrazovanje.service;

import github.eobrazovanje.entity.Aktivnost;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.10
*/
public interface AktivnostService {
    Aktivnost findOne(long id);

    List<Aktivnost> findAll();

    Aktivnost save(Aktivnost aktivnost);

    void delete(long id);
}
