package github.eobrazovanje.converter;

import github.eobrazovanje.dto.IspitDto;
import github.eobrazovanje.entity.Ispit;
import github.eobrazovanje.service.PredmetService;
import github.eobrazovanje.service.UcenikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 16.33
*/
@Component
public class IspitDtoToIspit implements Converter<IspitDto,Ispit>{

    @Autowired
    private PredmetService predmetService;

    @Override
    public Ispit convert(IspitDto dto) {
        return new Ispit()
                .setId(dto.getId())
                .setBodovi(dto.getBodovi())
                .setPredmet(predmetService.findOne(dto.getPredmet()));
    }
}
