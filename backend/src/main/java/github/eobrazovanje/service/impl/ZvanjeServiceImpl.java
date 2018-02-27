package github.eobrazovanje.service.impl;

import github.eobrazovanje.entity.Zvanje;
import github.eobrazovanje.repo.ZvanjeRepo;
import github.eobrazovanje.service.ZvanjeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.36
*/
@Service
public class ZvanjeServiceImpl implements ZvanjeService{

    @Autowired
    private ZvanjeRepo repo;

    @Override
    public Zvanje findOne(long id) {
        return repo.findOne(id);
    }

    @Override
    public List<Zvanje> findAll() {
        return repo.findAll();
    }

    @Override
    public Zvanje save(Zvanje zvanje) {
        return repo.save(zvanje);
    }

    @Override
    public void delete(long id) {
        repo.delete(id);
    }
}
