import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Predmet} from '../model/predmet';
import {Ucenik} from '../model/ucenik';
import {Nastavnik} from '../model/nastavnik';
import {Uplata} from '../model/uplata';

@Injectable()
export class PredmetService {

  private predmeti = '/api/predmeti/';
  private httpOptions = {
    headers: new HttpHeaders(
      { 'Authorization': `jwt ${localStorage.getItem('token')}` })
  };
  constructor(private http: HttpClient) { }
  getAll(): Observable<Predmet[]> {
    return this.http.get<Predmet[]>(this.predmeti, this.httpOptions);
  }
  get(id: number): Observable<Predmet> {
    return this.http.get<Predmet>(`${this.predmeti}${id}`, this.httpOptions);
  }
  getUcenici(id: number): Observable<Ucenik[]> {
    return this.http.get<Ucenik[]>(`${this.predmeti}${id}/ucenici`, this.httpOptions);
  }
  getNastavnici(id: number): Observable<Nastavnik[]> {
    return this.http.get<Nastavnik[]>(`${this.predmeti}${id}/nastavnici`, this.httpOptions);
  }
  getUplate(id: number): Observable<Uplata[]> {
    return this.http.get<Uplata[]>(`${this.predmeti}${id}/uplate`, this.httpOptions);
  }
  add(predmet: Predmet): Observable<Predmet> {
    return this.http.post<Predmet>(this.predmeti, predmet, this.httpOptions);
  }
  edit(predmet: Predmet): Observable<Predmet> {
    return this.http.put<Predmet>(`${this.predmeti}${predmet.id}`, predmet, this.httpOptions);
  }
  delete(predmet: Predmet | number): Observable<Predmet> {
    const id = typeof predmet === 'number' ? predmet : predmet.id;
    return this.http.delete<Predmet>(`${this.predmeti}${id}`, this.httpOptions);
  }
}
