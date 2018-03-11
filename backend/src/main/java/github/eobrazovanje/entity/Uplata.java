package github.eobrazovanje.entity;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 26.2.18.
  Time: 09.23
*/
@Entity
public class Uplata {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Min(10)
    private float suma;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ucenik_id", referencedColumnName = "id")
    private Ucenik ucenik;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "predmet_id", referencedColumnName = "id")
    private Predmet predmet;

    public Uplata() { }

    public long getId() {
        return id;
    }

    public Uplata setId(long id) {
        this.id = id;
        return this;
    }

    public float getSuma() {
        return suma;
    }

    public Uplata setSuma(float suma) {
        this.suma = suma;
        return this;
    }

    public Ucenik getUcenik() {
        return ucenik;
    }

    public Uplata setUcenik(Ucenik ucenik) {
        this.ucenik = ucenik;
        return this;
    }

    public Predmet getPredmet() {
        return predmet;
    }

    public Uplata setPredmet(Predmet predmet) {
        this.predmet = predmet;
        return this;
    }
}
