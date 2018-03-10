package github.eobrazovanje.converter;

import github.eobrazovanje.dto.AktivnostDto;
import github.eobrazovanje.entity.Aktivnost;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 15.19
*/
@Component
public class AktivnostToAktivnostDto implements Converter<Aktivnost,AktivnostDto> {

    @Autowired
    private UcenikToUcenikDto toUcenikDto;

    @Autowired
    private IspitToIspitDto toIspitDto;

    @Override
    public AktivnostDto convert(Aktivnost aktivnost) {
        return new AktivnostDto()
                .setId(aktivnost.getId())
                .setNaziv(aktivnost.getNaziv())
                .setBrojBodova(aktivnost.getBrojBodova())
                .setIspit(toIspitDto.convert(aktivnost.getIspit()))
                .setUcenik(toUcenikDto.convert(aktivnost.getUcenik()));
    }

    public List<AktivnostDto> convert(List<Aktivnost> aktivnosts){
        return aktivnosts.stream().map(this::convert).collect(Collectors.toList());
    }
}
