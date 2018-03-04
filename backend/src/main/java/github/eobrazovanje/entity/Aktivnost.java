package github.eobrazovanje.entity;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 26.2.18.
  Time: 14.47
*/
@Entity
public class Aktivnost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Size(min = 2, max = 50)
    private String naziv;

    @Max(100)
    private int brojBodova;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "ispit_id", referencedColumnName = "id")
    private Ispit ispit;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "ucenik_id", referencedColumnName = "id")
    private Ucenik ucenik;

    public Aktivnost() { }

    public long getId() {
        return id;
    }

    public Aktivnost setId(long id) {
        this.id = id;
        return this;
    }

    public String getNaziv() {
        return naziv;
    }

    public Aktivnost setNaziv(String naziv) {
        this.naziv = naziv;
        return this;
    }

    public int getBrojBodova() {
        return brojBodova;
    }

    public Aktivnost setBrojBodova(int brojBodova) {
        this.brojBodova = brojBodova;
        return this;
    }

    public Ispit getIspit() {
        return ispit;
    }

    public Aktivnost setIspit(Ispit ispit) {
        this.ispit = ispit;
        return this;
    }

    public Ucenik getUcenik() {
        return ucenik;
    }

    public Aktivnost setUcenik(Ucenik ucenik) {
        this.ucenik = ucenik;
        return this;
    }
}
