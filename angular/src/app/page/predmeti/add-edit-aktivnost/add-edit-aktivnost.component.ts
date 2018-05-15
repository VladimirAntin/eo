import {Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {TipAktivnosti} from '../../../model/tip-aktivnosti';

@Component({
  selector: 'app-add-edit-aktivnost',
  templateUrl: './add-edit-aktivnost.component.html',
  styleUrls: ['./add-edit-aktivnost.component.css']
})
export class AddEditAktivnostComponent {

  enableB = true; aktivnosti: TipAktivnosti[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    data.aktivnost.predmet = data.predmet.id;
    this.aktivnosti = Object.assign([], data.predmet.aktivnosti);
    data.aktivnost.tipAktivnosti = data.predmet.aktivnosti
      .find(a => a.id===data.aktivnost.tipAktivnosti.id);
  }

  change(){
    this.enableB = (this.data.aktivnost.ucenik === 0 ||
      this.data.aktivnost.tipAktivnosti === undefined || this.data.aktivnost.brojBodova>100)
  }

  changeUcenik(){
    this.change();
    const selectedUcenik = this.data.ucenici.filter(u=>u.id===this.data.aktivnost.ucenik)[0];
    this.aktivnosti = Object.assign([], this.data.predmet.aktivnosti);
    selectedUcenik.aktivnosti.forEach(a => {
        const searchAct = this.data.predmet.aktivnosti.findIndex(act => act.id === a.tipAktivnosti.id);
        if(searchAct!==-1){
          this.aktivnosti.splice(searchAct,1);
        }
    });
  }
}
