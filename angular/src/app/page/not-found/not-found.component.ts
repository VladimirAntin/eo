import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  location;
  date;
  constructor() {
    this.location = window.location.href;
    this.date = new Date();
  }

}
