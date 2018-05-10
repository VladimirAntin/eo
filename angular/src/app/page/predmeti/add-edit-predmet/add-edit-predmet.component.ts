import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {TipAktivnostiService} from '../../../service/tip-aktivnosti.service';
import {TipAktivnosti} from '../../../model/tip-aktivnosti';

@Component({
  selector: 'app-add-edit-predmet',
  templateUrl: './add-edit-predmet.component.html',
  styleUrls: ['./add-edit-predmet.component.css']
})
export class AddEditPredmetComponent implements OnInit {

  //separatorKeysCodes = [ENTER, 186]; // semicolon 186 code
   tipovi_aktivnosti: TipAktivnosti[] = []; selectedValues = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private tipAkativnostiService: TipAktivnostiService) {
  }

  ngOnInit(): void {
    this.tipAkativnostiService.getAll().subscribe(d => {
      this.tipovi_aktivnosti = d;
      const tips = this.data.predmet.aktivnosti.map(t => t.id);
      this.selectedValues = this.tipovi_aktivnosti.filter(t => tips.findIndex(tip => tip===t.id)!==-1);
    });
  }
  change() {
    this.data.predmet.aktivnosti = this.selectedValues;
  }
}
