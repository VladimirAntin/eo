import {Predmet} from './predmet';
import {Ucenik} from './ucenik';

export class Uplata {
  id: number;
  suma: number;
  ucenik: Ucenik;
  predmet: Predmet;

  constructor(){
    this.id = 0;
    this.suma = 0;
    this.ucenik = new Ucenik();
    this.predmet = new Predmet();
  }
}
