package github.eobrazovanje.service;

import github.eobrazovanje.entity.Predmet;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.11
*/
public interface PredmetService {
    Predmet findOne(long id);

    List<Predmet> findAll();

    Predmet save(Predmet predmet);

    void delete(long id);

    boolean deleteNastavnik(Predmet predmet,long id);

    boolean deleteUcenik(Predmet predmet, long id);
}
