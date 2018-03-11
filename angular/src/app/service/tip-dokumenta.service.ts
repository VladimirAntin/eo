import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {TipDokumenta} from '../model/tip-dokumenta';

@Injectable()
export class TipDokumentaService {

  private tipovi = '/api/tipovi_dokumenta/';
  private httpOptions = {
    headers: new HttpHeaders(
      { 'Authorization': `jwt ${localStorage.getItem('token')}`})
  };
  constructor(private http: HttpClient) { }

  getAll(): Observable<TipDokumenta[]>  {
    return this.http.get<TipDokumenta[]>(`${this.tipovi}`, this.httpOptions);
  }

}
