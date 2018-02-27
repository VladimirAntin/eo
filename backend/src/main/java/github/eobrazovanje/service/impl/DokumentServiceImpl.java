package github.eobrazovanje.service.impl;

import github.eobrazovanje.entity.Dokument;
import github.eobrazovanje.repo.DokumentRepo;
import github.eobrazovanje.service.DokumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.25
*/
@Service
public class DokumentServiceImpl implements DokumentService{

    @Autowired
    private DokumentRepo repo;

    @Override
    public Dokument findOne(long id) {
        return repo.findOne(id);
    }

    @Override
    public List<Dokument> findAll() {
        return repo.findAll();
    }

    @Override
    public Dokument save(Dokument dokument) {
        return repo.save(dokument);
    }

    @Override
    public void delete(long id) {
        repo.delete(id);
    }
}
