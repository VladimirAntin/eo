package github.eobrazovanje.converter;

import github.eobrazovanje.dto.ZvanjeDto;
import github.eobrazovanje.entity.Zvanje;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 18.49
*/
@Component
public class ZvanjeToZvanjeDto implements Converter<Zvanje,ZvanjeDto> {
    @Override
    public ZvanjeDto convert(Zvanje zvanje) {
        return new ZvanjeDto()
                .setId(zvanje.getId())
                .setNaziv(zvanje.getNaziv());
    }

    public List<ZvanjeDto> convert(Collection<Zvanje> zvanja){
        return zvanja.stream().map(this::convert).collect(Collectors.toList());
    }
}
