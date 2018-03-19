import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Zvanje} from '../model/zvanje';

@Injectable()
export class ZvanjeService {

  private zvanja = '/api/zvanja/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Zvanje[]>  {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<Zvanje[]>(this.zvanja, httpOptions);
  }

  get(id: number): Observable<Zvanje>  {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<Zvanje>(`${this.zvanja}${id}`, httpOptions);
  }

}
