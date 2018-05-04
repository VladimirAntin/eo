import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Aktivnost} from '../model/aktivnost';

@Injectable()
export class AktivnostService {

  private aktivnosti = '/api/aktivnosti/';
  constructor(private http: HttpClient) { }

  add(akt: Aktivnost): Observable<Aktivnost> {
    return this.http.post<Aktivnost>(`${this.aktivnosti}`, akt);
  }

  edit(akt: Aktivnost): Observable<Aktivnost> {
    return this.http.put<Aktivnost>(`${this.aktivnosti}${akt.id}`, akt);
  }

}
