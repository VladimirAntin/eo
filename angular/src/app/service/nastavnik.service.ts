import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Nastavnik} from '../model/nastavnik';

@Injectable()
export class NastavnikService {

  private nastavnici = '/api/nastavnici/';
  private httpOptions = {
    headers: new HttpHeaders(
      {'Authorization': `jwt ${localStorage.getItem('token')}`})
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Nastavnik[]> {
    return this.http.get<Nastavnik[]>(this.nastavnici, this.httpOptions);
  }

}
