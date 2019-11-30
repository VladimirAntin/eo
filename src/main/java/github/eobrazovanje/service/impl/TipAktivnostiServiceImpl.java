package github.eobrazovanje.service.impl;

import github.eobrazovanje.entity.TipAktivnosti;
import github.eobrazovanje.repo.TipAktivnostiRepo;
import github.eobrazovanje.service.TipAktivnostiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.5.18.
  Time: 13.17
*/
@Service
public class TipAktivnostiServiceImpl implements TipAktivnostiService {

    @Autowired
    private TipAktivnostiRepo repo;

    @Override
    public TipAktivnosti findOne(long id) {
        return repo.findOne(id);
    }

    @Override
    public List<TipAktivnosti> findAll() {
        return repo.findAll();
    }

    @Override
    public TipAktivnosti save(TipAktivnosti tipAktivnosti) {
        return repo.save(tipAktivnosti);
    }

    @Override
    public void delete(long id) {
        repo.delete(id);
    }
}
