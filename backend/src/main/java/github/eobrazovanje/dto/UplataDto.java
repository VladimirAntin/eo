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
    private long ucenik;

    @NotNull
    private long predmet;

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

    public long getUcenik() {
        return ucenik;
    }

    public UplataDto setUcenik(long ucenik) {
        this.ucenik = ucenik;
        return this;
    }

    public long getPredmet() {
        return predmet;
    }

    public UplataDto setPredmet(long predmet) {
        this.predmet = predmet;
        return this;
    }
}
