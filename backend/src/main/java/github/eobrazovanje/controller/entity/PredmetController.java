package github.eobrazovanje.controller.entity;

import github.eobrazovanje.converter.NastavnikToNastavnikDto;
import github.eobrazovanje.converter.PredmetToPredmetDto;
import github.eobrazovanje.converter.UcenikToUcenikDto;
import github.eobrazovanje.converter.UplataToUplataDto;
import github.eobrazovanje.entity.Predmet;
import github.eobrazovanje.service.PredmetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 4.3.18.
  Time: 13.19
*/
@RestController
@RequestMapping("api/predmeti")
public class PredmetController {

    @Autowired
    private PredmetService predmetService;

    @Autowired
    private PredmetToPredmetDto toPredmetDto;

    @Autowired
    private NastavnikToNastavnikDto toNastavnikDto;

    @Autowired
    private UcenikToUcenikDto toUcenikDto;

    @Autowired
    private UplataToUplataDto toUplataDto;

    @GetMapping
    public ResponseEntity all() {
        return ResponseEntity.ok(toPredmetDto.convert(predmetService.findAll()));
    }

    @GetMapping("/{id}")
    public ResponseEntity one(@PathVariable long id) {
        Predmet predmet = predmetService.findOne(id);
        if(predmet==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(toPredmetDto.convert(predmet));
    }

    @GetMapping("/{id}/nastavnici")
    public ResponseEntity nastavnici(@PathVariable long id) {
        Predmet predmet = predmetService.findOne(id);
        if(predmet==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(toNastavnikDto.convert(predmet.getNastavnici()));
    }

    @GetMapping("/{id}/ucenici")
    public ResponseEntity ucenici(@PathVariable long id) {
        Predmet predmet = predmetService.findOne(id);
        if(predmet==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(toUcenikDto.convert(predmet.getUcenici()));
    }

    @GetMapping("/{id}/uplate")
    public ResponseEntity uplate(@PathVariable long id) {
        Predmet predmet = predmetService.findOne(id);
        if(predmet==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(toUplataDto.convert(predmet.getUplate()));
    }

}
