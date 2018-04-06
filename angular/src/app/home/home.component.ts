import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {UserApi} from '../model/user-api';
import {UserService} from '../service/user.service';
import {Predmet} from '../model/predmet';
import {NavItem} from '../model/nav-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  me: UserApi = new UserApi(); predmeti: Predmet[] = []; isAdmin;
  nav_items: NavItem[] = []; random = 0;

  colors = [
    'btn-outline-dark',
    'btn-outline-info',
    'btn-outline-secondary',
    'btn-outline-success',
    'btn-outline-primary'
  ];

  constructor(private _auth: AuthService, private _user: UserService) { }

  ngOnInit() {
    this._auth.me().subscribe(data => {
      this.me = data;
      this.isAdmin = data.authorities
        .filter(a => a.name.substring(5).toLowerCase()==='admin').length===1;
      if (this.isAdmin){
        this._auth.nav_items().subscribe(data => this.nav_items = data);
      } else {
        this._user.getPredmeti(this.me.id).subscribe(data => this.predmeti = data);
      }
    });
  }

  randomNum() {
    this.random = Math.floor(Math.random() * 4);
  }

}
