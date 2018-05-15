import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-codebook-standard-add',
  templateUrl: './codebook-standard-add.component.html',
  styleUrls: ['./codebook-standard-add.component.css']
})
export class CodebookStandardAddComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
