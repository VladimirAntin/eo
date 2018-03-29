package github.eobrazovanje.converter;

import github.eobrazovanje.dto.UcenikDto;
import github.eobrazovanje.entity.Authority;
import github.eobrazovanje.entity.Ucenik;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    private AktivnostToAktivnostDto toAktivnostDto;

    @Override
    public UcenikDto convert(Ucenik ucenik) {
        return new UcenikDto()
                .setId(ucenik.getId())
                .setIme(ucenik.getIme())
                .setPrezime(ucenik.getPrezime())
                .setUsername(ucenik.getUsername())
                .setEmail(ucenik.getEmail())
                .setOnline(ucenik.isOnline())
                .setLastOnline(ucenik.getLastOnline())
                .setAuthorities((Set<Authority>) ucenik.getAuthorities())
                .setPicture(ucenik.getPicture())
                .setBrojIndexa(ucenik.getBrojIndexa())
                .setAktivnosti(toAktivnostDto.convert(ucenik.getAktivnosti()));
    }

    public List<UcenikDto> convert(Collection<Ucenik> ucenici){
        return ucenici.stream().map(this::convert).collect(Collectors.toList());
    }
}
