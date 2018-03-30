import {Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-document',
  templateUrl: './dialog-document.component.html',
  styleUrls: ['./dialog-document.component.css']
})
export class DialogDocumentComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
