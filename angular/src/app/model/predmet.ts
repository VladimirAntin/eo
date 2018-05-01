import {TipAktivnosti} from './tip-aktivnosti';

export class Predmet {
  id: number;
  naziv: string;
  opis: string;
  brojCasovaPredavanja: number;
  brojCasovaVezbi: number;
  aktivnosti: TipAktivnosti[];

  constructor(){
    this.id = 0;
    this.naziv = '';
    this.opis = '';
    this.brojCasovaPredavanja = 1;
    this.brojCasovaVezbi= 1;
    this.aktivnosti = [];
  }
}
