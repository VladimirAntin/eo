import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Uplata} from '../model/uplata';

@Injectable()
export class UplataService {


  private uplate = '/api/uplate/';
  constructor(private http: HttpClient) { }

  add(uplata: Uplata): Observable<Uplata> {
    return this.http.post<Uplata>(`${this.uplate}`, uplata);
  }

}
