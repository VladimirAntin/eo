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
    @PreAuthorize("hasAnyRole('ADMIN','PROFESOR')")
    public ResponseEntity post(@RequestBody @Validated AktivnostDto dto, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        Aktivnost aktivnost = aktivnostService.save(toAktivnost.convert(dto));
        if(aktivnost==null){
            return new ResponseEntity(HttpStatus.CONFLICT);
        }
        return ResponseEntity.ok(toAktivnostDto.convert(aktivnost));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN', 'PROFESOR')")
    public ResponseEntity put(@PathVariable long id, @RequestBody @Validated AktivnostDto dto, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        if(dto.getId()!=id){
            return new ResponseEntity(HttpStatus.BAD_REQUEST); //not send id
        }
        Aktivnost aktivnost = aktivnostService.save(toAktivnost.convert(dto));
        if(aktivnost==null){
            return new ResponseEntity(HttpStatus.CONFLICT);
        }
        return ResponseEntity.ok(toAktivnostDto.convert(aktivnost));
    }
}
