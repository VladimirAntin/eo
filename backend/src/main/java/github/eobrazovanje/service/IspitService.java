package github.eobrazovanje.service;

import github.eobrazovanje.entity.Ispit;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.10
*/
public interface IspitService {
    Ispit findOne(long id);

    List<Ispit> findAll();

    Ispit save(Ispit ispit);

    void delete(long id);
}
