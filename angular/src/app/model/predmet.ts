export class Predmet {
  id: number;
  naziv: string;
  brojCasovaPredavanja: number;
  brojCasovaVezbi: number;
  aktivnosti: string;

  constructor(){
    this.id = 0;
    this.naziv = '';
    this.brojCasovaPredavanja = 0;
    this.brojCasovaVezbi= 0;
    this.aktivnosti = '';
  }
}
