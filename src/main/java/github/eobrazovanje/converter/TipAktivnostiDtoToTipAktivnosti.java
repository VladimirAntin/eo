package github.eobrazovanje.converter;

import github.eobrazovanje.dto.TipAktivnostiDto;
import github.eobrazovanje.entity.TipAktivnosti;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.5.18.
  Time: 13.22
*/
@Component
public class TipAktivnostiDtoToTipAktivnosti implements Converter<TipAktivnostiDto,TipAktivnosti> {
    @Override
    public TipAktivnosti convert(TipAktivnostiDto dto) {
        return new TipAktivnosti().setId(dto.getId()).setNaziv(dto.getNaziv());
    }

    public List<TipAktivnosti> convert(Collection<TipAktivnostiDto> tipAktivnostis){
        return tipAktivnostis.stream().map(this::convert).collect(Collectors.toList());
    }

    public Set<TipAktivnosti> convert(Set<TipAktivnostiDto> tipAktivnostis){
        return tipAktivnostis.stream().map(this::convert).collect(Collectors.toSet());
    }
}
