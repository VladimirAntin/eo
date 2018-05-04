import {Component, Inject} from '@angular/core';
import {ZvanjeService} from '../../../service/zvanje.service';
import {Zvanje} from '../../../model/zvanje';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  types: string[] = ['User','Nastavnik','Ucenik'];
  zvanja: Zvanje[] = []; enableB = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private zvanjeService: ZvanjeService) {
    this.zvanjeService.getAll().subscribe(s => {
      this.zvanja=s;
    });
  }

  change(){
    this.enableB = (this.data.user.username.trim()==='' || this.data.user.email.trim()==='' ||
      this.data.user.ime.trim()==='' || this.data.user.prezime.trim()==='') || (this.data.user.isUcenik() &&
      (this.data.user.brojIndexa.trim()==='' || this.data.user.username.trim()==='' ||
        this.data.user.email.trim()==='' || this.data.user.ime.trim()==='' || this.data.user.prezime.trim()===''))
  }
}
