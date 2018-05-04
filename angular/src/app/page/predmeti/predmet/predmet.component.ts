import { Component, OnInit } from '@angular/core';
import {PredmetService} from '../../../service/predmet.service';
import {ActivatedRoute} from '@angular/router';
import {Predmet} from '../../../model/predmet';
import {AddEditPredmetComponent} from '../add-edit-predmet/add-edit-predmet.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Ucenik} from '../../../model/ucenik';
import {Nastavnik} from '../../../model/nastavnik';
import {Uplata} from '../../../model/uplata';
import {Aktivnost} from '../../../model/aktivnost';
import {AddEditAktivnostComponent} from '../add-edit-aktivnost/add-edit-aktivnost.component';
import {AktivnostService} from '../../../service/aktivnost.service';
import {NastavnikService} from '../../../service/nastavnik.service';
import {UcenikService} from '../../../service/ucenik.service';
import {AddUcenikNastavnikComponent} from '../add-ucenik-nastavnik/add-ucenik-nastavnik.component';
import {AddUplataComponent} from '../add-uplata/add-uplata.component';
import {UplataService} from '../../../service/uplata.service';
import {AuthService} from '../../../service/auth.service';
import {UserApi} from '../../../model/user-api';

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.css']
})
export class PredmetComponent implements OnInit {

  id: number; predmet: Predmet = new Predmet(); ucenici: Ucenik[] = []; nastavnici: Nastavnik[] = [];
  uplate: Uplata[] = []; isUcenik = false; me: UserApi; loading = true;
  constructor(private route: ActivatedRoute, private predmetService: PredmetService,
              private dialog: MatDialog, private snackBar: MatSnackBar,
              private aktivnostService: AktivnostService, private uplataService: UplataService,
              private nastavnikService: NastavnikService, private ucenikService: UcenikService,
              private authService: AuthService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.get();
  }

  filterAktivnosti(aktivnosti: Aktivnost[]) {
    return aktivnosti.filter(a => a.predmet===this.predmet.id);
  }

  sumBodovi(aktivnosti: Aktivnost[]){
    if(aktivnosti.length === 0){
      return 0;
    }
    let sum = 0;
    aktivnosti.forEach(a => {
      if(a.predmet===this.predmet.id){
        sum += a.brojBodova;
      }
    });
    if(sum>100) return 100;
    return sum;
  }
  private get(){
    this.predmetService.get(this.id).subscribe(data => {
      this.predmet = data;
      this.loading = false;
      this.predmetService.getUcenici(this.id).subscribe(data => this.ucenici = data);
      this.predmetService.getNastavnici(this.id).subscribe(data => this.nastavnici = data);
      this.predmetService.getUplate(this.id).subscribe(data => this.uplate = data);
      this.authService.me().subscribe(data => {
        this.me = data;
        this.isUcenik = this.me.authorities
          .filter(a => a.name.substring(5).toLowerCase()==='student').length===1;
      });

    }, error => this.predmet = null);
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

  addAktivnost() {
    const dialogRef = this.dialog.open(AddEditAktivnostComponent, {
      panelClass: 'dialog-600x400',
      data: {
        title: 'Add aktivnost', icon: 'add', add: true,
        tooltip: 'Add aktivnost', aktivnost: new Aktivnost(),
        predmet: Object.assign({}, this.predmet), ucenici: this.ucenici
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.aktivnostService.add(result.aktivnost).subscribe( (data) => {
          const selectedUcenik = this.ucenici.filter(u=>u.id===data.ucenik)[0];
          selectedUcenik.aktivnosti.push(data);
          this.snackBar.open(`Successfully added!\n`, 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        }, () => {
          this.snackBar.open('Error', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        });
      }
    });
  }

  editAKtivnost(aktivnost, ucenik) {
    const dialogRef = this.dialog.open(AddEditAktivnostComponent, {
      panelClass: 'dialog-600x400',
      data: {
        title: 'Edit aktivnost', icon: 'edit',
        tooltip: 'Edit aktivnost', aktivnost: Object.assign({}, aktivnost),
        predmet: Object.assign({}, this.predmet), ucenici: this.ucenici
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.aktivnostService.edit(result.aktivnost).subscribe( (data) => {
          const selectedUcenik = this.ucenici[this.ucenici.indexOf(ucenik)];
          selectedUcenik.aktivnosti[selectedUcenik.aktivnosti.indexOf(aktivnost)] = data;
          this.snackBar.open(`Successfully changed!\n`, 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        }, () => {
          this.snackBar.open('Error', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        });
      }
    });
  }

  addUcenikNastavnik(nastavnik: boolean) {
    let data = {};
    if(nastavnik){
      data = {title: 'Predavaci', placeholder: 'Predavaci', return_list: [],
        service: this.nastavnikService, filterList: this.nastavnici}
    }else{
      data = {title: 'Ucenici', placeholder: 'Ucenici', return_list: [],
        service: this.ucenikService, filterList: this.ucenici}
    }
    const dialogRef = this.dialog.open(AddUcenikNastavnikComponent, {
      panelClass: 'dialog-600x400',
      data: data});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let service;
        if(nastavnik){
          service = this.predmetService.postNastavnici(this.predmet.id,result.return_list);
        }else{
          service = this.predmetService.postUcenici(this.predmet.id,result.return_list);
        }
        service.subscribe( data => {
          if(nastavnik){
            this.nastavnici = data;
          }else{
            this.ucenici = data;
          }
          this.snackBar.open(`Successfully added!\n`, 'Ok', {
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


  addUplata() {
    const dialogRef = this.dialog.open(AddUplataComponent, {
      panelClass: 'dialog-600x400',
      data: {
        uplata: new Uplata(), predmet: Object.assign({}, this.predmet), ucenici: this.ucenici
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.uplata.ucenik.type = 'Ucenik';
        this.uplataService.add(result.uplata).subscribe( (data) => {
          this.uplate.push(data);
          this.snackBar.open(`Successfully added!\n`, 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        }, () => {
          this.snackBar.open('Error', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        });
      }
    });
  }

  deleteNastavnik(nastavnik) {
    let index = this.nastavnici.indexOf(nastavnik);
    this.snackBar.open('Are you sure?', 'Yes', {
      duration: 10000, verticalPosition: 'top'
    }).onAction().subscribe(() => {
      this.predmetService.deleteNastavnik(this.predmet.id, nastavnik.id).subscribe(() => {
        this.nastavnici.splice(index,1);
      });
    });
  }

  deleteUcenik(ucenik) {
    let index = this.ucenici.indexOf(ucenik);
    this.snackBar.open('Are you sure?', 'Yes', {
      duration: 10000, verticalPosition: 'top'
    }).onAction().subscribe(() => {
      this.predmetService.deleteUcenik(this.predmet.id, ucenik.id).subscribe(() => {
        this.ucenici.splice(index,1);
      });
    });
  }


}
