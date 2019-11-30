package github.eobrazovanje.converter;

import github.eobrazovanje.dto.ZvanjeDto;
import github.eobrazovanje.entity.Zvanje;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 18.49
*/
@Component
public class ZvanjeDtoToZvanje implements Converter<ZvanjeDto,Zvanje> {
    @Override
    public Zvanje convert(ZvanjeDto dto) {
        return new Zvanje()
                .setId(dto.getId())
                .setNaziv(dto.getNaziv());
    }
}
