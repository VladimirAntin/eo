package github.eobrazovanje.converter;

import github.eobrazovanje.dto.TipDokumentaDto;
import github.eobrazovanje.entity.TipDokumenta;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 18.13
*/
@Component
public class TipDokumentaDtoToTipDokumenta implements Converter<TipDokumentaDto,TipDokumenta>{
    @Override
    public TipDokumenta convert(TipDokumentaDto dto) {
        return new TipDokumenta()
                .setId(dto.getId())
                .setNaziv(dto.getNaziv());
    }
}
