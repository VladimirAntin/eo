package github.eobrazovanje.controller.entity;

import github.eobrazovanje.converter.TipAktivnostiToTipAktivnostiDto;
import github.eobrazovanje.service.TipAktivnostiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping()
    public ResponseEntity getAll() {
        return ResponseEntity.ok(toDto.convert(tipAktivnostiService.findAll()));
    }
}
