import {Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  enableB = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }


  change(){
    this.enableB = (!this.data.admin && this.data.user.oldPassword.trim()==='') ||
      this.data.user.newPassword.trim()==='' || this.data.user.newPasswordRepeat.trim()==='' ||
      this.data.user.newPassword!==this.data.user.newPasswordRepeat
  }
}
