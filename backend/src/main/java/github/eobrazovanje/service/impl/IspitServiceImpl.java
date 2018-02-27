package github.eobrazovanje.service.impl;

import github.eobrazovanje.entity.Ispit;
import github.eobrazovanje.repo.IspitRepo;
import github.eobrazovanje.service.IspitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.26
*/
@Service
public class IspitServiceImpl implements IspitService{

    @Autowired
    private IspitRepo repo;

    @Override
    public Ispit findOne(long id) {
        return repo.findOne(id);
    }

    @Override
    public List<Ispit> findAll() {
        return repo.findAll();
    }

    @Override
    public Ispit save(Ispit ispit) {
        return repo.save(ispit);
    }

    @Override
    public void delete(long id) {
        repo.delete(id);
    }
}
