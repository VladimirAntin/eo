package github.eobrazovanje.controller.entity;

import github.eobrazovanje.converter.UcenikToUcenikDto;
import github.eobrazovanje.service.UcenikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 17.3.18.
  Time: 19.43
*/
@RestController
@RequestMapping("api/ucenici")
public class UcenikController {
    @Autowired
    private UcenikService ucenikService;

    @Autowired
    private UcenikToUcenikDto toUcenikDto;

    @GetMapping
    public ResponseEntity getAll(){
        return  ResponseEntity.ok(toUcenikDto.convert(ucenikService.findAll()));
    }
}
