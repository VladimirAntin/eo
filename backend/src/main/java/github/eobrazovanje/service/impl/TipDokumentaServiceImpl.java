package github.eobrazovanje.service.impl;

import github.eobrazovanje.entity.TipDokumenta;
import github.eobrazovanje.repo.TipDokumentaRepo;
import github.eobrazovanje.service.TipDokumentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.30
*/
@Service
public class TipDokumentaServiceImpl implements TipDokumentaService{

    @Autowired
    private TipDokumentaRepo repo;

    @Override
    public TipDokumenta findOne(long id) {
        return repo.findOne(id);
    }

    @Override
    public List<TipDokumenta> findAll() {
        return repo.findAll();
    }

    @Override
    public TipDokumenta save(TipDokumenta tipDokumenta) {
        return repo.save(tipDokumenta);
    }

    @Override
    public void delete(long id) {
        repo.delete(id);
    }
}
