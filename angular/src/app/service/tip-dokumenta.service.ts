import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {TipDokumenta} from '../model/tip-dokumenta';

@Injectable()
export class TipDokumentaService {

  private tipovi = '/api/tipovi_dokumenta/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<TipDokumenta[]>  {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<TipDokumenta[]>(`${this.tipovi}`, httpOptions);
  }

}
