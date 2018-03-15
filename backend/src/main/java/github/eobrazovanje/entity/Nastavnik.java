package github.eobrazovanje.entity;

import javax.persistence.*;
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
public class Nastavnik extends User {

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "zvanje_id", referencedColumnName = "id")
    private Zvanje zvanje;

    @ManyToMany(mappedBy = "nastavnici", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Predmet> predmeti = new HashSet<>();

    public Nastavnik() { }

    public Nastavnik(long id, String ime, String prezime, String username, String email, String password) {
        super(id, ime, prezime, username, email, password);
    }

    public Zvanje getZvanje() {
        return zvanje;
    }

    public Nastavnik setZvanje(Zvanje zvanje) {
        this.zvanje = zvanje;
        return this;
    }

    public Set<Predmet> getPredmeti() {
        return predmeti;
    }

    public Nastavnik setPredmeti(Set<Predmet> predmeti) {
        this.predmeti = predmeti;
        return this;
    }


}
