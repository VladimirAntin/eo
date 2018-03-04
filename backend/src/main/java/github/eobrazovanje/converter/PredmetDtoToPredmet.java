package github.eobrazovanje.converter;

import github.eobrazovanje.dto.PredmetDto;
import github.eobrazovanje.entity.Predmet;
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

    @Override
    public Predmet convert(PredmetDto dto) {
        return new Predmet()
                .setId(dto.getId())
                .setBrojCasovaVezbi(dto.getBrojCasoovaVezbi())
                .setBrojCasovaPredavanja(dto.getBrojCasovaPredavanja())
                .setNaziv(dto.getNaziv())
                .setAktivnosti(dto.getAktivnosti());
    }
}
