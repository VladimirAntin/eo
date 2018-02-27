package github.eobrazovanje.service;

import github.eobrazovanje.entity.Ucenik;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.11
*/
public interface UcenikService {
    Ucenik findOne(long id);

    List<Ucenik> findAll();

    Ucenik save(Ucenik ucenik);

    void delete(long id);
}
