export class Aktivnost {

  id: number;
  naziv: string;
  brojBodova: number;
  ispit: number;
  ucenik: number;

  constructor(){
    this.id = 0;
    this.naziv = '';
    this.brojBodova = 0;
    this.ispit = 0;
    this.ucenik = 0;
  }
}
