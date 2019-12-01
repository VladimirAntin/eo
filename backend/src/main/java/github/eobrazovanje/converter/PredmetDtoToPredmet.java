package github.eobrazovanje.converter;

import github.eobrazovanje.dto.PredmetDto;
import github.eobrazovanje.entity.Predmet;
import github.eobrazovanje.service.PredmetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 17.59
*/
@Component
public class PredmetDtoToPredmet implements Converter<PredmetDto,Predmet>{

    @Autowired
    private PredmetService predmetService;

    @Autowired
    private TipAktivnostiDtoToTipAktivnosti toEntity;

    @Override
    public Predmet convert(PredmetDto dto) {
        return new Predmet()
                .setId(dto.getId())
                .setBrojCasovaVezbi(dto.getBrojCasovaVezbi())
                .setBrojCasovaPredavanja(dto.getBrojCasovaPredavanja())
                .setNaziv(dto.getNaziv())
                .setOpis(dto.getOpis())
                .setAktivnosti(toEntity.convert(dto.getAktivnosti()));
    }

    public Predmet convert(PredmetDto dto, boolean edit){
        Predmet predmet = convert(dto);
        Predmet predmetFromBase = predmetService.findOne(dto.getId());
        if(edit){
            predmet
                    .setNastavnici(predmetFromBase.getNastavnici())
                    .setUcenici(predmetFromBase.getUcenici());
        }
        return  predmet;

    }
}
