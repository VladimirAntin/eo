import {TipDokumenta} from './tip-dokumenta';
import {Ucenik} from './ucenik';

export class Dokument {
  id: number;
  ucenik: Ucenik;
  tipDokumenta: TipDokumenta;
  filename: string;
  href;

  constructor(){
    this.id = 0;
    this.ucenik = new Ucenik();
    this.tipDokumenta = new TipDokumenta();
  }

  public setUcenik(ucenik: Ucenik): Dokument {
    this.ucenik = ucenik;
    return this;
  }
}
