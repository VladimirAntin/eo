import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Message} from '../model/message';

@Injectable()
export class ChatService {

  constructor(private http: HttpClient) { }

  group_chat = '/api/group_chat';

  getAll(page: Number): Observable<HttpResponse<Message[]>> {
    return this.http.get<Message[]>(`${this.group_chat}?page=${page}&size=20`, {observe: 'response'});
  }

}
