package github.eobrazovanje.entity;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 26.2.18.
  Time: 14.47
*/
@Entity
public class Aktivnost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Size(min = 2, max = 50)
    private String naziv;

    @Max(100)
    private int brojBodova;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "predmet_id", referencedColumnName = "id")
    private Predmet predmet;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ucenik_id", referencedColumnName = "id")
    private Ucenik ucenik;

    public Aktivnost() { }

    public long getId() {
        return id;
    }

    public Aktivnost setId(long id) {
        this.id = id;
        return this;
    }

    public String getNaziv() {
        return naziv;
    }

    public Aktivnost setNaziv(String naziv) {
        this.naziv = naziv;
        return this;
    }

    public int getBrojBodova() {
        return brojBodova;
    }

    public Aktivnost setBrojBodova(int brojBodova) {
        this.brojBodova = brojBodova;
        return this;
    }

    public Predmet getPredmet() {
        return predmet;
    }

    public Aktivnost setPredmet(Predmet predmet) {
        this.predmet = predmet;
        return this;
    }

    public Ucenik getUcenik() {
        return ucenik;
    }

    public Aktivnost setUcenik(Ucenik ucenik) {
        this.ucenik = ucenik;
        return this;
    }
}
