import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './token-interceptor';
import {AuthGuard} from '../auth.guard';
import {AuthService} from '../service/auth.service';
import {UserService} from '../service/user.service';
import {ZvanjeService} from '../service/zvanje.service';
import {DokumentService} from '../service/dokument.service';
import {TipDokumentaService} from '../service/tip-dokumenta.service';
import {PredmetService} from '../service/predmet.service';
import {TipAktivnostiService} from '../service/tip-aktivnosti.service';
import {AktivnostService} from '../service/aktivnost.service';
import {NastavnikService} from '../service/nastavnik.service';
import {UcenikService} from '../service/ucenik.service';
import {UplataService} from '../service/uplata.service';
import {FileService} from '../service/file.service';
import {MessageService} from '../service/message.service';
import {ChatService} from '../service/chat.service';
import {
  MatButtonModule, MatChipsModule, MatDialogModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSelectModule,
  MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';
import {RoutingModule} from './routing.module';
import {NotFoundComponent} from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule, BrowserModule, HttpClientModule, FormsModule, RoutingModule,
    MatFormFieldModule, MatInputModule, MatListModule, MatIconModule, MatProgressSpinnerModule,
    MatSnackBarModule, MatToolbarModule, MatButtonModule, MatPaginatorModule, MatTableModule,
    MatDialogModule, MatTooltipModule, MatTabsModule, MatChipsModule, MatMenuModule, MatSelectModule,
    MatExpansionModule
  ],
  exports: [
    BrowserAnimationsModule, BrowserModule, HttpClientModule, FormsModule, RoutingModule, NotFoundComponent,
    MatFormFieldModule, MatInputModule, MatListModule, MatIconModule, MatProgressSpinnerModule,
    MatSnackBarModule, MatToolbarModule, MatButtonModule, MatPaginatorModule, MatTableModule,
    MatDialogModule, MatTooltipModule, MatTabsModule, MatChipsModule, MatMenuModule, MatSelectModule,
    MatExpansionModule, SearchPipe
  ],
  declarations: [SearchPipe, NotFoundComponent],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    AuthGuard, AuthService, UserService, ZvanjeService, DokumentService, TipDokumentaService, PredmetService, TipAktivnostiService,
    AktivnostService, NastavnikService, UcenikService, UplataService, FileService, MessageService, ChatService]
})
export class SharedModule { }
