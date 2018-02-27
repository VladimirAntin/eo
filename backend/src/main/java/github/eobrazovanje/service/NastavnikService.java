package github.eobrazovanje.service;

import github.eobrazovanje.entity.Nastavnik;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.11
*/
public interface NastavnikService {
    Nastavnik findOne(long id);

    List<Nastavnik> findAll();

    Nastavnik save(Nastavnik nastavnik);

    void delete(long id);
}
