package github.eobrazovanje.service.impl;

import github.eobrazovanje.entity.Uplata;
import github.eobrazovanje.repo.UplataRepo;
import github.eobrazovanje.service.UplataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.33
*/
@Service
public class UplataServiceImpl implements UplataService{

    @Autowired
    private UplataRepo repo;

    @Override
    public Uplata findOne(long id) {
        return repo.findOne(id);
    }

    @Override
    public List<Uplata> findAll() {
        return repo.findAll();
    }

    @Override
    public Uplata save(Uplata uplata) {
        return repo.save(uplata);
    }

    @Override
    public void delete(long id) {
        repo.delete(id);
    }
}
