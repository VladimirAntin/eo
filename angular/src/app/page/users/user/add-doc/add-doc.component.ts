import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {TipDokumentaService} from '../../../../service/tip-dokumenta.service';
import {TipDokumenta} from '../../../../model/tip-dokumenta';

@Component({
  selector: 'app-add-doc',
  templateUrl: './add-doc.component.html',
  styleUrls: ['./add-doc.component.css']
})
export class AddDocComponent {

  tipovi: TipDokumenta[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private tipService: TipDokumentaService) {
    let typesDocs = [];
    data.docs.forEach(n =>{
      typesDocs.push(n.tipDokumenta.id);
    });
    tipService.getAll().subscribe(types => this.tipovi=types.filter(n=> {
      return typesDocs.indexOf(n.id) === -1;
    }));
  }

  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length === 1) {
      this.data.file = fileList[0];
    }
  }

}
