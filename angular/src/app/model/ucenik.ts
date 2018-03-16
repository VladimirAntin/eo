import {UserApi} from './user-api';
import {Aktivnost} from './aktivnost';

export class Ucenik extends UserApi{
  brojIndexa: string;
  aktivnosti: Aktivnost[];
  constructor(){
    super();
    this.brojIndexa = '';
    this.aktivnosti = [];
    this.type = 'Ucenik';
  }
}
