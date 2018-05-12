import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSnackBar, MatTableDataSource } from '@angular/material';
import { UserService } from '../../service/user.service';
import { UserApi } from '../../model/user-api';
import { AddUserComponent } from './add-user/add-user.component';
import { Router } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserPassword } from '../../model/user-password';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns = ['name', 'surname', 'username', 'email', 'type', 'online', 'options'];
  users = new MatTableDataSource();
  loading = true; isAdmin; me: UserApi;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.users.filter = filterValue;
  }
  constructor(public dialog: MatDialog, private userService: UserService, private authService: AuthService,
    public snackBar: MatSnackBar, private _router: Router) {
    this.authService.me().subscribe(data => {
      this.me = data;
      this.isAdmin = data.authorities
        .filter(a => a.name.substring(5).toLowerCase() === 'admin').length === 1;
    });
  }

  ngOnInit() {
    this.users.paginator = this.paginator;
    this.getAll();
  }

  getAll(): void {
    this.userService.getAll().subscribe(data => {
      this.users.data = data;
      this.users.paginator = this.paginator;
      this.loading = false;
    }, err => {
      if (err.status !== 403) {
        this.snackBar.open('Something is wrong with the server', 'OK', {
          duration: 4000, verticalPosition: 'top'
        });
      } else {
        this.users.data = null;
      }
    });
  }

  addUser() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      data: {
        user: new UserApi()
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.add(result.user).subscribe(data => {
          this.users.data.push(data);
          this.users.paginator = this.paginator;
          this.snackBar.open(`Success added!: Open User with username:'${result.user.username}'\n`
            , 'Open', {
              duration: 10000, verticalPosition: 'top'
            }).onAction().subscribe(() => {
              this._router.navigate(['/users', result.user.username]);
            });
        }, () => {
          this.snackBar.open(
            `Error, user with username: '${result.user.username}' can not be added`, 'Ok', {
              duration: 4000, verticalPosition: 'top'
            });
        });
      }
    });
  }

  deleteUser(user: UserApi) {
    this.snackBar.open('Are you sure?', 'Yes', {
      duration: 10000, verticalPosition: 'top'
    }).onAction().subscribe(() => {
      this.userService.delete(user).subscribe(() => {
        this.users.data = this.users.data.filter((u: UserApi) => u.id !== user.id);
        this.users.paginator = this.paginator;
      });
    });
  }

  updateUser(user) {
    const index = this.users.data.indexOf(user);
    const users = this.users.data;
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: {
        user: Object.assign(new UserApi(), user),
        me: Object.assign(new UserApi(), this.me)
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.update(result.user).subscribe(data => {
          // this.getAll();
          users[index] = data;
          this.users.data = users;
          this.snackBar.open(`Success changed!: Open User with username:'${result.user.username}'\n`
            , 'Open', {
              duration: 10000, verticalPosition: 'top'
            }).onAction().subscribe(() => {
              this._router.navigate(['/users', result.user.username]);
            });
        }, () => {
          this.snackBar.open(`Error, user with username ${result.user.username} is already exists`, 'Ok', {
            duration: 4000, verticalPosition: 'top'
          });
        });
      }
    });
  }
  changePassword(user) {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      panelClass: 'dialog-600x400',
      data: { user: new UserPassword(), admin: true }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.changePassword(user.id, result.user).subscribe(() => {
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
