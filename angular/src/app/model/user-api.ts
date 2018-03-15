import {Authority} from './authority';

export class UserApi {
    type: string;
    id: number;
    ime: string;
    prezime: string;
    username: string;
    email: string;
    password: string;
    authorities: Authority[];

    constructor() {
      this.id = 0;
      this.type = 'User';
      this.ime = '';
      this.prezime = '';
      this.username = '';
      this.email = '';
      this.password = '';
      this.authorities = [];
    }

  public isNastavnik(): boolean {
    return this.type==='Nastavnik';
  }
  public isUcenik(): boolean {
    return this.type==='Ucenik';
  }
}
