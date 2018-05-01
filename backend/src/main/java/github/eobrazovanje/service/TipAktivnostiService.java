package github.eobrazovanje.service;

import github.eobrazovanje.entity.TipAktivnosti;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.5.18.
  Time: 13.16
*/
public interface TipAktivnostiService {

    TipAktivnosti findOne(long id);

    List<TipAktivnosti> findAll();

    TipAktivnosti save(TipAktivnosti tipAktivnosti);

    void delete(long id);
}
