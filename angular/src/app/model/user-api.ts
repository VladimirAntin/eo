export class UserApi {
    type: string;
    id: Number;
    ime: String;
    prezime: String;
    username: String;

    constructor() {
      this.id = 0;
      this.type = 'User';
      this.ime = '';
      this.prezime = '';
      this.username = '';
    }
}
