import {Ucenik} from './ucenik';
import {Predmet} from './predmet';

export class Uplata {
  id: number;
  suma: number;
  ucenik: number;
  predmet: Predmet;

  constructor(){
    this.id = 0;
    this.suma = 0;
    this.ucenik = 0;
    this.predmet = new Predmet();
  }
}
