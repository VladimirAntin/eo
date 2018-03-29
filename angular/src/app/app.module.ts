import { BrowserModule } from '@angular/platform-browser';
import {enableProdMode, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {
  MatButtonModule, MatChipsModule, MatDialogModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSelectModule,
  MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {AuthService} from './service/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { SearchPipe } from './pipes/search.pipe';
import {UserService} from './service/user.service';
import {ZvanjeService} from './service/zvanje.service';
import {DokumentService} from './service/dokument.service';
import { AddDocComponent } from './users/user/add-doc/add-doc.component';
import {TipDokumenta} from './model/tip-dokumenta';
import {TipDokumentaService} from './service/tip-dokumenta.service';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import {ChangePasswordComponent} from './users/change-password/change-password.component';
import { PredmetiComponent } from './predmeti/predmeti.component';
import {PredmetService} from './service/predmet.service';
import { AddEditPredmetComponent } from './predmeti/add-edit-predmet/add-edit-predmet.component';
import { PredmetComponent } from './predmeti/predmet/predmet.component';
import { AddEditAktivnostComponent } from './predmeti/add-edit-aktivnost/add-edit-aktivnost.component';
import {AktivnostService} from './service/aktivnost.service';
import {NastavnikService} from './service/nastavnik.service';
import {UcenikService} from './service/ucenik.service';
import { AddUcenikNastavnikComponent } from './predmeti/add-ucenik-nastavnik/add-ucenik-nastavnik.component';
import {UplataService} from './service/uplata.service';
import { AddUplataComponent } from './predmeti/add-uplata/add-uplata.component';
import {FileService} from './service/file.service';

enableProdMode();
@NgModule({
  declarations: [
    AppComponent, LoginComponent, HomeComponent, NavigationComponent,
    NotFoundComponent, UsersComponent, UserComponent, SearchPipe,
    AddDocComponent, AddUserComponent, EditUserComponent, ChangePasswordComponent, PredmetiComponent,
    AddEditPredmetComponent, PredmetComponent, AddEditAktivnostComponent, AddUcenikNastavnikComponent,
    AddUplataComponent
  ],
  imports: [
    AppRoutingModule, BrowserModule, HttpClientModule,
    FormsModule, BrowserAnimationsModule, MatFormFieldModule, MatChipsModule, MatInputModule,
    MatListModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule, MatToolbarModule,
    MatButtonModule, MatPaginatorModule, MatTableModule, MatDialogModule, MatTooltipModule,
    MatTabsModule, MatMenuModule, MatSelectModule, MatSortModule
  ],
  exports: [
    FormsModule,
    MatFormFieldModule, MatInputModule, MatListModule, MatIconModule, MatProgressSpinnerModule,
    MatSnackBarModule, MatToolbarModule, MatButtonModule, MatPaginatorModule, MatTableModule,
    MatDialogModule, MatTooltipModule, MatTabsModule, MatChipsModule, MatMenuModule, MatSelectModule
  ],
  entryComponents: [AddDocComponent, AddUserComponent, EditUserComponent, ChangePasswordComponent,
    AddEditPredmetComponent, AddEditAktivnostComponent, AddUcenikNastavnikComponent, AddUplataComponent],
  providers: [AuthService, UserService, ZvanjeService, DokumentService, TipDokumentaService, PredmetService,
    AktivnostService, NastavnikService, UcenikService, UplataService, FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
