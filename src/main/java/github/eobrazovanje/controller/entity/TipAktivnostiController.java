package github.eobrazovanje.controller.entity;

import github.eobrazovanje.converter.TipAktivnostiDtoToTipAktivnosti;
import github.eobrazovanje.converter.TipAktivnostiToTipAktivnostiDto;
import github.eobrazovanje.dto.TipAktivnostiDto;
import github.eobrazovanje.entity.TipAktivnosti;
import github.eobrazovanje.service.TipAktivnostiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.5.18.
  Time: 13.30
*/
@RestController
@RequestMapping("api/tipovi_aktivnosti")
public class TipAktivnostiController {

    @Autowired
    private TipAktivnostiService tipAktivnostiService;

    @Autowired
    private TipAktivnostiToTipAktivnostiDto toDto;

    @Autowired
    private TipAktivnostiDtoToTipAktivnosti toTipAktivnosti;

    @GetMapping()
    public ResponseEntity getAll() {
        return ResponseEntity.ok(toDto.convert(tipAktivnostiService.findAll()));
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity post(@RequestBody @Validated TipAktivnostiDto dto, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        if(dto.getId()!=0){
            return ResponseEntity.badRequest().build();
        }
        TipAktivnosti TipAktivnosti = tipAktivnostiService.save(toTipAktivnosti.convert(dto));
        if(TipAktivnosti==null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.created(URI.create("/api/tipovi_aktivnosti/"+TipAktivnosti.getId())).body(toDto.convert(TipAktivnosti));
    }
}
