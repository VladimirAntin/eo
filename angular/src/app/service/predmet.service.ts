import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Predmet} from '../model/predmet';
import {Ucenik} from '../model/ucenik';
import {Nastavnik} from '../model/nastavnik';
import {Uplata} from '../model/uplata';
import {Helper} from '../model/helper';

@Injectable()
export class PredmetService {

  private predmeti = '/api/predmeti/';
  constructor(private http: HttpClient) { }
  getAll(naziv: string, page: number, num: number): Observable<HttpResponse<Predmet[]>> {
    naziv = naziv==undefined? '': naziv;
    page = page==undefined? 0: page;
    num = num==undefined? 5: num;
    return this.http.get<Predmet[]>(`${this.predmeti}?naziv=${naziv}&page=${page}&num=${num}`,
      {observe: 'response'});
  }

  get(id: number): Observable<Predmet> {
    return this.http.get<Predmet>(`${this.predmeti}${id}`);
  }

  getUcenici(id: number): Observable<Ucenik[]> {
    return this.http.get<Ucenik[]>(`${this.predmeti}${id}/ucenici`);
  }

  postUcenici(id: number, helpers: Helper[]): Observable<Ucenik[]> {
    return this.http.post<Ucenik[]>(`${this.predmeti}${id}/ucenici`, helpers);
  }

  getNastavnici(id: number): Observable<Nastavnik[]> {
    return this.http.get<Nastavnik[]>(`${this.predmeti}${id}/nastavnici`);
  }

  postNastavnici(id: number, helpers: Helper[]): Observable<Nastavnik[]> {
    return this.http.post<Nastavnik[]>(`${this.predmeti}${id}/nastavnici`, helpers);
  }

  getUplate(id: number): Observable<Uplata[]> {
    return this.http.get<Uplata[]>(`${this.predmeti}${id}/uplate`);
  }

  add(predmet: Predmet): Observable<Predmet> {
    return this.http.post<Predmet>(this.predmeti, predmet);
  }

  edit(predmet: Predmet): Observable<Predmet> {
    return this.http.put<Predmet>(`${this.predmeti}${predmet.id}`, predmet);
  }

  delete(predmet: Predmet | number): Observable<Predmet> {
    const id = typeof predmet === 'number' ? predmet : predmet.id;
    return this.http.delete<Predmet>(`${this.predmeti}${id}`);
  }

  deleteNastavnik(predmet: number, nastavnik: number) {
    return this.http.delete(`${this.predmeti}${predmet}/nastavnici/${nastavnik}`);
  }

  deleteUcenik(predmet: number, ucenik: number) {
    return this.http.delete(`${this.predmeti}${predmet}/ucenici/${ucenik}`);
  }

}
