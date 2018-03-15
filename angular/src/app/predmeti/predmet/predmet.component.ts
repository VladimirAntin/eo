import { Component, OnInit } from '@angular/core';
import {PredmetService} from '../../service/predmet.service';
import {ActivatedRoute} from '@angular/router';
import {Predmet} from '../../model/predmet';
import {AddEditPredmetComponent} from '../add-edit-predmet/add-edit-predmet.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Ucenik} from '../../model/ucenik';
import {Nastavnik} from '../../model/nastavnik';
import {Uplata} from '../../model/uplata';

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.css']
})
export class PredmetComponent implements OnInit {

  id: number; predmet: Predmet; ucenici: Ucenik[]; nastavnici: Nastavnik[];
  uplate: Uplata[];
  constructor(private route: ActivatedRoute, private predmetService: PredmetService,
              private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.get();
  }

  private get(){
    this.predmetService.get(this.id).subscribe(data => {
      this.predmet = data;
      this.predmetService.getUcenici(this.id).subscribe(data => this.ucenici = data);
      this.predmetService.getNastavnici(this.id).subscribe(data => this.nastavnici = data);
      this.predmetService.getUplate(this.id).subscribe(data => this.uplate = data);
    });
  }

  edit() {
    const dialogRef = this.dialog.open(AddEditPredmetComponent, {
      panelClass: 'dialog-600x400',
      data: {
        title: 'Edit predmet', icon: 'edit',
        tooltip: 'Edit predmet', predmet: Object.assign({}, this.predmet)
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.predmetService.edit(result.predmet).subscribe( data => {
          this.predmet = data;
          this.snackBar.open(`Successfully changed!\n`, 'Ok', {
              duration: 4000, verticalPosition: 'top'
            });
        }, () => {
          this.snackBar.open('Error with change predmet attributes', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        });
      }
    });
  }

}
