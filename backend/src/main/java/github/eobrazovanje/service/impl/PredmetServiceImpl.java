package github.eobrazovanje.service.impl;

import github.eobrazovanje.entity.Predmet;
import github.eobrazovanje.repo.PredmetRepo;
import github.eobrazovanje.service.PredmetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.29
*/
@Service
public class PredmetServiceImpl implements PredmetService{

    @Autowired
    private PredmetRepo repo;


    @Override
    public Predmet findOne(long id) {
        return repo.findOne(id);
    }

    @Override
    public List<Predmet> findAll() {
        return repo.findAll();
    }

    @Override
    public Predmet save(Predmet predmet) {
        return repo.save(predmet);
    }

    @Override
    public void delete(long id) {
        repo.delete(id);
    }

    @Override
    public boolean deleteNastavnik(Predmet predmet,long id) {
        if(predmet.getNastavnici().stream().anyMatch(n -> n.getId()==id)){
            predmet.getNastavnici().removeIf(s -> s.getId()==id);
            repo.save(predmet);
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteUcenik(Predmet predmet,long id) {
        if(predmet.getUcenici().stream().anyMatch(n -> n.getId()==id)){
            predmet.getUcenici().removeIf(s -> s.getId()==id);
            repo.save(predmet);
            return true;
        }
        return false;
    }
}
