import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
  getAll(): Observable<Predmet[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<Predmet[]>(this.predmeti, httpOptions);
  }
  get(id: number): Observable<Predmet> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<Predmet>(`${this.predmeti}${id}`, httpOptions);
  }
  getUcenici(id: number): Observable<Ucenik[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<Ucenik[]>(`${this.predmeti}${id}/ucenici`, httpOptions);
  }
  postUcenici(id: number, helpers: Helper[]): Observable<Ucenik[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.post<Ucenik[]>(`${this.predmeti}${id}/ucenici`, helpers, httpOptions);
  }
  getNastavnici(id: number): Observable<Nastavnik[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<Nastavnik[]>(`${this.predmeti}${id}/nastavnici`, httpOptions);
  }
  postNastavnici(id: number, helpers: Helper[]): Observable<Nastavnik[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.post<Nastavnik[]>(`${this.predmeti}${id}/nastavnici`, helpers, httpOptions);
  }
  getUplate(id: number): Observable<Uplata[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.get<Uplata[]>(`${this.predmeti}${id}/uplate`, httpOptions);
  }
  add(predmet: Predmet): Observable<Predmet> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.post<Predmet>(this.predmeti, predmet, httpOptions);
  }
  edit(predmet: Predmet): Observable<Predmet> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.put<Predmet>(`${this.predmeti}${predmet.id}`, predmet, httpOptions);
  }
  delete(predmet: Predmet | number): Observable<Predmet> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    const id = typeof predmet === 'number' ? predmet : predmet.id;
    return this.http.delete<Predmet>(`${this.predmeti}${id}`, httpOptions);
  }

  deleteNastavnik(predmet: number, nastavnik: number) {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.delete(`${this.predmeti}${predmet}/nastavnici/${nastavnik}`, httpOptions);
  }
  deleteUcenik(predmet: number, ucenik: number) {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.delete(`${this.predmeti}${predmet}/ucenici/${ucenik}`, httpOptions);
  }

}
