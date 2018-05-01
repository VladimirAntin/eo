import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TipAktivnosti} from '../model/tip-aktivnosti';

@Injectable()
export class TipAktivnostiService {

  private tipovi = '/api/tipovi_aktivnosti/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<TipAktivnosti[]>  {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<TipAktivnosti[]>(`${this.tipovi}`, httpOptions);
  }
}
