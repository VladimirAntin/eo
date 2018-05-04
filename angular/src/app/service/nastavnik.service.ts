import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Nastavnik} from '../model/nastavnik';

@Injectable()
export class NastavnikService {

  private nastavnici = '/api/nastavnici/';
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Nastavnik[]> {
    return this.http.get<Nastavnik[]>(this.nastavnici);
  }

}
