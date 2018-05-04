import {Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-uplata',
  templateUrl: './add-uplata.component.html',
  styleUrls: ['./add-uplata.component.css']
})
export class AddUplataComponent {


  enableB = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    data.uplata.predmet = data.predmet;
  }

  change(){
    this.enableB = (this.data.uplata.ucenik.id === 0 || this.data.uplata.suma<10);
  }

}
