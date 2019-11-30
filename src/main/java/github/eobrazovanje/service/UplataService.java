package github.eobrazovanje.service;

import github.eobrazovanje.entity.Uplata;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.12
*/
public interface UplataService {
    Uplata findOne(long id);

    List<Uplata> findAll();

    Uplata save(Uplata uplata);

    void delete(long id);
}
