import { Component, OnInit } from '@angular/core';
import {TipDokumentaService} from '../../service/tip-dokumenta.service';
import {TipAktivnostiService} from '../../service/tip-aktivnosti.service';
import {ZvanjeService} from '../../service/zvanje.service';
import {AuthService} from '../../service/auth.service';
import {UserApi} from '../../model/user-api';

@Component({
  selector: 'app-codebook',
  templateUrl: './codebook.component.html',
  styleUrls: ['./codebook.component.css']
})
export class CodebookComponent implements OnInit {

  tabs = []; isAdmin = false;
  constructor(private tipDokumentaService: TipDokumentaService, private tipAktivnostiService: TipAktivnostiService,
              private zvanjeService: ZvanjeService, private _auth: AuthService) { }

  ngOnInit() {
    this._auth.me().subscribe(data => {
      this.isAdmin = data.type.toLowerCase() === 'user';
    });
    this.tabs = [
      {label: 'Tipovi Dokumenta', service: this.tipDokumentaService},
      {label: 'Tipovi Aktivnosti', service: this.tipAktivnostiService},
      {label: 'Zvanja', service: this.zvanjeService},
    ];
  }

}
