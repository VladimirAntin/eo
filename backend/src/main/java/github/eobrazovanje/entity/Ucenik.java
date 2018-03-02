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
  Time: 09.22
*/
@Entity
public class Ucenik extends User {

    @NotNull
    @Size(min = 1, max = 12)
    private String brojIndexa;

    @OneToMany(mappedBy = "ucenik", cascade = CascadeType.ALL)
    private Set<Uplata> uplate = new HashSet<>();

    @OneToMany(mappedBy = "ucenik", cascade = CascadeType.ALL)
    private Set<Ispit> ispiti = new HashSet<>();

    public Ucenik() { }

    public Ucenik(long id, String ime, String prezime, String username, String password) {
        super(id, ime, prezime, username, password);
    }

    public String getBrojIndexa() {
        return brojIndexa;
    }

    public Ucenik setBrojIndexa(String brojIndexa) {
        this.brojIndexa = brojIndexa;
        return this;
    }

    public Set<Uplata> getUplate() {
        return uplate;
    }

    public Ucenik setUplate(Set<Uplata> uplate) {
        this.uplate = uplate;
        return this;
    }

    public Set<Ispit> getIspiti() {
        return ispiti;
    }

    public Ucenik setIspiti(Set<Ispit> ispiti) {
        this.ispiti = ispiti;
        return this;
    }
}
