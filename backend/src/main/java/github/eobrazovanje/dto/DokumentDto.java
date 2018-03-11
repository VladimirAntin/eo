package github.eobrazovanje.dto;

import javax.validation.constraints.NotNull;

/*
  Created by IntelliJ IDEA.
  User: vladimir_antin
  Date: 27.2.18.
  Time: 14.48
*/
public class DokumentDto {

    private long id;
    @NotNull
    private UcenikDto ucenik;

    @NotNull
    private TipDokumentaDto tipDokumenta;

    public DokumentDto() { }

    public long getId() {
        return id;
    }

    public DokumentDto setId(long id) {
        this.id = id;
        return this;
    }

    public UcenikDto getUcenik() {
        return ucenik;
    }

    public DokumentDto setUcenik(UcenikDto ucenik) {
        this.ucenik = ucenik;
        return this;
    }

    public TipDokumentaDto getTipDokumenta() {
        return tipDokumenta;
    }

    public DokumentDto setTipDokumenta(TipDokumentaDto tipDokumenta) {
        this.tipDokumenta = tipDokumenta;
        return this;
    }
}
