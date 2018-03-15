import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import {ZvanjeService} from '../../service/zvanje.service';
import {Zvanje} from '../../model/zvanje';

@Component({
    selector: 'app-add-user',
    templateUrl: 'add-user.component.html'
})

export class AddUserComponent {

  types: string[] = ['User','Nastavnik','Ucenik'];
  zvanja: Zvanje[] = []; enableB = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private zvanjeService: ZvanjeService) {
    data.user.type = 'User';
    data.user.brojIndexa='';
    this.zvanjeService.getAll().subscribe(s => {
      this.zvanja=s;
      data.user.zvanje = this.zvanja[0];
    });
  }

  change(){
    this.enableB = (this.data.user.username.trim()==='' || this.data.user.email.trim()==='' ||
      this.data.user.ime.trim()==='' || this.data.user.prezime.trim()==='' ||
      this.data.user.password.trim()==='') || (this.data.user.isUcenik() &&
      (this.data.user.brojIndexa.trim()==='' || this.data.user.username.trim()==='' ||
        this.data.user.email.trim()==='' ||
      this.data.user.ime.trim()==='' || this.data.user.prezime.trim()==='' || this.data.user.password.trim()===''))
  }
}
