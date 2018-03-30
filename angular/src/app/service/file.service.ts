import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserApi} from '../model/user-api';
import {DomSanitizer} from '@angular/platform-browser';
import { saveAs } from 'file-saver';
@Injectable()
export class FileService {

  constructor(private http: HttpClient, private domSanitizer: DomSanitizer) { }

  getBlobUser(user: UserApi) {
  const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}`,
          'Accept': 'image/png'})
    };
  this.http.get(user.picture, {headers: httpOptions.headers, responseType: 'blob'})
      .subscribe(data => {
        user.href = this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data));
      }, () => {});
  }

  downloadFile(filename: string) {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}`})
    };
    this.http.get(filename, {headers: httpOptions.headers, responseType: 'blob'})
      .subscribe(data => {
        saveAs(data, filename.substr(6));
      }, () => {});
  }
}
