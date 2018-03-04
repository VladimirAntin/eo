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

    private int brojCasovaPredavanja;
    private int brojCasovaVezbi;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "predmet_nastavnik",
            joinColumns = @JoinColumn(name = "predmet_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "nastavnik_id", referencedColumnName = "id"))
    private Set<Nastavnik> nastavnici = new HashSet<>();

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "predmet_ucenik",
            joinColumns = @JoinColumn(name = "predmet_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "ucenik_id", referencedColumnName = "id"))
    private Set<Ucenik> ucenici = new HashSet<>();

    @OneToMany(mappedBy = "predmet", cascade = CascadeType.ALL)
    private Set<Uplata> uplate = new HashSet<>();

    @OneToMany(mappedBy = "predmet", cascade = CascadeType.ALL)
    private Set<Ispit> ispiti = new HashSet<>();

    private String aktivnosti; // aktivnost; aktivnost; aktivnost;...

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

    public Set<Ispit> getIspiti() {
        return ispiti;
    }

    public Predmet setIspiti(Set<Ispit> ispiti) {
        this.ispiti = ispiti;
        return this;
    }

    public String getAktivnosti() {
        return aktivnosti;
    }

    public Predmet setAktivnosti(String aktivnosti) {
        this.aktivnosti = aktivnosti;
        return this;
    }
}
