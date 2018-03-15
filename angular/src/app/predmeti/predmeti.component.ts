import { Component, OnInit } from '@angular/core';
import {Predmet} from '../model/predmet';
import {PredmetService} from '../service/predmet.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {AddEditPredmetComponent} from './add-edit-predmet/add-edit-predmet.component';
import {Router} from '@angular/router';
import {UserApi} from '../model/user-api';

@Component({
  selector: 'app-predmeti',
  templateUrl: './predmeti.component.html',
  styleUrls: ['./predmeti.component.css']
})
export class PredmetiComponent implements OnInit {

  predmeti: Predmet[]; filter;
  constructor(private predmetService: PredmetService, private dialog: MatDialog,
              private snackBar: MatSnackBar, private _router: Router) {}

  ngOnInit() {
    this.predmetService.getAll().subscribe(data => this.predmeti = data)
  }

  add() {
    const dialogRef = this.dialog.open(AddEditPredmetComponent, {
      panelClass: 'dialog-600x400',
      data: {
        add: true, title: 'Add new', icon: 'add',
        tooltip: 'Add', predmet: new Predmet()
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.predmetService.add(result.predmet).subscribe( data => {
          this.predmeti.push(data);
          this.snackBar.open('Successfully added!', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        }, () => {
          this.snackBar.open('Error with add new predmet', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        });
      }
    });
  }
  edit(predmet) {
    const index = this.predmeti.indexOf(predmet);
    const dialogRef = this.dialog.open(AddEditPredmetComponent, {
      panelClass: 'dialog-600x400',
      data: {
        title: 'Edit predmet', icon: 'edit',
        tooltip: 'Edit predmet', predmet: Object.assign({}, predmet)
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.predmetService.edit(result.predmet).subscribe( data => {
          this.predmeti[index] = data;
          this.snackBar.open(`Successfully changed! Open predmet with id:'${data.id}'\n`
            , 'Open', {
              duration: 10000, verticalPosition: 'top'
            }).onAction().subscribe(() => {
            this._router.navigate(['/predmeti', data.id]);
          });
        }, () => {
          this.snackBar.open('Error with change predmet attributes', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        });
      }
    });
  }
  deletePredmet(predmet: Predmet) {
    let index = this.predmeti.indexOf(predmet);
    this.snackBar.open('Are you sure?', 'Yes', {
      duration: 10000, verticalPosition: 'top'
    }).onAction().subscribe(() => {
      this.predmetService.delete(predmet).subscribe(() => {
          this.predmeti.splice(index,1);
      });
    });
  }

}
