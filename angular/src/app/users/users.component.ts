import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns = ['name', 'surname', 'username', 'type','options'];
  users = new MatTableDataSource();
  loading: boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.users.filter = filterValue;
  }
  constructor(public dialog: MatDialog, private userService: UserService, public snackBar: MatSnackBar) {}

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
      }else {
        this.users.data = null;
      }
    });
  }
}
