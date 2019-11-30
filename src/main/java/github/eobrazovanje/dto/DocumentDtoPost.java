package github.eobrazovanje.dto;

import javax.validation.constraints.NotNull;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 30.3.18.
  Time: 15.05
*/
public class DocumentDtoPost {


    private long id;
    @NotNull
    private String ucenik;

    @NotNull
    private long tipDokumenta;

    public DocumentDtoPost() { }

    public long getId() {
        return id;
    }

    public DocumentDtoPost setId(long id) {
        this.id = id;
        return this;
    }

    public String getUcenik() {
        return ucenik;
    }

    public DocumentDtoPost setUcenik(String ucenik) {
        this.ucenik = ucenik;
        return this;
    }

    public long getTipDokumenta() {
        return tipDokumenta;
    }

    public DocumentDtoPost setTipDokumenta(long tipDokumenta) {
        this.tipDokumenta = tipDokumenta;
        return this;
    }
}
