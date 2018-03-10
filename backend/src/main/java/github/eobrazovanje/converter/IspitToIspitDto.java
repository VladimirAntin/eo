package github.eobrazovanje.converter;

import github.eobrazovanje.dto.IspitDto;
import github.eobrazovanje.entity.Ispit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 16.33
*/
@Component
public class IspitToIspitDto implements Converter<Ispit,IspitDto>{

    @Autowired
    private PredmetToPredmetDto toPredmetDto;
    @Override
    public IspitDto convert(Ispit ispit) {
        return new IspitDto()
                .setId(ispit.getId())
                .setBodovi(ispit.getBodovi())
                .setPredmet(toPredmetDto.convert(ispit.getPredmet()));
    }

    public List<IspitDto> convert(Collection<Ispit> ispiti){
        return ispiti.stream().map(this::convert).collect(Collectors.toList());
    }

}
