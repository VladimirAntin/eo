import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
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
    return this.http.get<UserApi[]>(this.users);
  }

  get(id: number | string): Observable<UserApi>  {
    return this.http.get<UserApi>(`${this.users}${id}`);
  }

  getAuthorities(id: number | string): Observable<Authority[]>  {
    return this.http.get<Authority[]>(`${this.users}${id}/authorities`);
  }

  getPredmeti(id: number | string): Observable<Predmet[]>  {
    return this.http.get<Predmet[]>(`${this.users}${id}/predmeti`);
  }

  getUplate(id: number | string): Observable<Uplata[]>  {
    return this.http.get<Uplata[]>(`${this.users}${id}/uplate`);
  }

  getDokumenta(id: number | string): Observable<Dokument[]>  {
    return this.http.get<Dokument[]>(`${this.users}${id}/dokumenti`);
  }

  add(user: UserApi): Observable<UserApi>  {
    return this.http.post<UserApi>(this.users, user);
  }

  delete (user: UserApi | number): Observable<UserApi> {
    const id = typeof user === 'number' ? user : user.id;
    return this.http.delete<UserApi>(`${this.users}${id}`);
  }

  update(user: UserApi) {
    return this.http.put<UserApi>(`${this.users}${user.id}`, user);
  }

  changePassword(id: number, user: UserPassword) {
    return this.http.patch(`${this.users}${id}/password`, user);
  }

  changePicture(id: number, file: File): Observable<UserApi>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.put<UserApi>(`${this.users}${id}/picture`, formData);
  }


}
