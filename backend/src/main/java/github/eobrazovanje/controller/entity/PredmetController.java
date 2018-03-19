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

import java.util.ArrayList;
import java.util.Optional;

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

    @GetMapping
    public ResponseEntity all() {
        return ResponseEntity.ok(toPredmetDto.convert(predmetService.findAll()));
    }

    @GetMapping("/{id}")
    public ResponseEntity one(@PathVariable long id) {
        Predmet predmet = predmetService.findOne(id);
        return Optional.ofNullable(predmet).isPresent() ?
                ResponseEntity.ok(toPredmetDto.convert(predmet)) : ResponseEntity.notFound().build();
    }

    @GetMapping("/{id}/nastavnici")
    public ResponseEntity nastavnici(@PathVariable long id) {
        Predmet predmet = predmetService.findOne(id);
        return Optional.ofNullable(predmet).isPresent() ?
                ResponseEntity.ok(toNastavnikDto.convert(predmet.getNastavnici())) : ResponseEntity.notFound().build();
    }

    @GetMapping("/{id}/ucenici")
    public ResponseEntity ucenici(@PathVariable long id) {
        Predmet predmet = predmetService.findOne(id);
        return Optional.ofNullable(predmet).isPresent() ?
                ResponseEntity.ok(toUcenikDto.convert(predmet.getUcenici())) : ResponseEntity.notFound().build();
    }

    @GetMapping("/{id}/uplate")
    public ResponseEntity uplate(@PathVariable long id) {
        Predmet predmet = predmetService.findOne(id);
        return Optional.ofNullable(predmet).isPresent() ?
                ResponseEntity.ok(toUplataDto.convert(predmet.getUplate())) : ResponseEntity.notFound().build();
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
        return Optional.ofNullable(predmet).isPresent() ?
                ResponseEntity.status(HttpStatus.CREATED).body(toPredmetDto.convert(predmet)) : new ResponseEntity(HttpStatus.CONFLICT);
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
        Predmet predmet = predmetService.save(toPredmet.convert(dto, true));
        return Optional.ofNullable(predmet).isPresent() ?
                ResponseEntity.ok(toPredmetDto.convert(predmet)) : new ResponseEntity(HttpStatus.CONFLICT);
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
    public ResponseEntity postNastavnik(@PathVariable long id, @RequestBody ArrayList<HelperDto> dtos){
        Predmet predmet = predmetService.findOne(id);
        for (HelperDto dto:dtos) {
            if(predmet.getNastavnici().stream().allMatch(n -> n.getId()!=dto.getId())){
                Nastavnik nastavnik = nastavnikService.findOne(dto.getId());
                if(nastavnik!=null){
                    predmet.getNastavnici().add(nastavnik);
                }
            }
        }
        predmet = predmetService.save(predmet);
        return Optional.ofNullable(predmet).isPresent() ?
                ResponseEntity.ok(toNastavnikDto.convert(predmet.getNastavnici())) :
                new ResponseEntity<>("Trenutno nije moguce dodati ni jednog nastavnika kao predavaca",HttpStatus.CONFLICT);
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
    public ResponseEntity postUcenici(@PathVariable long id, @RequestBody ArrayList<HelperDto> dtos){
        Predmet predmet = predmetService.findOne(id);
        for (HelperDto dto:dtos) {
            if(predmet.getUcenici().stream().allMatch(n -> n.getId()!=dto.getId())){
                Ucenik ucenik = ucenikService.findOne(dto.getId());
                if(ucenik!=null){
                    predmet.getUcenici().add(ucenik);
                }
            }
        }
        predmet = predmetService.save(predmet);
        return Optional.ofNullable(predmet).isPresent() ?
                ResponseEntity.ok(toUcenikDto.convert(predmet.getUcenici())) :
                new ResponseEntity<>("Trenutno nije moguce dodati ni jednog ucenika na predmet",HttpStatus.CONFLICT);
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
