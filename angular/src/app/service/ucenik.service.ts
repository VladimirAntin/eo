import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Ucenik} from '../model/ucenik';

@Injectable()
export class UcenikService {

  private ucenici = '/api/ucenici/';
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Ucenik[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<Ucenik[]>(this.ucenici, httpOptions);
  }


}
