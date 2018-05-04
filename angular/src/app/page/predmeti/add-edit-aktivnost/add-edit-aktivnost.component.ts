import {Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-edit-aktivnost',
  templateUrl: './add-edit-aktivnost.component.html',
  styleUrls: ['./add-edit-aktivnost.component.css']
})
export class AddEditAktivnostComponent {

  enableB = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    data.aktivnost.predmet = data.predmet.id;
    data.aktivnost.tipAktivnosti = data.predmet.aktivnosti
      .find(a => a.id===data.aktivnost.tipAktivnosti.id);
  }

  change(){
    this.enableB = (this.data.aktivnost.ucenik === 0 || this.data.aktivnost.naziv === '' ||
                  this.data.aktivnost.brojBodova>100 || this.data.aktivnost.brojIndexa<0)
  }

  changeUcenik(){
    this.change();
    const selectedUcenik = this.data.ucenici.filter(u=>u.id===this.data.aktivnost.ucenik)[0];
    selectedUcenik.aktivnosti.forEach(a => {
        const searchAct = this.data.predmet.aktivnosti.findIndex(act => act.id === a.id);
        if(searchAct!==-1){
          this.data.predmet.aktivnosti.splice(searchAct,1);
        }
    });
  }
}
