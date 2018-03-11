package github.eobrazovanje.controller.entity;

import github.eobrazovanje.converter.TipDokumentaToTipDokumentaDto;
import github.eobrazovanje.service.TipDokumentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 11.3.18.
  Time: 21.00
*/
@RestController
@RequestMapping("api/tipovi_dokumenta")
public class TypeDocumentController {

    @Autowired
    private TipDokumentaService tipDokumentaService;

    @Autowired
    private TipDokumentaToTipDokumentaDto toTipDokumentaDto;

    @GetMapping
    public ResponseEntity getAll(){
        return ResponseEntity.ok(toTipDokumentaDto.convert(tipDokumentaService.findAll()));
    }

}
