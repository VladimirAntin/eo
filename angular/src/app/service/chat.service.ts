import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Chat} from '../model/chat';

@Injectable()
export class ChatService {

  constructor(private http: HttpClient) { }

  group_chat = '/api/group_chat';

  getAll(page: Number): Observable<HttpResponse<Chat[]>> {
    const headers = new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` });
    return this.http.get<Chat[]>(`${this.group_chat}?page=${page}`, {
      headers: headers, observe: 'response'});
  }

}
