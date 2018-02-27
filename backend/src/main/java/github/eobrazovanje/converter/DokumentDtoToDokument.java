package github.eobrazovanje.converter;

import github.eobrazovanje.dto.DokumentDto;
import github.eobrazovanje.entity.Dokument;
import github.eobrazovanje.service.TipDokumentaService;
import github.eobrazovanje.service.UcenikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 16.26
*/
@Component
public class DokumentDtoToDokument implements Converter<DokumentDto,Dokument>{

    @Autowired
    private UcenikService ucenikService;

    @Autowired
    private TipDokumentaService tipDokumentaService;


    @Override
    public Dokument convert(DokumentDto dto) {
        return new Dokument()
                .setId(dto.getId())
                .setUcenik(ucenikService.findOne(dto.getUcenik()))
                .setTipDokumenta(tipDokumentaService.findOne(dto.getTipDokumenta()));
    }
}
