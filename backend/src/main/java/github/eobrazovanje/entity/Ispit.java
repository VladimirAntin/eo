package github.eobrazovanje.entity;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 26.2.18.
  Time: 09.22
*/
@Entity
public class Ispit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Max(100)
    private int bodovi;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "predmet_id", referencedColumnName = "id")
    private Predmet predmet;

    @OneToMany(mappedBy = "ispit", cascade = CascadeType.ALL)
    private Set<Aktivnost> aktivnosti = new HashSet<>();

    public Ispit() { }

    public long getId() {
        return id;
    }

    public Ispit setId(long id) {
        this.id = id;
        return this;
    }

    public int getBodovi() {
        return bodovi;
    }

    public Ispit setBodovi(int bodovi) {
        this.bodovi = bodovi;
        return this;
    }

    public Predmet getPredmet() {
        return predmet;
    }

    public Ispit setPredmet(Predmet predmet) {
        this.predmet = predmet;
        return this;
    }

    public Set<Aktivnost> getAktivnosti() {
        return aktivnosti;
    }

    public Ispit setAktivnosti(Set<Aktivnost> aktivnosti) {
        this.aktivnosti = aktivnosti;
        return this;
    }
}
