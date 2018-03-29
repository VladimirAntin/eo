package github.eobrazovanje.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 26.2.18.
  Time: 09.23
*/
@Entity
public class Dokument {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ucenik_id", referencedColumnName = "id")
    private Ucenik ucenik;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tip_id", referencedColumnName = "id")
    private TipDokumenta tipDokumenta;

    private String filename;

    public Dokument() { }

    public long getId() {
        return id;
    }

    public Dokument setId(long id) {
        this.id = id;
        return this;
    }

    public Ucenik getUcenik() {
        return ucenik;
    }

    public Dokument setUcenik(Ucenik ucenik) {
        this.ucenik = ucenik;
        return this;
    }

    public TipDokumenta getTipDokumenta() {
        return tipDokumenta;
    }

    public Dokument setTipDokumenta(TipDokumenta tipDokumenta) {
        this.tipDokumenta = tipDokumenta;
        return this;
    }

    public String getFilename() {
        return filename;
    }

    public Dokument setFilename(String filename) {
        this.filename = filename;
        return this;
    }
}
