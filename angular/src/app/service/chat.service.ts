import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Chat} from '../model/chat';

@Injectable()
export class ChatService {

  constructor(private http: HttpClient) { }

  group_chat = '/api/group_chat/';

  getAll(): Observable<Chat[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<Chat[]>(`${this.group_chat}`, httpOptions);
  }


}
