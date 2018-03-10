import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Zvanje} from '../model/zvanje';

@Injectable()
export class ZvanjeService {

  private zvanja = '/api/zvanja/';
  private httpOptions = {
    headers: new HttpHeaders(
      { 'Authorization': `jwt ${localStorage.getItem('token')}`})
  };
  constructor(private http: HttpClient) { }

  get(id: number): Observable<Zvanje>  {
    return this.http.get<Zvanje>(`${this.zvanja}${id}`, this.httpOptions);
  }

}
