import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserApi} from '../model/user-api';
import {Message} from '../model/message';

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) { }

  messages = '/api/messages/';

  countUnread(): Observable<number> {
    return this.http.get<number>(`${this.messages}unread_count`);
  }

  chat(): Observable<UserApi[]> {
    return this.http.get<UserApi[]>(`${this.messages}`);
  }

  countUnreadUser(id: number): Observable<number> {
    return this.http.get<number>(`${this.messages}${id}/unread`);
  }

  chatUser(id: number, page: number): Observable<HttpResponse<Message[]>> {
    return this.http.get<Message[]>(`${this.messages}${id}?page=${page}&size=20`, {observe: 'response'});
  }

}
