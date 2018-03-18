import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Uplata} from '../model/uplata';

@Injectable()
export class UplataService {

  private httpOptions = {
    headers: new HttpHeaders(
      { 'Authorization': `jwt ${localStorage.getItem('token')}` })
  };
  private uplate = '/api/uplate/';
  constructor(private http: HttpClient) { }

  add(uplata: Uplata): Observable<Uplata> {
    return this.http.post<Uplata>(`${this.uplate}`, uplata, this.httpOptions);
  }

}
