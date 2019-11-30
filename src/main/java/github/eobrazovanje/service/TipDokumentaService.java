package github.eobrazovanje.service;

import github.eobrazovanje.entity.TipDokumenta;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.11
*/
public interface TipDokumentaService {
    TipDokumenta findOne(long id);

    List<TipDokumenta> findAll();

    TipDokumenta save(TipDokumenta tipDokumenta);

    void delete(long id);
}
