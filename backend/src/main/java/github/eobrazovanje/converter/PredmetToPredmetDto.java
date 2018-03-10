package github.eobrazovanje.converter;

import github.eobrazovanje.dto.PredmetDto;
import github.eobrazovanje.entity.Predmet;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 17.59
*/
@Component
public class PredmetToPredmetDto implements Converter<Predmet,PredmetDto>{
    @Override
    public PredmetDto convert(Predmet predmet) {
        return new PredmetDto()
                .setId(predmet.getId())
                .setNaziv(predmet.getNaziv())
                .setBrojCasovaVezbi(predmet.getBrojCasovaVezbi())
                .setBrojCasovaPredavanja(predmet.getBrojCasovaPredavanja())
                .setAktivnosti(predmet.getAktivnosti());
    }


    public List<PredmetDto> convert(Collection<Predmet> predmeti){
        return predmeti.stream().map(this::convert).collect(Collectors.toList());
    }

}
