package github.eobrazovanje.service.impl;

import github.eobrazovanje.entity.Aktivnost;
import github.eobrazovanje.repo.AktivnostRepo;
import github.eobrazovanje.service.AktivnostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.21
*/
@Service
public class AktivnostServiceImpl implements AktivnostService{

    @Autowired
    private AktivnostRepo repo;

    @Override
    public Aktivnost findOne(long id) {
        return repo.findOne(id);
    }

    @Override
    public List<Aktivnost> findAll() {
        return repo.findAll();
    }

    @Override
    public Aktivnost save(Aktivnost aktivnost) {
        return repo.save(aktivnost);
    }

    @Override
    public void delete(long id) {
        repo.delete(id);
    }
}
