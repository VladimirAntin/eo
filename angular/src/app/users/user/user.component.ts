import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {UserApi} from '../../model/user-api';
import {Dokument} from '../../model/dokument';
import {Uplata} from '../../model/uplata';
import {Predmet} from '../../model/predmet';
import {AuthService} from '../../service/auth.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {AddDocComponent} from './add-doc/add-doc.component';
import {DokumentService} from '../../service/dokument.service';
import {Ucenik} from '../../model/ucenik';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id; user: UserApi; me: UserApi; docs: Dokument[] = [];
  uplate: Uplata[] = []; predmeti: Predmet[] = [];
  isAdmin = false;
  constructor(private route: ActivatedRoute, private userService: UserService, public snackBar: MatSnackBar,
              private documentService: DokumentService, private authService: AuthService,
              public _router: Router, public dialog: MatDialog) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.get(0);
    this._router.events.filter((e) => e instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (event.urlAfterRedirects.indexOf('users/') !== -1) {
          this.id = event.urlAfterRedirects.split('/').pop();
          if(this.id!==''){
            this.docs = [];
            this.uplate = [];
            this.predmeti = [];
            this.get(1);
          }
        }
      });
  }
  private get(num: number) {
    this.userService.get(this.id).subscribe(data => {
      this.user = Object.assign(new UserApi(), data);
      if(this.user.isNastavnik()){
        this.userService.getPredmeti(this.user.id).subscribe(data => this.predmeti=data);
      }else if(this.user.isUcenik()){
        this.userService.getUplate(this.user.id).subscribe(data => this.uplate=data);
        this.userService.getDokumenta(this.user.id).subscribe(data => this.docs=data);
        this.userService.getPredmeti(this.user.id).subscribe(data => this.predmeti=data);
      }
      if(num==0){
        this.authService.me().subscribe(data => {
          this.me = data;
          this.isAdmin = this.me.authorities
            .filter(a => a.name.substring(5).toLowerCase()==='admin').length===1;
        });
      }
    }, () => this.user = null);
  }

  addDoc() {
    const dialogRef = this.dialog.open(AddDocComponent, {
      panelClass: 'dialog-600x400',
      data: {
        doc: new Dokument().setUcenik(this.user as Ucenik),
        docs: this.docs
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.documentService.add(result.doc).subscribe( data => {
          this.docs.push(data);
          this.snackBar.open('Successfully added!', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        }, () => {
          this.snackBar.open('Error with add new document', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        });
      }
    });
  }

  deleteDoc(doc: Dokument) {
    const index = this.docs.indexOf(doc);
    this.snackBar.open(`Dokument with name: ${doc.tipDokumenta.naziv} will be deleted\n` +
      'Are you sure?', 'Yes', {
      duration: 10000, verticalPosition: 'top'
    }).onAction().subscribe(() => {
      this.documentService.delete(doc).subscribe(() => this.docs.splice(index, 1),
        () => {});
    });
  }
}
