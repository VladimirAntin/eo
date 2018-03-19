import { Component } from '@angular/core';
import { UserApi } from '../model/user-api';
import { AuthService } from '../service/auth.service';
import { Nastavnik } from '../model/nastavnik';
import { Ucenik } from '../model/ucenik';
import { NavItem } from '../model/nav-item';
import { NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { ChangePasswordComponent } from '../users/change-password/change-password.component';
import { EditUserComponent } from '../users/edit-user/edit-user.component';
import { UserPassword } from '../model/user-password';
import { UserService } from '../service/user.service';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  me: UserApi; nav_items: NavItem[] = [];
  constructor(private authService: AuthService, private _router: Router, private userService: UserService,
    private snackBar: MatSnackBar, private dialog: MatDialog) {
    this._router.events.filter((e) => e instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (event.url != '/login') {
          this.init();
        }
      });
  }

  init() {
    if (this._router.url !== '/login') {
      if (this.nav_items.length === 0) {
        this.navItems();
        this.getMe();
      }
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
    this.authService.logout().subscribe(() => {
      this._router.navigateByUrl('/login');
    });
  }

  updateProfile() {
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: {
        user: Object.assign(new UserApi(), this.me)
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.update(result.user).subscribe(data => {
          if (this.me.username !== data.username) {
            this.snackBar.open('Success changed! You changed the username, please login', 'Ok', {
              duration: 4000, verticalPosition: 'top'
            });
            setTimeout(() => {
              this.authService.logout().subscribe(() => {
                this._router.navigateByUrl('/login');
              });
            }, 4000)
          } else {
            this.me = data;
            if (window.location.href.lastIndexOf(`users/${this.me.username}`) !== -1 ||
              window.location.href.lastIndexOf('users') !== -1) {
              window.location.reload();
            }
            this.snackBar.open('Success changed!', 'Ok', {
              duration: 3000, verticalPosition: 'top'
            });
          }
        }, () => {
          this.snackBar.open(`Error, user with username ${result.user.username} is already exists`, 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        });
      }
    });
  }
  changePassword() {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      panelClass: 'dialog-600x400',
      data: { user: new UserPassword(), admin: false }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.changePassword(this.me.id, result.user).subscribe(() => {
          this.snackBar.open('Successfully changed!', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        }, () => {
          this.snackBar.open('Error with change password!', 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        });
      }
    });
  }

}
