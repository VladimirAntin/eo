package github.eobrazovanje.converter;

import github.eobrazovanje.dto.TipDokumentaDto;
import github.eobrazovanje.entity.TipDokumenta;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 18.13
*/
@Component
public class TipDokumentaToTipDokumentaDto implements Converter<TipDokumenta,TipDokumentaDto>{
    @Override
    public TipDokumentaDto convert(TipDokumenta tipDokumenta) {
        return new TipDokumentaDto()
                .setId(tipDokumenta.getId())
                .setNaziv(tipDokumenta.getNaziv());
    }

    public List<TipDokumentaDto> convert(List<TipDokumenta> tipDokumentas){
        return tipDokumentas.stream().map(this::convert).collect(Collectors.toList());
    }
}
