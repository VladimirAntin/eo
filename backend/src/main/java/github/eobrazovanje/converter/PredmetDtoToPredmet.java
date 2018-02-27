package github.eobrazovanje.converter;

import github.eobrazovanje.dto.PredmetDto;
import github.eobrazovanje.entity.Predmet;
import github.eobrazovanje.service.NastavnikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 17.59
*/
@Component
public class PredmetDtoToPredmet implements Converter<PredmetDto,Predmet>{

    @Autowired
    private NastavnikService nastavnikService;

    @Override
    public Predmet convert(PredmetDto dto) {
        return new Predmet()
                .setId(dto.getId())
                .setBrojCasoovaVezbi(dto.getBrojCasoovaVezbi())
                .setBrojCasovaPredavanja(dto.getBrojCasovaPredavanja())
                .setNaziv(dto.getNaziv())
                .setAktivnosti(dto.getAktivnosti())
                .setNastavnici(dto.getNastavnici().stream().map(n -> nastavnikService.findOne(n)).collect(Collectors.toSet()));
    }
}
