import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserApi} from '../model/user-api';
import {Authority} from '../model/authority';
import {Predmet} from '../model/predmet';
import {Uplata} from '../model/uplata';
import {Dokument} from '../model/dokument';
import {UserPassword} from '../model/user-password';

@Injectable()
export class UserService {

  private users = '/api/users/';
  constructor(private http: HttpClient) { }
  getAll(): Observable<UserApi[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<UserApi[]>(this.users, httpOptions);
  }

  get(id: number | string): Observable<UserApi>  {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<UserApi>(`${this.users}${id}`, httpOptions);
  }
  getAuthorities(id: number | string): Observable<Authority[]>  {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<Authority[]>(`${this.users}${id}/authorities`, httpOptions);
  }
  getPredmeti(id: number | string): Observable<Predmet[]>  {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<Predmet[]>(`${this.users}${id}/predmeti`, httpOptions);
  }
  getUplate(id: number | string): Observable<Uplata[]>  {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<Uplata[]>(`${this.users}${id}/uplate`, httpOptions);
  }
  getDokumenta(id: number | string): Observable<Dokument[]>  {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<Dokument[]>(`${this.users}${id}/dokumenti`, httpOptions);
  }
  add(user: UserApi): Observable<UserApi>  {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.post<UserApi>(this.users, user, httpOptions);
  }
  delete (user: UserApi | number): Observable<UserApi> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    const id = typeof user === 'number' ? user : user.id;
    return this.http.delete<UserApi>(`${this.users}${id}`, httpOptions);
  }
  update(user: UserApi) {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.put<UserApi>(`${this.users}${user.id}`, user, httpOptions);
  }
  changePassword(id: number, user: UserPassword) {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.patch(`${this.users}${id}/password`, user, httpOptions);
  }

  changePicture(id: number, file: File): Observable<UserApi>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.put<UserApi>(`${this.users}${id}/picture`, formData, httpOptions);
  }


}
