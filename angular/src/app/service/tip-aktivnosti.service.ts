import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient } from '@angular/common/http';
import {TipAktivnosti} from '../model/tip-aktivnosti';
import {TipDokumenta} from '../model/tip-dokumenta';

@Injectable()
export class TipAktivnostiService {

  private tipovi = '/api/tipovi_aktivnosti/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<TipAktivnosti[]>  {
    return this.http.get<TipAktivnosti[]>(`${this.tipovi}`);
  }

  add(tip: TipAktivnosti): Observable<TipAktivnosti> {
    return this.http.post<TipAktivnosti>(this.tipovi, tip);
  }

}
