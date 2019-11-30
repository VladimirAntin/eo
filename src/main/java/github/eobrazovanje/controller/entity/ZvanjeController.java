package github.eobrazovanje.controller.entity;

import github.eobrazovanje.converter.ZvanjeDtoToZvanje;
import github.eobrazovanje.converter.ZvanjeToZvanjeDto;
import github.eobrazovanje.dto.ZvanjeDto;
import github.eobrazovanje.entity.Zvanje;
import github.eobrazovanje.service.ZvanjeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Optional;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 9.3.18.
  Time: 22.57
*/
@RestController
@RequestMapping("api/zvanja")
public class ZvanjeController {

    @Autowired
    private ZvanjeService zvanjeService;

    @Autowired
    private ZvanjeToZvanjeDto toZvanjeDto;

    @Autowired
    private ZvanjeDtoToZvanje toZvanje;

    @GetMapping
    public ResponseEntity getAll(){
        return ResponseEntity.ok(toZvanjeDto.convert(zvanjeService.findAll()));
    }

    @GetMapping("/{id}")
    public ResponseEntity getOne(@PathVariable long id){
        Zvanje zvanje = zvanjeService.findOne(id);
        return Optional.ofNullable(zvanje).isPresent()?
            ResponseEntity.ok(toZvanjeDto.convert(zvanje)) : ResponseEntity.notFound().build();
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity post(@RequestBody @Validated ZvanjeDto dto, Errors errors){
        if(errors.hasErrors()){
            return ResponseEntity.badRequest().build();
        }
        if(dto.getId()!=0){
            return ResponseEntity.badRequest().build();
        }
        Zvanje zvanje = zvanjeService.save(toZvanje.convert(dto));
        if(zvanje==null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.created(URI.create("/api/zvanja/"+zvanje.getId())).body(toZvanjeDto.convert(zvanje));
    }

}
