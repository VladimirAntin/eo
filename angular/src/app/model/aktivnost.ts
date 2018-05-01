import {TipAktivnosti} from './tip-aktivnosti';

export class Aktivnost {

  id: number;
  brojBodova: number;
  predmet: number;
  ucenik: number;
  tipAktivnosti: TipAktivnosti;

  constructor(){
    this.id = 0;
    this.brojBodova = 0;
    this.predmet = 0;
    this.ucenik = 0;
    this.tipAktivnosti = new TipAktivnosti();
  }
}
