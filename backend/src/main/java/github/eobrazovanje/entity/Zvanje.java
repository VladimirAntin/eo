package github.eobrazovanje.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 26.2.18.
  Time: 09.23
*/
@Entity
public class Zvanje {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Size(min = 1, max = 20)
    private String naziv;

    @OneToMany(mappedBy = "zvanje", cascade = CascadeType.ALL)
    private Set<Nastavnik> nastavnici = new HashSet<>();

    public Zvanje() { }

    public long getId() {
        return id;
    }

    public Zvanje setId(long id) {
        this.id = id;
        return this;
    }

    public String getNaziv() {
        return naziv;
    }

    public Zvanje setNaziv(String naziv) {
        this.naziv = naziv;
        return this;
    }

    public Set<Nastavnik> getNastavnici() {
        return nastavnici;
    }

    public Zvanje setNastavnici(Set<Nastavnik> nastavnici) {
        this.nastavnici = nastavnici;
        return this;
    }
}
