package github.eobrazovanje.controller.entity;

import github.eobrazovanje.converter.AktivnostDtoToAktivnost;
import github.eobrazovanje.converter.AktivnostToAktivnostDto;
import github.eobrazovanje.dto.AktivnostDto;
import github.eobrazovanje.entity.Aktivnost;
import github.eobrazovanje.entity.Predmet;
import github.eobrazovanje.service.AktivnostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 16.3.18.
  Time: 19.32
*/
@RestController
@RequestMapping("api/aktivnosti")
public class AktivnostController {

    @Autowired
    private AktivnostService aktivnostService;

    @Autowired
    private AktivnostDtoToAktivnost toAktivnost;

    @Autowired
    private AktivnostToAktivnostDto toAktivnostDto;

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN','PROFESSOR')")
    public ResponseEntity post(@RequestBody @Validated AktivnostDto dto, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        Aktivnost aktivnost = aktivnostService.save(toAktivnost.convert(dto));
        return Optional.ofNullable(aktivnost).isPresent() ?
                ResponseEntity.status(HttpStatus.CREATED).body(toAktivnostDto.convert(aktivnost)) : new ResponseEntity(HttpStatus.CONFLICT);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN', 'PROFESSOR')")
    public ResponseEntity put(@PathVariable long id, @RequestBody @Validated AktivnostDto dto, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        if(dto.getId()!=id){
            return new ResponseEntity(HttpStatus.BAD_REQUEST); //not send id
        }
        Aktivnost aktivnost = aktivnostService.save(toAktivnost.convert(dto));
        return Optional.ofNullable(aktivnost).isPresent() ?
                ResponseEntity.ok(toAktivnostDto.convert(aktivnost)) : new ResponseEntity(HttpStatus.CONFLICT);
    }
}
