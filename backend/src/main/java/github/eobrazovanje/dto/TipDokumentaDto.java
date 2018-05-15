package github.eobrazovanje.dto;

import javax.validation.constraints.Size;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.55
*/
public class TipDokumentaDto {

    private long id;

    @Size(min = 2, max = 50)
    private String naziv;

    public TipDokumentaDto() { }

    public long getId() {
        return id;
    }

    public TipDokumentaDto setId(long id) {
        this.id = id;
        return this;
    }

    public String getNaziv() {
        return naziv;
    }

    public TipDokumentaDto setNaziv(String naziv) {
        this.naziv = naziv;
        return this;
    }
}
