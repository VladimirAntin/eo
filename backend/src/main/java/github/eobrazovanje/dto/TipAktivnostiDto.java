package github.eobrazovanje.dto;

import javax.validation.constraints.Size;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.5.18.
  Time: 13.15
*/
public class TipAktivnostiDto {

    private long id;

    @Size(min = 2, max = 50)
    private String naziv;

    public TipAktivnostiDto() { }

    public long getId() {
        return id;
    }

    public TipAktivnostiDto setId(long id) {
        this.id = id;
        return this;
    }

    public String getNaziv() {
        return naziv;
    }

    public TipAktivnostiDto setNaziv(String naziv) {
        this.naziv = naziv;
        return this;
    }
}
