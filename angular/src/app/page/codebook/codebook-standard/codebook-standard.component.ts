import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {CodebookStandardAddComponent} from '../codebook-standard-add/codebook-standard-add.component';

@Component({
  selector: 'app-codebook-standard',
  templateUrl: './codebook-standard.component.html',
  styleUrls: ['./codebook-standard.component.css']
})
export class CodebookStandardComponent implements OnInit {

  objects: any[] = [];
  @Input() service;
  @Input() edit_title;

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.service.getAll().subscribe(data => this.objects = data);
  }

  add() {

    const dialogRef = this.dialog.open(CodebookStandardAddComponent, {
      panelClass: 'dialog-600x400',
      data: {
        title: this.edit_title, object: {id: 0, naziv: ''}
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.add(result.object).subscribe( data => {
          this.objects.push(data);
          this.snackBar.open('Successfully added!', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        }, () => {
          this.snackBar.open(`Error with add new ${this.edit_title}`, 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        });
      }
    });
  }

}
