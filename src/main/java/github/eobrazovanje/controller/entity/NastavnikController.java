package github.eobrazovanje.controller.entity;

import github.eobrazovanje.converter.NastavnikToNastavnikDto;
import github.eobrazovanje.service.NastavnikService;
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
@RequestMapping("api/nastavnici")
public class NastavnikController {

    @Autowired
    private NastavnikService nastavnikService;

    @Autowired
    private NastavnikToNastavnikDto toNastavnikDto;

    @GetMapping
    public ResponseEntity getAll(){
        return  ResponseEntity.ok(toNastavnikDto.convert(nastavnikService.findAll()));
    }
}
