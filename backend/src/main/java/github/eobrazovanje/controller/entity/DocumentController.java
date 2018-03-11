package github.eobrazovanje.controller.entity;

import github.eobrazovanje.converter.DokumentDtoToDokument;
import github.eobrazovanje.converter.DokumentToDokumentDto;
import github.eobrazovanje.dto.DokumentDto;
import github.eobrazovanje.entity.Dokument;
import github.eobrazovanje.service.DokumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 11.3.18.
  Time: 20.30
*/
@RestController
@RequestMapping("api/dokumenti")
public class DocumentController {

    @Autowired
    private DokumentService dokumentService;

    @Autowired
    private DokumentDtoToDokument toDokument;

    @Autowired
    private DokumentToDokumentDto toDokumentDto;

    @PostMapping
    public ResponseEntity post(@RequestBody @Validated DokumentDto dto, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        if(dto.getId()!=0){
            return new ResponseEntity(HttpStatus.CONFLICT); //not send id
        }
        Dokument dokument = dokumentService.save(toDokument.convert(dto));
        if(dokument==null){
            return new ResponseEntity(HttpStatus.CONFLICT);
        }
        return ResponseEntity.ok(toDokumentDto.convert(dokument));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable long id){
        Dokument dokument = dokumentService.findOne(id);
        if(dokument==null){
            return ResponseEntity.notFound().build();
        }
        dokumentService.delete(dokument.getId());
        return ResponseEntity.noContent().build();
    }

}
