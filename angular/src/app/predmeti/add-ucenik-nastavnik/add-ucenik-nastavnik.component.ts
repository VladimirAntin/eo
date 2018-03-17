import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-ucenik-nastavnik',
  templateUrl: './add-ucenik-nastavnik.component.html',
  styleUrls: ['./add-ucenik-nastavnik.component.css']
})
export class AddUcenikNastavnikComponent {

  listService = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.data.service.getAll().subscribe(data => {
      this.listService = data;
      this.data.filterList.forEach(i => {
        this.listService = this.listService.filter(l => l.id!==i.id);
      });
    });
  }

}
