package github.eobrazovanje.dto;


import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
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
    @Size(min = 0, max = 50)
    private String naziv;

    private int brojCasovaPredavanja;
    private int brojCasoovaVezbi;
    private String aktivnosti; // aktivnost; aktivnost; aktivnost;...
    private Set<Long> nastavnici = new HashSet<>();

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

    public int getBrojCasovaPredavanja() {
        return brojCasovaPredavanja;
    }

    public PredmetDto setBrojCasovaPredavanja(int brojCasovaPredavanja) {
        this.brojCasovaPredavanja = brojCasovaPredavanja;
        return this;
    }

    public int getBrojCasoovaVezbi() {
        return brojCasoovaVezbi;
    }

    public PredmetDto setBrojCasoovaVezbi(int brojCasoovaVezbi) {
        this.brojCasoovaVezbi = brojCasoovaVezbi;
        return this;
    }

    public String getAktivnosti() {
        return aktivnosti;
    }

    public PredmetDto setAktivnosti(String aktivnosti) {
        this.aktivnosti = aktivnosti;
        return this;
    }

    public Set<Long> getNastavnici() {
        return nastavnici;
    }

    public PredmetDto setNastavnici(Set<Long> nastavnici) {
        this.nastavnici = nastavnici;
        return this;
    }
}
