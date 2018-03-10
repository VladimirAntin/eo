export class UserApi {
    type: string;
    id: number;
    ime: string;
    prezime: string;
    username: string;
    password: string;

    constructor() {
      this.id = 0;
      this.type = 'User';
      this.ime = '';
      this.prezime = '';
      this.username = '';
      this.password = '';
    }

  public isNastavnik(): boolean {
    return this.type==='Nastavnik';
  }
  public isUcenik(): boolean {
    return this.type==='Ucenik';
  }
}
