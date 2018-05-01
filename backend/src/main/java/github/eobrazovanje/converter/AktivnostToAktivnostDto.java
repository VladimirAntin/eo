package github.eobrazovanje.converter;

import github.eobrazovanje.dto.AktivnostDto;
import github.eobrazovanje.entity.Aktivnost;
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
  Time: 15.19
*/
@Component
public class AktivnostToAktivnostDto implements Converter<Aktivnost,AktivnostDto> {

    @Autowired
    private TipAktivnostiToTipAktivnostiDto toDto;

    @Override
    public AktivnostDto convert(Aktivnost aktivnost) {
        return new AktivnostDto()
                .setId(aktivnost.getId())
                .setBrojBodova(aktivnost.getBrojBodova())
                .setPredmet(aktivnost.getPredmet().getId())
                .setUcenik(aktivnost.getUcenik().getId())
                .setTipAktivnosti(toDto.convert(aktivnost.getTipAktivnosti()));
    }

    public List<AktivnostDto> convert(Collection<Aktivnost> aktivnosts){
        return aktivnosts.stream().map(this::convert).collect(Collectors.toList());
    }
}
