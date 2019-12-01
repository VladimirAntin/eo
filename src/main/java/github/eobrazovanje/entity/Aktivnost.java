package github.eobrazovanje.entity;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;

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

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tip_aktivnosti_id", referencedColumnName = "id")
    private TipAktivnosti tipAktivnosti;


    public Aktivnost() { }

    public long getId() {
        return id;
    }

    public Aktivnost setId(long id) {
        this.id = id;
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

    public TipAktivnosti getTipAktivnosti() {
        return tipAktivnosti;
    }

    public Aktivnost setTipAktivnosti(TipAktivnosti tipAktivnosti) {
        this.tipAktivnosti = tipAktivnosti;
        return this;
    }
}
