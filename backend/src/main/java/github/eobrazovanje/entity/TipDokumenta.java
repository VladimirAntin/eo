package github.eobrazovanje.entity;

import javax.persistence.*;
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
public class TipDokumenta {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Size(min = 2, max = 50)
    private String naziv;

    @OneToMany(mappedBy = "tipDokumenta", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Dokument> dokumenti = new HashSet<>();

    public TipDokumenta() { }

    public long getId() {
        return id;
    }

    public TipDokumenta setId(long id) {
        this.id = id;
        return this;
    }

    public String getNaziv() {
        return naziv;
    }

    public TipDokumenta setNaziv(String naziv) {
        this.naziv = naziv;
        return this;
    }

    public Set<Dokument> getDokumenti() {
        return dokumenti;
    }

    public TipDokumenta setDokumenti(Set<Dokument> dokumenti) {
        this.dokumenti = dokumenti;
        return this;
    }
}
