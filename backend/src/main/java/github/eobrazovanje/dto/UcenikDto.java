package github.eobrazovanje.dto;

import github.eobrazovanje.entity.Authority;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
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

    private List<AktivnostDto> aktivnosti = new ArrayList<>();

    public UcenikDto() { }

    public String getBrojIndexa() {
        return brojIndexa;
    }

    public UcenikDto setBrojIndexa(String brojIndexa) {
        this.brojIndexa = brojIndexa;
        return this;
    }

    public List<AktivnostDto> getAktivnosti() {
        return aktivnosti;
    }

    public UcenikDto setAktivnosti(List<AktivnostDto> aktivnosti) {
        this.aktivnosti = aktivnosti;
        return this;
    }

    public UcenikDto setId(long id) {
        super.setId(id);
        return this;
    }

    public UcenikDto setIme(String ime) {
        super.setIme(ime);
        return this;
    }

    public UcenikDto setPrezime(String prezime) {
        super.setPrezime(prezime);
        return this;
    }

    public UcenikDto setUsername(String username) {
        super.setUsername(username);
        return this;
    }

    public UcenikDto setEmail(String email) {
        super.setEmail(email);
        return this;
    }

    public UcenikDto setPassword(String password) {
        super.setPassword(password);
        return this;
    }

    public UcenikDto setAuthorities(Set<Authority> authorities) {
        super.setAuthorities(authorities);
        return this;
    }

    public UcenikDto setOnline(boolean online) {
        super.setOnline(online);
        return this;
    }

    public UcenikDto setLastOnline(Date lastOnline) {
        super.setLastOnline(lastOnline);
        return this;
    }

    public UcenikDto setPicture(String picture) {
        super.setPicture(picture);
        return this;
    }
}
