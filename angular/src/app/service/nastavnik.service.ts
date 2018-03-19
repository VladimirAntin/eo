import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Nastavnik} from '../model/nastavnik';

@Injectable()
export class NastavnikService {

  private nastavnici = '/api/nastavnici/';
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Nastavnik[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<Nastavnik[]>(this.nastavnici, httpOptions);
  }

}
