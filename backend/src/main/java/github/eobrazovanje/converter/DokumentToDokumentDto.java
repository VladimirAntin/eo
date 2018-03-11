package github.eobrazovanje.converter;

import github.eobrazovanje.dto.DokumentDto;
import github.eobrazovanje.entity.Dokument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.data.annotation.AccessType;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 16.26
*/
@Component
public class DokumentToDokumentDto implements Converter<Dokument,DokumentDto>{

    @Autowired
    private TipDokumentaToTipDokumentaDto toTipDokumentaDto;

    @Autowired
    private UcenikToUcenikDto toUcenikDto;

    @Override
    public DokumentDto convert(Dokument dokument) {
        return new DokumentDto()
                .setId(dokument.getId())
                .setUcenik(toUcenikDto.convert(dokument.getUcenik()))
                .setTipDokumenta(toTipDokumentaDto.convert(dokument.getTipDokumenta()));
    }

    public List<DokumentDto> convert(Collection<Dokument> dokuments){
        return dokuments.stream().map(this::convert).collect(Collectors.toList());
    }
}
