package github.eobrazovanje.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 1.5.18.
  Time: 13.06
*/
@Entity
public class TipAktivnosti {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Size(min = 2, max = 50)
    private String naziv;

    public TipAktivnosti() { }

    public long getId() {
        return id;
    }

    public TipAktivnosti setId(long id) {
        this.id = id;
        return this;
    }

    public String getNaziv() {
        return naziv;
    }

    public TipAktivnosti setNaziv(String naziv) {
        this.naziv = naziv;
        return this;
    }
}
