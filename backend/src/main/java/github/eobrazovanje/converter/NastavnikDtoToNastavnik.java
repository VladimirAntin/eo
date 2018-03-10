package github.eobrazovanje.converter;

import github.eobrazovanje.dto.NastavnikDto;
import github.eobrazovanje.entity.Nastavnik;
import github.eobrazovanje.service.UserService;
import github.eobrazovanje.service.ZvanjeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 17.34
*/
@Component
public class NastavnikDtoToNastavnik implements Converter<NastavnikDto,Nastavnik> {

    @Autowired
    private ZvanjeService zvanjeService;

    @Autowired
    private UserService userService;

    @Override
    public Nastavnik convert(NastavnikDto dto) {
        return new Nastavnik(dto.getId(), dto.getIme(),dto.getPrezime(),dto.getUsername(),
                dto.getPassword()==null? userService.findOne(dto.getId()).getPassword() : new BCryptPasswordEncoder().encode(dto.getPassword()))
                .setZvanje(zvanjeService.findOne(dto.getZvanje().getId()));
    }

}
