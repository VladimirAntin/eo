import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {TipAktivnostiService} from '../../../service/tip-aktivnosti.service';

@Component({
  selector: 'app-add-edit-predmet',
  templateUrl: './add-edit-predmet.component.html',
  styleUrls: ['./add-edit-predmet.component.css']
})
export class AddEditPredmetComponent implements OnInit {

  //separatorKeysCodes = [ENTER, 186]; // semicolon 186 code
   tipovi_aktivnosti = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private tipAkativnostiService: TipAktivnostiService) {
  }

  ngOnInit(): void {
    this.tipAkativnostiService.getAll().subscribe(d => this.tipovi_aktivnosti = d);
  }
  change() {
  }
}
