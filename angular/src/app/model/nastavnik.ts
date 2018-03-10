import {UserApi} from './user-api';
import {Zvanje} from './zvanje';

export class Nastavnik extends UserApi{
  zvanje: Zvanje;
  constructor(){
    super();
    this.zvanje = new Zvanje();
    this.type = 'Nastavnik';
  }
}
