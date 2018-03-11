package github.eobrazovanje.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
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

    public Ucenik(long id, String ime, String prezime, String username, String password) {
        super(id, ime, prezime, username, password);
    }

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
}
