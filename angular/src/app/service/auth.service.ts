import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs/Observable';
import {Token} from '../model/token';
import {UserApi} from '../model/user-api';
import {NavItem} from '../model/nav-item';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  loginPost(user: User): Observable<Token> {
    const body = `username=${user.username}&password=${user.password}`;
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    return this.http.post<Token>('/auth/login', body, httpOptions);
  }
  setToken(data:Token) {
    localStorage.setItem('token', data.access_token);
  }
  removeToken(): void {
    localStorage.removeItem('token');
  }
  logout() {
    var token = localStorage.getItem('token');
    this.removeToken();
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${token}` })
    };
    return this.http.get('/auth/logout', httpOptions);
  }

  me(): Observable<UserApi> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<UserApi>('/api/me', httpOptions);
  }

  offline(): Observable<UserApi> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<UserApi>('/api/offline', httpOptions);
  }


  nav_items(): Observable<NavItem[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<NavItem[]>('/api/nav_items', httpOptions);
  }
}
