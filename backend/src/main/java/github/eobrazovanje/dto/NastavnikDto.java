package github.eobrazovanje.dto;

import github.eobrazovanje.entity.Authority;

import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Set;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.51
*/
public class NastavnikDto extends UserDto {

    @NotNull
    private ZvanjeDto zvanje;

    public NastavnikDto() { }

    public NastavnikDto(long id, String ime, String prezime, String username, String email, Set<Authority> authorities) {
        super(id, ime, prezime, username, email, authorities);
    }

    public NastavnikDto(long id, String ime, String prezime, String username, String email, boolean online, Date lastOnline, Set<Authority> authorities) {
        super(id, ime, prezime, username, email, online, lastOnline, authorities);
    }

    public ZvanjeDto getZvanje() {
        return zvanje;
    }

    public NastavnikDto setZvanje(ZvanjeDto zvanje) {
        this.zvanje = zvanje;
        return this;
    }
}
