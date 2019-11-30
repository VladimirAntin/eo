package github.eobrazovanje.dto;


import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Set;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.53
*/
public class PredmetDto {

    private long id;

    @NotNull
    @Size(min = 4, max = 50)
    private String naziv;
    private String opis;

    private int brojCasovaPredavanja;
    private int brojCasovaVezbi;
    private Set<TipAktivnostiDto> aktivnosti; // aktivnost; aktivnost; aktivnost;...

    public PredmetDto() { }

    public long getId() {
        return id;
    }

    public PredmetDto setId(long id) {
        this.id = id;
        return this;
    }

    public String getNaziv() {
        return naziv;
    }

    public PredmetDto setNaziv(String naziv) {
        this.naziv = naziv;
        return this;
    }

    public String getOpis() {
        return opis;
    }

    public PredmetDto setOpis(String opis) {
        this.opis = opis;
        return this;
    }

    public int getBrojCasovaPredavanja() {
        return brojCasovaPredavanja;
    }

    public PredmetDto setBrojCasovaPredavanja(int brojCasovaPredavanja) {
        this.brojCasovaPredavanja = brojCasovaPredavanja;
        return this;
    }

    public int getBrojCasovaVezbi() {
        return brojCasovaVezbi;
    }

    public PredmetDto setBrojCasovaVezbi(int brojCasovaVezbi) {
        this.brojCasovaVezbi = brojCasovaVezbi;
        return this;
    }

    public Set<TipAktivnostiDto> getAktivnosti() {
        return aktivnosti;
    }

    public PredmetDto setAktivnosti(Set<TipAktivnostiDto> aktivnosti) {
        this.aktivnosti = aktivnosti;
        return this;
    }
}
