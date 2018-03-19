import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Uplata} from '../model/uplata';

@Injectable()
export class UplataService {


  private uplate = '/api/uplate/';
  constructor(private http: HttpClient) { }

  add(uplata: Uplata): Observable<Uplata> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}` })
    };
    return this.http.post<Uplata>(`${this.uplate}`, uplata, httpOptions);
  }

}
