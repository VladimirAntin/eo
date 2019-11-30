package github.eobrazovanje.service;

import github.eobrazovanje.entity.Zvanje;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.12
*/
public interface ZvanjeService {
    Zvanje findOne(long id);

    List<Zvanje> findAll();

    Zvanje save(Zvanje zvanje);

    void delete(long id);
}
