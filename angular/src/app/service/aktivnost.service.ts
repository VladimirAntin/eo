import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Aktivnost} from '../model/aktivnost';

@Injectable()
export class AktivnostService {

  private aktivnosti = '/api/aktivnosti/';
  constructor(private http: HttpClient) { }

  add(akt: Aktivnost): Observable<Aktivnost> {
  const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.post<Aktivnost>(`${this.aktivnosti}`, akt, httpOptions);
  }

  edit(akt: Aktivnost): Observable<Aktivnost> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.put<Aktivnost>(`${this.aktivnosti}${akt.id}`, akt, httpOptions);
  }

}
