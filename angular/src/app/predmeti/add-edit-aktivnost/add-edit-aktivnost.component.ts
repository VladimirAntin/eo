import {Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-edit-aktivnost',
  templateUrl: './add-edit-aktivnost.component.html',
  styleUrls: ['./add-edit-aktivnost.component.css']
})
export class AddEditAktivnostComponent {

  enableB = true;
  aktivnostFliter: string[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    data.aktivnost.predmet = data.predmet.id;
    if (!data.add){
      this.aktivnostFliter = this.data.predmet.aktivnosti.split(';');
    }
  }

  change(){
    this.enableB = (this.data.aktivnost.ucenik === 0 || this.data.aktivnost.naziv === '' ||
                  this.data.aktivnost.brojBodova>100 || this.data.aktivnost.brojIndexa<0)
  }

  changeUcenik(){
    this.change();
    this.aktivnostFliter = this.data.predmet.aktivnosti.split(';');
    const selectedUcenik = this.data.ucenici.filter(u=>u.id===this.data.aktivnost.ucenik)[0];
    selectedUcenik.aktivnosti.forEach(a => {
      if(this.aktivnostFliter.indexOf(a.naziv)!==-1){
        this.aktivnostFliter.splice(this.aktivnostFliter.indexOf(a.naziv),1);
      }
    });
  }
}
