package github.eobrazovanje.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 15.02
*/
public class ZvanjeDto {

    private long id;

    @NotNull
    @Size(min = 2, max = 50)
    private String naziv;

    public ZvanjeDto() { }

    public long getId() {
        return id;
    }

    public ZvanjeDto setId(long id) {
        this.id = id;
        return this;
    }

    public String getNaziv() {
        return naziv;
    }

    public ZvanjeDto setNaziv(String naziv) {
        this.naziv = naziv;
        return this;
    }
}
