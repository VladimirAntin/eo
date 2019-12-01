import {UserApi} from './user-api';

export class Chat {
  id: number;
  text: string;
  date: Date;
  seen: boolean;
  sender: UserApi;

  constructor() {
    this.id = 0;
    this.text = '';
    this.seen = false;
    this.sender = new UserApi();
  }
}
