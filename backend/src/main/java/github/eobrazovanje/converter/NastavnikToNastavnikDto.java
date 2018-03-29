package github.eobrazovanje.converter;

import github.eobrazovanje.dto.NastavnikDto;
import github.eobrazovanje.entity.Authority;
import github.eobrazovanje.entity.Nastavnik;
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
  Time: 17.34
*/
@Component
public class NastavnikToNastavnikDto implements Converter<Nastavnik,NastavnikDto>{

    @Autowired
    private ZvanjeToZvanjeDto toZvanjeDto;

    @Override
    public NastavnikDto convert(Nastavnik nastavnik) {
        return new NastavnikDto()
                .setId(nastavnik.getId())
                .setIme(nastavnik.getIme())
                .setPrezime(nastavnik.getPrezime())
                .setUsername(nastavnik.getUsername())
                .setEmail(nastavnik.getEmail())
                .setOnline(nastavnik.isOnline())
                .setLastOnline(nastavnik.getLastOnline())
                .setAuthorities((Set<Authority>) nastavnik.getAuthorities())
                .setPicture(nastavnik.getPicture())
                .setZvanje(toZvanjeDto.convert(nastavnik.getZvanje()));
    }

    public List<NastavnikDto> convert(Collection<Nastavnik> nastavnici){
        return nastavnici.stream().map(this::convert).collect(Collectors.toList());
    }
}
