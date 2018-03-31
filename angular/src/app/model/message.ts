export class Message {
  id: number;
  text: string;
  date: Date;
  seen: boolean;
  sender: number;
  recipient: number;

  constructor() {
    this.id = 0;
    this.text = '';
    this.seen = false;
    this.sender = 0;
    this.recipient = 0;
  }
}
