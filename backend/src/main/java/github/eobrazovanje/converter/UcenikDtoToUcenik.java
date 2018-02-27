package github.eobrazovanje.converter;

import github.eobrazovanje.dto.UcenikDto;
import github.eobrazovanje.entity.Ucenik;
import github.eobrazovanje.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 18.22
*/
@Component
public class UcenikDtoToUcenik implements Converter<UcenikDto,Ucenik> {

    @Autowired
    private UserService userService;

    @Override
    public Ucenik convert(UcenikDto dto) {
        return new Ucenik(dto.getId(),dto.getIme(),dto.getPrezime(),dto.getUsername(),userService.findOne(dto.getId()).getPassword())
                .setBrojIndexa(dto.getBrojIndexa());
    }
}
