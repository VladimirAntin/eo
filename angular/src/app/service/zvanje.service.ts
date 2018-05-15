import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Zvanje} from '../model/zvanje';
import {TipDokumenta} from '../model/tip-dokumenta';

@Injectable()
export class ZvanjeService {

  private zvanja = '/api/zvanja/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Zvanje[]>  {
    return this.http.get<Zvanje[]>(this.zvanja);
  }

  get(id: number): Observable<Zvanje>  {
    return this.http.get<Zvanje>(`${this.zvanja}${id}`);
  }


  add(zvanje: Zvanje): Observable<Zvanje> {
    return this.http.post<Zvanje>(this.zvanja, zvanje);
  }

}
