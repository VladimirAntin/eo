import { Component } from '@angular/core';
import { User } from '../model/user';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User();
  constructor(private authService: AuthService, private _router: Router, public snackBar: MatSnackBar) {
    if(localStorage.getItem('token')){
      this.authService.me().subscribe(data => {
        _router.navigateByUrl('/');
      }, err=> snackBar.open('Please try login', 'Ok', {
        duration: 3000
      }));
    }
  }

  postLogin(user: User) {
    this.authService.loginPost(user).subscribe(data => {
      this.authService.setToken(data);
      this._router.navigateByUrl('/');
    });
  }

}
