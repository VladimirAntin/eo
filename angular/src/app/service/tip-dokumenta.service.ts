import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {TipDokumenta} from '../model/tip-dokumenta';

@Injectable()
export class TipDokumentaService {

  private tipovi = '/api/tipovi_dokumenta/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<TipDokumenta[]>  {
    return this.http.get<TipDokumenta[]>(`${this.tipovi}`);
  }

  add(tip: TipDokumenta): Observable<TipDokumenta> {
    return this.http.post<TipDokumenta>(this.tipovi, tip);
  }

}
