package github.eobrazovanje.controller.entity;

import github.eobrazovanje.converter.ZvanjeToZvanjeDto;
import github.eobrazovanje.service.ZvanjeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping
    public ResponseEntity getAll(){
        return ResponseEntity.ok(toZvanjeDto.convert(zvanjeService.findAll()));
    }

    @GetMapping("/{id}")
    public ResponseEntity getOne(@PathVariable long id){
        return ResponseEntity.ok(toZvanjeDto.convert(zvanjeService.findOne(id)));
    }

}
