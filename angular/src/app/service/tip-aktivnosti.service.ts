import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient } from '@angular/common/http';
import {TipAktivnosti} from '../model/tip-aktivnosti';

@Injectable()
export class TipAktivnostiService {

  private tipovi = '/api/tipovi_aktivnosti/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<TipAktivnosti[]>  {
    return this.http.get<TipAktivnosti[]>(`${this.tipovi}`);
  }
}
