package github.eobrazovanje.converter;

import github.eobrazovanje.dto.UcenikDto;
import github.eobrazovanje.entity.Authority;
import github.eobrazovanje.entity.Ucenik;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 18.22
*/
@Component
public class UcenikToUcenikDto implements Converter<Ucenik,UcenikDto> {

    @Override
    public UcenikDto convert(Ucenik ucenik) {
        return new UcenikDto(ucenik.getId(),ucenik.getIme(),ucenik.getPrezime(),ucenik.getUsername(),
                ucenik.getEmail(), (Set<Authority>) ucenik.getAuthorities())
                .setBrojIndexa(ucenik.getBrojIndexa());
    }

    public List<UcenikDto> convert(Collection<Ucenik> ucenici){
        return ucenici.stream().map(this::convert).collect(Collectors.toList());
    }
}
