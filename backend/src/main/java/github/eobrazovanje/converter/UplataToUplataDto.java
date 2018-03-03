package github.eobrazovanje.converter;

import github.eobrazovanje.dto.UplataDto;
import github.eobrazovanje.entity.Uplata;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 18.43
*/
@Component
public class UplataToUplataDto implements Converter<Uplata,UplataDto> {
    @Override
    public UplataDto convert(Uplata uplata) {
        return new UplataDto()
                .setId(uplata.getId())
                .setSuma(uplata.getSuma())
                .setPredmet(uplata.getPredmet().getId())
                .setUcenik(uplata.getUcenik().getId());
    }

    public List<UplataDto> convert(Collection<Uplata> uplate){
        return uplate.stream().map(this::convert).collect(Collectors.toList());
    }
}
