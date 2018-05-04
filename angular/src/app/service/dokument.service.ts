import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Dokument} from '../model/dokument';

@Injectable()
export class DokumentService {

  private docs = '/api/dokumenti/';
  constructor(private http: HttpClient) { }

  add(doc: Dokument, file: File): Observable<Dokument> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('ucenik', String(doc.ucenik.username));
    formData.append('tipDokumenta', String(doc.tipDokumenta.id));
    return this.http.post<Dokument>(`${this.docs}`, formData);
  }

  delete(doc: Dokument | number): Observable<Dokument> {
    const id = typeof doc === 'number' ? doc : doc.id;
    return this.http.delete<Dokument>(`${this.docs}${id}`);
  }

}
