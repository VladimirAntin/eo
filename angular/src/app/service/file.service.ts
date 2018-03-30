import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserApi} from '../model/user-api';
import {DomSanitizer} from '@angular/platform-browser';
import { saveAs } from 'file-saver';
import {Dokument} from '../model/dokument';
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

  getBlobDoc(doc: Dokument) {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Authorization': `jwt ${localStorage.getItem('token')}`})
    };
    return this.http.get(doc.filename, {headers: httpOptions.headers, responseType: 'blob'});
  }
}
