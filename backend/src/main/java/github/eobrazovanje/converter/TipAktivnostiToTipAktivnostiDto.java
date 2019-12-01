package github.eobrazovanje.converter;

import github.eobrazovanje.dto.TipAktivnostiDto;
import github.eobrazovanje.entity.TipAktivnosti;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.5.18.
  Time: 13.19
*/
@Component
public class TipAktivnostiToTipAktivnostiDto implements Converter<TipAktivnosti,TipAktivnostiDto> {
    @Override
    public TipAktivnostiDto convert(TipAktivnosti tip) {
        return new TipAktivnostiDto().setId(tip.getId()).setNaziv(tip.getNaziv());
    }

    public Collection<TipAktivnostiDto> convert(Collection<TipAktivnosti> tipAktivnostis){
        return tipAktivnostis.stream().map(this::convert).collect(Collectors.toList());
    }

    public Set<TipAktivnostiDto> convert(Set<TipAktivnosti> tipAktivnostis){
        return tipAktivnostis.stream().map(this::convert).collect(Collectors.toSet());
    }
}
