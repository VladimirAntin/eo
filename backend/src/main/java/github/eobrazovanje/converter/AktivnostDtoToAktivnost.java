package github.eobrazovanje.converter;

import github.eobrazovanje.dto.AktivnostDto;
import github.eobrazovanje.entity.Aktivnost;
import github.eobrazovanje.service.PredmetService;
import github.eobrazovanje.service.UcenikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 15.12
*/
@Component
public class AktivnostDtoToAktivnost implements Converter<AktivnostDto,Aktivnost>{

    @Autowired
    private UcenikService ucenikService;

    @Autowired
    private PredmetService predmetService;

    @Override
    public Aktivnost convert(AktivnostDto dto) {
        return new Aktivnost()
                .setId(dto.getId())
                .setNaziv(dto.getNaziv())
                .setBrojBodova(dto.getBrojBodova())
                .setPredmet(predmetService.findOne(dto.getPredmet()))
                .setUcenik(ucenikService.findOne(dto.getUcenik()));
    }
}
