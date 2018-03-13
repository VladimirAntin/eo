export class UserPassword {
  oldPassword: string;
  newPassword: string;
  newPasswordRepeat: string;

  constructor() {
    this.oldPassword = '';
    this.newPassword = '';
    this.newPasswordRepeat = '';
  }
}
