package github.eobrazovanje.converter;

import github.eobrazovanje.dto.NastavnikDto;
import github.eobrazovanje.entity.Nastavnik;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 17.34
*/
@Component
public class NastavnikToNastavnikDto implements Converter<Nastavnik,NastavnikDto>{

    @Autowired
    private ZvanjeToZvanjeDto toZvanjeDto;

    @Override
    public NastavnikDto convert(Nastavnik nastavnik) {
        return new NastavnikDto(nastavnik.getId(),nastavnik.getIme(),nastavnik.getPrezime(),nastavnik.getUsername())
                .setZvanje(toZvanjeDto.convert(nastavnik.getZvanje()));
    }

    public List<NastavnikDto> convert(Collection<Nastavnik> nastavnici){
        return nastavnici.stream().map(this::convert).collect(Collectors.toList());
    }
}
