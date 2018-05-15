package github.eobrazovanje.controller.entity;

import github.eobrazovanje.converter.TipDokumentaDtoToTipDokumenta;
import github.eobrazovanje.converter.TipDokumentaToTipDokumentaDto;
import github.eobrazovanje.dto.TipDokumentaDto;
import github.eobrazovanje.entity.TipDokumenta;
import github.eobrazovanje.service.TipDokumentaService;
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

    @Autowired
    private TipDokumentaDtoToTipDokumenta toTipDokumenta;


    @GetMapping
    public ResponseEntity getAll(){
        return ResponseEntity.ok(toTipDokumentaDto.convert(tipDokumentaService.findAll()));
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity post(@RequestBody @Validated TipDokumentaDto dto, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        if(dto.getId()!=0){
            return ResponseEntity.badRequest().build();
        }
        TipDokumenta tipDokumenta = tipDokumentaService.save(toTipDokumenta.convert(dto));
        if(tipDokumenta==null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.created(URI.create("/api/tipovi_dokumenta/"+tipDokumenta.getId())).body(toTipDokumentaDto.convert(tipDokumenta));
    }

}
