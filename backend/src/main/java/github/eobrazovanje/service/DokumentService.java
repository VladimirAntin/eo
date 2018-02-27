package github.eobrazovanje.service;

import github.eobrazovanje.entity.Dokument;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.10
*/
public interface DokumentService {
    Dokument findOne(long id);

    List<Dokument> findAll();

    Dokument save(Dokument dokument);

    void delete(long id);
}
