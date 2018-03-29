package github.eobrazovanje.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
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

    public Nastavnik setId(long id) {
        super.setId(id);
        return this;
    }

    public Nastavnik setIme(String ime) {
        super.setIme(ime);
        return this;
    }

    public Nastavnik setPrezime(String prezime) {
        super.setPrezime(prezime);
        return this;
    }

    public Nastavnik setUsername(String username) {
        super.setUsername(username);
        return this;
    }

    public Nastavnik setEmail(String email) {
        super.setEmail(email);
        return this;
    }

    public Nastavnik setPassword(String password) {
        super.setPassword(password);
        return this;
    }

    public Nastavnik setAuthorities(Set<Authority> authorities) {
        super.setAuthorities(authorities);
        return this;
    }

    public Nastavnik setOnline(boolean online) {
        super.setOnline(online);
        return this;
    }

    public Nastavnik setLastOnline(Date lastOnline) {
        super.setLastOnline(lastOnline);
        return this;
    }

    public Nastavnik setPicture(String picture) {
        super.setPicture(picture);
        return this;
    }
}
