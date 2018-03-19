import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Dokument} from '../model/dokument';

@Injectable()
export class DokumentService {

  private docs = '/api/dokumenti/';
  constructor(private http: HttpClient) { }

  add(doc: Dokument): Observable<Dokument> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.post<Dokument>(`${this.docs}`, doc, httpOptions);
  }

  delete(doc: Dokument | number): Observable<Dokument> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    const id = typeof doc === 'number' ? doc : doc.id;
    return this.http.delete<Dokument>(`${this.docs}${id}`, httpOptions);
  }

}
