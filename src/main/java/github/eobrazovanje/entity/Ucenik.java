package github.eobrazovanje.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 26.2.18.
  Time: 09.22
*/
@Entity
public class Ucenik extends User {

    @NotNull
    @Size(min = 1, max = 12)
    @Column(unique = true)
    private String brojIndexa;

    @OneToMany(mappedBy = "ucenik", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Uplata> uplate = new HashSet<>();

    @OneToMany(mappedBy = "ucenik", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Aktivnost> aktivnosti = new HashSet<>();

    @ManyToMany(mappedBy = "ucenici", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Predmet> predmeti = new HashSet<>();

    @OneToMany(mappedBy = "ucenik", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Dokument> dokumenti = new HashSet<>();

    public Ucenik() { }

    public String getBrojIndexa() {
        return brojIndexa;
    }

    public Ucenik setBrojIndexa(String brojIndexa) {
        this.brojIndexa = brojIndexa;
        return this;
    }

    public Set<Uplata> getUplate() {
        return uplate;
    }

    public Ucenik setUplate(Set<Uplata> uplate) {
        this.uplate = uplate;
        return this;
    }

    public Set<Aktivnost> getAktivnosti() {
        return aktivnosti;
    }

    public Ucenik setAktivnosti(Set<Aktivnost> aktivnosti) {
        this.aktivnosti = aktivnosti;
        return this;
    }

    public Set<Predmet> getPredmeti() {
        return predmeti;
    }

    public Ucenik setPredmeti(Set<Predmet> predmeti) {
        this.predmeti = predmeti;
        return this;
    }

    public Set<Dokument> getDokumenti() {
        return dokumenti;
    }

    public Ucenik setDokumenti(Set<Dokument> dokumenti) {
        this.dokumenti = dokumenti;
        return this;
    }

    public Ucenik setId(long id) {
        super.setId(id);
        return this;
    }

    public Ucenik setIme(String ime) {
        super.setIme(ime);
        return this;
    }

    public Ucenik setPrezime(String prezime) {
        super.setPrezime(prezime);
        return this;
    }

    public Ucenik setUsername(String username) {
        super.setUsername(username);
        return this;
    }

    public Ucenik setEmail(String email) {
        super.setEmail(email);
        return this;
    }

    public Ucenik setPassword(String password) {
        super.setPassword(password);
        return this;
    }

    public Ucenik setAuthorities(Set<Authority> authorities) {
        super.setAuthorities(authorities);
        return this;
    }

    public Ucenik setOnline(boolean online) {
        super.setOnline(online);
        return this;
    }

    public Ucenik setLastOnline(Date lastOnline) {
        super.setLastOnline(lastOnline);
        return this;
    }

    public Ucenik setPicture(String picture) {
        super.setPicture(picture);
        return this;
    }
}
