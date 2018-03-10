import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {Zvanje} from '../../model/zvanje';
import {ZvanjeService} from '../../service/zvanje.service';
import {Nastavnik} from '../../model/nastavnik';
import {UserApi} from '../../model/user-api';
import {Ucenik} from '../../model/ucenik';
import {Authority} from '../../model/authority';
import {Dokument} from '../../model/dokument';
import {Uplata} from '../../model/uplata';
import {Predmet} from '../../model/predmet';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id; user: UserApi; zvanje = new Zvanje();
  authorities: Authority[]; docs: Dokument[]; uplate: Uplata[]; predmeti: Predmet[];
  constructor(private route: ActivatedRoute, private userService: UserService, public _router: Router) {}
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if ( isNaN(this.id) ) {
      this.id = this.route.snapshot.paramMap.get('id');
    }
    this.get();
    this._router.events.filter((e) => e instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (event.urlAfterRedirects.indexOf('users/') !== -1) {
          this.id = event.urlAfterRedirects.split('/').pop();
          this.authorities = [];
          this.docs = [];
          this.uplate = [];
          this.predmeti = [];
          this.get();
        }
      });
  }
  private get() {
    this.userService.get(this.id).subscribe(data => {
      this.user = Object.assign(new UserApi(), data);
      if(this.user.isNastavnik()){
        this.userService.getPredmeti(this.user.id).subscribe(data => this.predmeti=data);
      }else if(this.user.isUcenik()){
        this.userService.getUplate(this.user.id).subscribe(data => this.uplate=data);
        this.userService.getDokumenta(this.user.id).subscribe(data => this.docs=data);
        this.userService.getPredmeti(this.user.id).subscribe(data => this.predmeti=data);
      }
      this.userService.getAuthorities(this.id).subscribe(data => this.authorities = data);
    }, () => this.user = null);
  }

}
