import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserApi} from '../model/user-api';
import {Authority} from '../model/authority';
import {Predmet} from '../model/predmet';
import {Uplata} from '../model/uplata';
import {Dokument} from '../model/dokument';

@Injectable()
export class UserService {

  private users = '/api/users/';
  private httpOptions = {
    headers: new HttpHeaders(
      { 'Authorization': `jwt ${localStorage.getItem('token')}`})
  };
  constructor(private http: HttpClient) { }
  getAll(): Observable<UserApi[]> {
    return this.http.get<UserApi[]>(this.users, this.httpOptions);
  }

  get(id: number | string): Observable<UserApi>  {
    return this.http.get<UserApi>(`${this.users}${id}`, this.httpOptions);
  }
  getAuthorities(id: number | string): Observable<Authority[]>  {
    return this.http.get<Authority[]>(`${this.users}${id}/authorities`, this.httpOptions);
  }
  getPredmeti(id: number | string): Observable<Predmet[]>  {
    return this.http.get<Predmet[]>(`${this.users}${id}/predmeti`, this.httpOptions);
  }
  getUplate(id: number | string): Observable<Uplata[]>  {
    return this.http.get<Uplata[]>(`${this.users}${id}/uplate`, this.httpOptions);
  }
  getDokumenta(id: number | string): Observable<Dokument[]>  {
    return this.http.get<Dokument[]>(`${this.users}${id}/dokumenti`, this.httpOptions);
  }


}
