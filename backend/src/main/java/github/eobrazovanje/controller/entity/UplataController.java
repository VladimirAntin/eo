package github.eobrazovanje.controller.entity;

import github.eobrazovanje.converter.UplataDtoToUplata;
import github.eobrazovanje.converter.UplataToUplataDto;
import github.eobrazovanje.dto.UplataDto;
import github.eobrazovanje.entity.Uplata;
import github.eobrazovanje.service.UplataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 18.3.18.
  Time: 14.54
*/
@RestController
@RequestMapping("api/uplate")
public class UplataController {

    @Autowired
    private UplataToUplataDto toUplataDto;

    @Autowired
    private UplataDtoToUplata toUplata;

    @Autowired
    private UplataService uplataService;

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity post(@RequestBody @Validated UplataDto dto, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        if(dto.getId()!=0){
            return new ResponseEntity(HttpStatus.CONFLICT); //not send id
        }
        Uplata uplata = uplataService.save(toUplata.convert(dto));
        return Optional.ofNullable(uplata).isPresent() ?
                ResponseEntity.status(HttpStatus.CREATED).body(toUplataDto.convert(uplata)) : new ResponseEntity(HttpStatus.CONFLICT);
    }
}
