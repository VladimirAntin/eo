import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Dokument} from '../model/dokument';

@Injectable()
export class DokumentService {

  private httpOptions = {
    headers: new HttpHeaders(
      { 'Authorization': `jwt ${localStorage.getItem('token')}` })
  };
  private docs = '/api/dokumenti/';
  constructor(private http: HttpClient) { }

  add(doc: Dokument): Observable<Dokument> {
    return this.http.post<Dokument>(`${this.docs}`, doc, this.httpOptions);
  }

  delete(doc: Dokument | number): Observable<Dokument> {
    const id = typeof doc === 'number' ? doc : doc.id;
    return this.http.delete<Dokument>(`${this.docs}${id}`, this.httpOptions);
  }

}
