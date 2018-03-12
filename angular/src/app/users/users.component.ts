import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {UserService} from '../service/user.service';
import { UserApi } from '../model/user-api';
import { AddUserComponent } from './add-user/add-user.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns = ['name', 'surname', 'username', 'type', 'options'];
  users = new MatTableDataSource();
  loading: boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.users.filter = filterValue;
  }
  constructor(public dialog: MatDialog, private userService: UserService,
              public snackBar: MatSnackBar, private _router: Router) {}

  ngOnInit() {
    this.users.paginator = this.paginator;
    this.getAll();
  }

  getAll(): void {
    this.loading = true;
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
        this.userService.add(result.user).subscribe( () => {
          this.getAll();
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

}
