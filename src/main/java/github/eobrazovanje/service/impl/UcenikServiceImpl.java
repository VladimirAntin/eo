package github.eobrazovanje.service.impl;

import github.eobrazovanje.entity.Ucenik;
import github.eobrazovanje.repo.UcenikRepo;
import github.eobrazovanje.service.UcenikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.32
*/
@Service
public class UcenikServiceImpl implements UcenikService{

    @Autowired
    private UcenikRepo repo;

    @Override
    public Ucenik findOne(long id) {
        return repo.findOne(id);
    }

    @Override
    public List<Ucenik> findAll() {
        return repo.findAll();
    }

    @Override
    public Ucenik save(Ucenik ucenik) {
        return repo.save(ucenik);
    }

    @Override
    public void delete(long id) {
        repo.delete(id);
    }
}
