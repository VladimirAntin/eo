import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserApi} from '../model/user-api';
import {Message} from '../model/message';
import {Uplata} from '../model/uplata';

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) { }

  messages = '/api/messages/';

  countUnread(): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<number>(`${this.messages}unread_count`, httpOptions);
  }

  chat(): Observable<UserApi[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<UserApi[]>(`${this.messages}`, httpOptions);
  }

  countUnreadUser(id: number): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<number>(`${this.messages}${id}/unread`, httpOptions);
  }

  chatUser(id: number): Observable<Message[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<Message[]>(`${this.messages}${id}`, httpOptions);
  }

}
