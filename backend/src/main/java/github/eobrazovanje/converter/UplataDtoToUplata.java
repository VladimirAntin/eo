package github.eobrazovanje.converter;

import github.eobrazovanje.dto.UplataDto;
import github.eobrazovanje.entity.Uplata;
import github.eobrazovanje.service.PredmetService;
import github.eobrazovanje.service.UcenikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 18.44
*/
@Component
public class UplataDtoToUplata implements Converter<UplataDto,Uplata> {

    @Autowired
    private UcenikService ucenikService;

    @Autowired
    private PredmetService predmetService;

    @Override
    public Uplata convert(UplataDto dto) {
        return new Uplata()
                .setId(dto.getId())
                .setSuma(dto.getSuma())
                .setUcenik(ucenikService.findOne(dto.getUcenik()))
                .setPredmet(predmetService.findOne(dto.getPredmet()));
    }
}
