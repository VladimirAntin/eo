import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {UserApi} from '../model/user-api';
import {DomSanitizer} from '@angular/platform-browser';
import { saveAs } from 'file-saver';
import {Dokument} from '../model/dokument';
@Injectable()
export class FileService {

  constructor(private http: HttpClient, private domSanitizer: DomSanitizer) { }

  getBlobUser(user: UserApi) {

  this.http.get(user.picture, {responseType: 'blob'})
      .subscribe(data => {
        user.href = this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data));
      }, () => {});
  }

  downloadFile(filename: string) {
    this.http.get(filename, {responseType: 'blob'})
      .subscribe(data => {
        saveAs(data, filename.substr(6));
      }, () => {});
  }

  getBlobDoc(doc: Dokument) {
    return this.http.get(doc.filename, {responseType: 'blob'});
  }
}
