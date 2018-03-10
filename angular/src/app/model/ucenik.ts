import {UserApi} from './user-api';

export class Ucenik extends UserApi{
  brojIndexa: string;
  constructor(){
    super();
    this.brojIndexa = '';
    this.type = 'Ucenik';
  }
}
