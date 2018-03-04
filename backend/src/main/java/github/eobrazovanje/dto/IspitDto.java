package github.eobrazovanje.dto;

import javax.validation.constraints.NotNull;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.49
*/
public class IspitDto {

    private long id;
    @NotNull
    private int bodovi;

    @NotNull
    private long predmet;

    public IspitDto() { }

    public long getId() {
        return id;
    }

    public IspitDto setId(long id) {
        this.id = id;
        return this;
    }

    public int getBodovi() {
        return bodovi;
    }

    public IspitDto setBodovi(int bodovi) {
        this.bodovi = bodovi;
        return this;
    }

    public long getPredmet() {
        return predmet;
    }

    public IspitDto setPredmet(long predmet) {
        this.predmet = predmet;
        return this;
    }
}
