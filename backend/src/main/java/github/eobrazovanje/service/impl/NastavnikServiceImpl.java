package github.eobrazovanje.service.impl;

import github.eobrazovanje.entity.Nastavnik;
import github.eobrazovanje.repo.NastavnikRepo;
import github.eobrazovanje.service.NastavnikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.28
*/
@Service
public class NastavnikServiceImpl implements NastavnikService{

    @Autowired
    private NastavnikRepo repo;

    @Override
    public Nastavnik findOne(long id) {
        return repo.findOne(id);
    }

    @Override
    public List<Nastavnik> findAll() {
        return repo.findAll();
    }

    @Override
    public Nastavnik save(Nastavnik nastavnik) {
        return repo.save(nastavnik);
    }

    @Override
    public void delete(long id) {
        repo.delete(id);
    }
}
