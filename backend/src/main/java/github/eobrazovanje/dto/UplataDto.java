package github.eobrazovanje.dto;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.58
*/
public class UplataDto {

    private long id;
    @NotNull
    @Min(10)
    private float suma;

    @NotNull
    private UcenikDto ucenik;

    @NotNull
    private PredmetDto predmet;

    public UplataDto() { }

    public long getId() {
        return id;
    }

    public UplataDto setId(long id) {
        this.id = id;
        return this;
    }

    public float getSuma() {
        return suma;
    }

    public UplataDto setSuma(float suma) {
        this.suma = suma;
        return this;
    }

    public UcenikDto getUcenik() {
        return ucenik;
    }

    public UplataDto setUcenik(UcenikDto ucenik) {
        this.ucenik = ucenik;
        return this;
    }

    public PredmetDto getPredmet() {
        return predmet;
    }

    public UplataDto setPredmet(PredmetDto predmet) {
        this.predmet = predmet;
        return this;
    }
}
