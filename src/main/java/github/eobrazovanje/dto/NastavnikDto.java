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

    public ZvanjeDto getZvanje() {
        return zvanje;
    }

    public NastavnikDto setZvanje(ZvanjeDto zvanje) {
        this.zvanje = zvanje;
        return this;
    }

    public NastavnikDto setId(long id) {
        super.setId(id);
        return this;
    }

    public NastavnikDto setIme(String ime) {
        super.setIme(ime);
        return this;
    }

    public NastavnikDto setPrezime(String prezime) {
        super.setPrezime(prezime);
        return this;
    }

    public NastavnikDto setUsername(String username) {
        super.setUsername(username);
        return this;
    }

    public NastavnikDto setEmail(String email) {
        super.setEmail(email);
        return this;
    }

    public NastavnikDto setPassword(String password) {
        super.setPassword(password);
        return this;
    }

    public NastavnikDto setAuthorities(Set<Authority> authorities) {
        super.setAuthorities(authorities);
        return this;
    }

    public NastavnikDto setOnline(boolean online) {
        super.setOnline(online);
        return this;
    }

    public NastavnikDto setLastOnline(Date lastOnline) {
        super.setLastOnline(lastOnline);
        return this;
    }

    public NastavnikDto setPicture(String picture) {
        super.setPicture(picture);
        return this;
    }
}
