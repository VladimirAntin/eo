package github.eobrazovanje.controller.entity;

import github.eobrazovanje.converter.*;
import github.eobrazovanje.dto.PredmetDto;
import github.eobrazovanje.entity.Nastavnik;
import github.eobrazovanje.entity.Predmet;
import github.eobrazovanje.entity.Ucenik;
import github.eobrazovanje.helpers.HelperDto;
import github.eobrazovanje.service.NastavnikService;
import github.eobrazovanje.service.PredmetService;
import github.eobrazovanje.service.UcenikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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
    private NastavnikService nastavnikService;

    @Autowired
    private UcenikService ucenikService;

    @Autowired
    private PredmetToPredmetDto toPredmetDto;

    @Autowired
    private PredmetDtoToPredmet toPredmet;

    @Autowired
    private NastavnikToNastavnikDto toNastavnikDto;

    @Autowired
    private UcenikToUcenikDto toUcenikDto;

    @Autowired
    private UplataToUplataDto toUplataDto;

    @Autowired
    private IspitToIspitDto toIspitDto;

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

    @GetMapping("/{id}/ispiti")
    public ResponseEntity ispiti(@PathVariable long id) {
        Predmet predmet = predmetService.findOne(id);
        if(predmet==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(toIspitDto.convert(predmet.getIspiti()));
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity post(@RequestBody @Validated PredmetDto dto, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        if(dto.getId()!=0){
            return new ResponseEntity(HttpStatus.CONFLICT); //not send id
        }
        Predmet predmet = predmetService.save(toPredmet.convert(dto));
        if(predmet==null){
            return new ResponseEntity(HttpStatus.CONFLICT); //predmet nije sacuvan
        }
        return ResponseEntity.ok(toPredmetDto.convert(predmet));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN', 'PROFESOR')")
    public ResponseEntity put(@PathVariable long id, @RequestBody @Validated PredmetDto dto, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        if(dto.getId()!=id){
            return new ResponseEntity(HttpStatus.BAD_REQUEST); //not send id
        }
        Predmet predmet = predmetService.save(toPredmet.convert(dto));
        if(predmet==null){
            return new ResponseEntity(HttpStatus.CONFLICT); //predmet nije izmenjen
        }
        return ResponseEntity.ok(toPredmetDto.convert(predmet));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable long id){
        Predmet predmet = predmetService.findOne(id);
        if(predmet==null){
            return ResponseEntity.notFound().build();
        }
        predmetService.delete(id); // predmet obrisan
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{id}/nastavnici")
    public ResponseEntity postNastavnik(@PathVariable long id, @RequestBody HelperDto dto){
        Predmet predmet = predmetService.findOne(id);
        if(predmet.getNastavnici().stream().allMatch(n -> n.getId()!=dto.getId())){
            Nastavnik nastavnik = nastavnikService.findOne(dto.getId());
            if(nastavnik==null){
                return new ResponseEntity<>(String.format("Korisnik sa id %d nije nastavnik", dto.getId()),HttpStatus.CONFLICT);
            }
            predmet.getNastavnici().add(nastavnik);
            predmet = predmetService.save(predmet);
            if(predmet==null){
                return new ResponseEntity<>("Trenutno nije moguce dodati nastavnika kao predavaca",HttpStatus.CONFLICT);
            }
            return ResponseEntity.ok().build();
        }
        return new ResponseEntity<>("Nastavnik je vec predavac predmeta",HttpStatus.CONFLICT);
    }

    @DeleteMapping("/{id}/nastavnici/{nastavnik}")
    public ResponseEntity deleteNastavnik(@PathVariable long id, @PathVariable long nastavnik){
        Predmet predmet = predmetService.findOne(id);
        if(predmet==null){
            return ResponseEntity.notFound().build();
        }
        return predmetService.deleteNastavnik(predmet,nastavnik)?
                ResponseEntity.noContent().build(): ResponseEntity.notFound().build();
    }

    @PostMapping("/{id}/ucenici")
    public ResponseEntity postUcenici(@PathVariable long id, @RequestBody HelperDto dto){
        Predmet predmet = predmetService.findOne(id);
        if(predmet.getUcenici().stream().allMatch(n -> n.getId()!=dto.getId())){
            Ucenik ucenik = ucenikService.findOne(dto.getId());
            if(ucenik==null){
                return new ResponseEntity<>(String.format("Korisnik sa id %d nije ucenik", dto.getId()),HttpStatus.CONFLICT);
            }
            predmet.getUcenici().add(ucenik);
            predmet = predmetService.save(predmet);
            if(predmet==null){
                return new ResponseEntity<>("Trenutno nije moguce dodati ucenika na predmet",HttpStatus.CONFLICT);
            }
            return ResponseEntity.ok().build();
        }
        return new ResponseEntity<>("Ucenik je vec dadat u predmet",HttpStatus.CONFLICT);
    }

    @DeleteMapping("/{id}/ucenici/{ucenik}")
    public ResponseEntity deleteUcenici(@PathVariable long id, @PathVariable long ucenik){
        Predmet predmet = predmetService.findOne(id);
        if(predmet==null){
            return ResponseEntity.notFound().build();
        }
        return predmetService.deleteUcenik(predmet,ucenik)?
                ResponseEntity.noContent().build():ResponseEntity.notFound().build();
    }
}
