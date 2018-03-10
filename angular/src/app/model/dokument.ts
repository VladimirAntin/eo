import {TipDokumenta} from './tip-dokumenta';

export class Dokument {
  id: number;
  ucenik: number;
  tipDokumenta: TipDokumenta;

  constructor(){
    this.id = 0;
    this.ucenik = 0;
    this.tipDokumenta = new TipDokumenta();
  }
}
