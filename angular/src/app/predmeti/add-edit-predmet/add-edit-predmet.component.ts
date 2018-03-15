import {Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatChipInputEvent} from '@angular/material';
import {ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-add-edit-predmet',
  templateUrl: './add-edit-predmet.component.html',
  styleUrls: ['./add-edit-predmet.component.css']
})
export class AddEditPredmetComponent {

  separatorKeysCodes = [ENTER, 186]; // semicolon 186 code
  aktivnosti = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
      if(!data.add){
        this.aktivnosti = data.predmet.aktivnosti.split(';');
      }
  }

  addKey(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.aktivnosti.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
    this.data.predmet.aktivnosti= this.aktivnosti.join(';');
  }
  removeKey(key: string): void {
    const index = this.aktivnosti.indexOf(key);
    if (index >= 0) {
      this.aktivnosti.splice(index, 1);
    }
    this.data.predmet.aktivnosti = this.aktivnosti.join(';');
  }

}
