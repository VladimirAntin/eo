import { Component } from '@angular/core';
import {UserApi} from '../model/user-api';
import {AuthService} from '../service/auth.service';
import {Nastavnik} from '../model/nastavnik';
import {Ucenik} from '../model/ucenik';
import {NavItem} from '../model/nav-item';
import {NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  me: UserApi; nav_items: NavItem[];
  constructor(private authService: AuthService, private _router: Router) {
    this._router.events.filter((e) => e instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) =>{
      if(event.url!='/login'){
        this.init();
      }
    });
  }

  init() {
    if(this._router.url!=='/login'){
      this.navItems();
      this.getMe();
    }
  }

  private navItems() {
    this.authService.nav_items().subscribe(data => {
      this.nav_items = data;
    }, () => this.nav_items = []);
  }

  private getMe() {
    this.authService.me().subscribe(data => this.me = data, err => {
      this._router.navigateByUrl('/login');
      this.authService.removeToken();
    });
  }

  logout() {
    this.authService.logout().subscribe(()=> {
      this._router.navigateByUrl('/login');
    });
  }

}
