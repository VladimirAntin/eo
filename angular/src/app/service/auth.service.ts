import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs/Observable';
import {Token} from '../model/token';
import {UserApi} from '../model/user-api';
import {NavItem} from '../model/nav-item';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


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
  setToken(data: Token) {
    localStorage.setItem('token', data.access_token);
  }
  removeToken(): void {
    localStorage.removeItem('token');
  }
  logout() {
    this.removeToken();
    return this.http.get('/auth/logout');
  }

  me(): Observable<UserApi> {
    return this.http.get<UserApi>('/api/me');
  }

  offline(): Observable<UserApi> {
    return this.http.get<UserApi>('/api/offline');
  }

  nav_items(): Observable<NavItem[]> {
    return this.http.get<NavItem[]>('/api/nav_items');
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
