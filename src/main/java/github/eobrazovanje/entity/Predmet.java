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
public class Predmet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Size(min = 1, max = 50)
    private String naziv;
    private String opis;

    private int brojCasovaPredavanja;
    private int brojCasovaVezbi;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "predmet_nastavnik",
            joinColumns = @JoinColumn(name = "predmet_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "nastavnik_id", referencedColumnName = "id"))
    private Set<Nastavnik> nastavnici = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "predmet_ucenik",
            joinColumns = @JoinColumn(name = "predmet_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "ucenik_id", referencedColumnName = "id"))
    private Set<Ucenik> ucenici = new HashSet<>();

    @OneToMany(mappedBy = "predmet", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Uplata> uplate = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
    private Set<TipAktivnosti> aktivnosti = new HashSet<>(); // aktivnost; aktivnost; aktivnost;...

    @OneToMany(mappedBy = "predmet", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Aktivnost> aktivnostSet = new HashSet<>();

    public Predmet() { }

    public long getId() {
        return id;
    }

    public Predmet setId(long id) {
        this.id = id;
        return this;
    }

    public String getNaziv() {
        return naziv;
    }

    public Predmet setNaziv(String naziv) {
        this.naziv = naziv;
        return this;
    }

    public String getOpis() {
        return opis;
    }

    public Predmet setOpis(String opis) {
        this.opis = opis;
        return this;
    }

    public int getBrojCasovaPredavanja() {
        return brojCasovaPredavanja;
    }

    public Predmet setBrojCasovaPredavanja(int brojCasovaPredavanja) {
        this.brojCasovaPredavanja = brojCasovaPredavanja;
        return this;
    }

    public int getBrojCasovaVezbi() {
        return brojCasovaVezbi;
    }

    public Predmet setBrojCasovaVezbi(int brojCasovaVezbi) {
        this.brojCasovaVezbi = brojCasovaVezbi;
        return this;
    }

    public Set<Nastavnik> getNastavnici() {
        return nastavnici;
    }

    public Predmet setNastavnici(Set<Nastavnik> nastavnici) {
        this.nastavnici = nastavnici;
        return this;
    }

    public Set<Ucenik> getUcenici() {
        return ucenici;
    }

    public Predmet setUcenici(Set<Ucenik> ucenici) {
        this.ucenici = ucenici;
        return this;
    }

    public Set<Uplata> getUplate() {
        return uplate;
    }

    public Predmet setUplate(Set<Uplata> uplate) {
        this.uplate = uplate;
        return this;
    }

    public Set<TipAktivnosti> getAktivnosti() {
        return aktivnosti;
    }

    public Predmet setAktivnosti(Set<TipAktivnosti> aktivnosti) {
        this.aktivnosti = aktivnosti;
        return this;
    }

    public Set<Aktivnost> getAktivnostSet() {
        return aktivnostSet;
    }

    public Predmet setAktivnostSet(Set<Aktivnost> aktivnostSet) {
        this.aktivnostSet = aktivnostSet;
        return this;
    }

    public boolean isUcenikNaPredmetu(String username) {
        return this.ucenici.stream().anyMatch(u -> u.getUsername().equals(username));
    }
    public boolean isNastavnikNaPredmetu(String username) {
        return this.nastavnici.stream().anyMatch(u -> u.getUsername().equals(username));
    }


}
