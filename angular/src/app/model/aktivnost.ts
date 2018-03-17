export class Aktivnost {

  id: number;
  naziv: string;
  brojBodova: number;
  predmet: number;
  ucenik: number;

  constructor(){
    this.id = 0;
    this.naziv = '';
    this.brojBodova = 0;
    this.predmet = 0;
    this.ucenik = 0;
  }
}
