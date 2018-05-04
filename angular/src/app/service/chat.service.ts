import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Chat} from '../model/chat';

@Injectable()
export class ChatService {

  constructor(private http: HttpClient) { }

  group_chat = '/api/group_chat';

  getAll(page: Number): Observable<HttpResponse<Chat[]>> {
    return this.http.get<Chat[]>(`${this.group_chat}?page=${page}`, {observe: 'response'});
  }

}
