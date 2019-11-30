package github.eobrazovanje.dto;

import github.eobrazovanje.entity.TipAktivnosti;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.43
*/
public class AktivnostDto {

    private long id;

    @Max(100)
    private int brojBodova;

    private long predmet;

    @NotNull
    private long ucenik;

    @NotNull
    private TipAktivnostiDto tipAktivnosti;

    public AktivnostDto() { }

    public long getId() {
        return id;
    }

    public AktivnostDto setId(long id) {
        this.id = id;
        return this;
    }

    public int getBrojBodova() {
        return brojBodova;
    }

    public AktivnostDto setBrojBodova(int brojBodova) {
        this.brojBodova = brojBodova;
        return this;
    }

    public long getUcenik() {
        return ucenik;
    }

    public AktivnostDto setUcenik(long ucenik) {
        this.ucenik = ucenik;
        return this;
    }

    public long getPredmet() {
        return predmet;
    }

    public AktivnostDto setPredmet(long predmet) {
        this.predmet = predmet;
        return this;
    }

    public TipAktivnostiDto getTipAktivnosti() {
        return tipAktivnosti;
    }

    public AktivnostDto setTipAktivnosti(TipAktivnostiDto tipAktivnosti) {
        this.tipAktivnosti = tipAktivnosti;
        return this;
    }
}
