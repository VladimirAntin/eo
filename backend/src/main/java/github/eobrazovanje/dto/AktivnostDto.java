package github.eobrazovanje.dto;

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
    @Size(min = 2, max = 50)
    private String naziv;

    @Max(100)
    private int brojBodova;

    @NotNull
    private long ispit;

    public AktivnostDto() { }

    public long getId() {
        return id;
    }

    public AktivnostDto setId(long id) {
        this.id = id;
        return this;
    }

    public String getNaziv() {
        return naziv;
    }

    public AktivnostDto setNaziv(String naziv) {
        this.naziv = naziv;
        return this;
    }

    public int getBrojBodova() {
        return brojBodova;
    }

    public AktivnostDto setBrojBodova(int brojBodova) {
        this.brojBodova = brojBodova;
        return this;
    }

    public long getIspit() {
        return ispit;
    }

    public AktivnostDto setIspit(long ispit) {
        this.ispit = ispit;
        return this;
    }
}
