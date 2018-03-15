package github.eobrazovanje.dto;

import github.eobrazovanje.entity.Authority;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Set;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.56
*/
public class UcenikDto extends UserDto{

    @NotNull
    @Size(min = 1, max = 12)
    private String brojIndexa;

    public UcenikDto() { }

    public UcenikDto(long id, String ime, String prezime, String username, String email,Set<Authority> authorities) {
        super(id, ime, prezime, username, email, authorities);
    }

    public String getBrojIndexa() {
        return brojIndexa;
    }

    public UcenikDto setBrojIndexa(String brojIndexa) {
        this.brojIndexa = brojIndexa;
        return this;
    }

}
