import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PredmetiComponent} from './predmeti.component';
import {AddEditPredmetComponent} from './add-edit-predmet/add-edit-predmet.component';
import {PredmetComponent} from './predmet/predmet.component';
import {AddEditAktivnostComponent} from './add-edit-aktivnost/add-edit-aktivnost.component';
import {AddUcenikNastavnikComponent} from './add-ucenik-nastavnik/add-ucenik-nastavnik.component';
import {AddUplataComponent} from './add-uplata/add-uplata.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],

  declarations: [PredmetiComponent, AddEditPredmetComponent, PredmetComponent,
    AddEditAktivnostComponent, AddUcenikNastavnikComponent, AddUplataComponent],

  exports: [PredmetiComponent, AddEditPredmetComponent, PredmetComponent,
    AddEditAktivnostComponent, AddUcenikNastavnikComponent, AddUplataComponent],
  entryComponents: [AddEditPredmetComponent, AddEditAktivnostComponent, AddUcenikNastavnikComponent, AddUplataComponent]
})
export class PredmetiModule { }
