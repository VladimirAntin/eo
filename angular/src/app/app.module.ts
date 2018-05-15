import { BrowserModule } from '@angular/platform-browser';
import {enableProdMode, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './page/home/home.component';
import {
  MatButtonModule, MatChipsModule, MatDialogModule, MatExpansionModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSelectModule,
  MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {AuthService} from './service/auth.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { UsersComponent } from './page/users/users.component';
import { UserComponent } from './page/users/user/user.component';
import { SearchPipe } from './pipes/search.pipe';
import {UserService} from './service/user.service';
import {ZvanjeService} from './service/zvanje.service';
import {DokumentService} from './service/dokument.service';
import { AddDocComponent } from './page/users/user/add-doc/add-doc.component';
import {TipDokumentaService} from './service/tip-dokumenta.service';
import { AddUserComponent } from './page/users/add-user/add-user.component';
import { EditUserComponent } from './page/users/edit-user/edit-user.component';
import {ChangePasswordComponent} from './page/users/change-password/change-password.component';
import { PredmetiComponent } from './page/predmeti/predmeti.component';
import {PredmetService} from './service/predmet.service';
import { AddEditPredmetComponent } from './page/predmeti/add-edit-predmet/add-edit-predmet.component';
import { PredmetComponent } from './page/predmeti/predmet/predmet.component';
import { AddEditAktivnostComponent } from './page/predmeti/add-edit-aktivnost/add-edit-aktivnost.component';
import {AktivnostService} from './service/aktivnost.service';
import {NastavnikService} from './service/nastavnik.service';
import {UcenikService} from './service/ucenik.service';
import { AddUcenikNastavnikComponent } from './page/predmeti/add-ucenik-nastavnik/add-ucenik-nastavnik.component';
import {UplataService} from './service/uplata.service';
import { AddUplataComponent } from './page/predmeti/add-uplata/add-uplata.component';
import {FileService} from './service/file.service';
import { DialogDocumentComponent } from './page/users/dialog-document/dialog-document.component';
import {MessageService} from './service/message.service';
import { InboxComponent } from './page/inbox/inbox.component';
import { ChatComponent } from './page/inbox/chat/chat.component';
import { GroupChatComponent } from './page/group-chat/group-chat.component';
import {ChatService} from './service/chat.service';
import {TipAktivnostiService} from './service/tip-aktivnosti.service';
import {TokenInterceptor} from './interceptor/token-interceptor';
import { CodebookComponent } from './page/codebook/codebook.component';
import { CodebookStandardComponent } from './page/codebook/codebook-standard/codebook-standard.component';
import { CodebookStandardAddComponent } from './page/codebook/codebook-standard-add/codebook-standard-add.component';

enableProdMode();
@NgModule({
  declarations: [
    AppComponent, LoginComponent, HomeComponent, NavigationComponent,
    NotFoundComponent, UsersComponent, UserComponent, SearchPipe,
    AddDocComponent, AddUserComponent, EditUserComponent, ChangePasswordComponent, PredmetiComponent,
    AddEditPredmetComponent, PredmetComponent, AddEditAktivnostComponent, AddUcenikNastavnikComponent,
    AddUplataComponent,
    DialogDocumentComponent,
    InboxComponent,
    ChatComponent,
    GroupChatComponent,
    CodebookComponent,
    CodebookStandardComponent,
    CodebookStandardAddComponent
  ],
  imports: [
    AppRoutingModule, BrowserModule, HttpClientModule,
    FormsModule, BrowserAnimationsModule, MatFormFieldModule, MatChipsModule, MatInputModule,
    MatListModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule, MatToolbarModule,
    MatButtonModule, MatPaginatorModule, MatTableModule, MatDialogModule, MatTooltipModule,
    MatTabsModule, MatMenuModule, MatSelectModule, MatSortModule, MatExpansionModule
  ],
  exports: [
    FormsModule,
    MatFormFieldModule, MatInputModule, MatListModule, MatIconModule, MatProgressSpinnerModule,
    MatSnackBarModule, MatToolbarModule, MatButtonModule, MatPaginatorModule, MatTableModule,
    MatDialogModule, MatTooltipModule, MatTabsModule, MatChipsModule, MatMenuModule, MatSelectModule,
    MatExpansionModule
  ],
  entryComponents: [AddDocComponent, AddUserComponent, EditUserComponent, ChangePasswordComponent,
    AddEditPredmetComponent, AddEditAktivnostComponent, AddUcenikNastavnikComponent, AddUplataComponent,
    DialogDocumentComponent, CodebookStandardAddComponent],

  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    AuthService, UserService, ZvanjeService, DokumentService, TipDokumentaService, PredmetService, TipAktivnostiService,
    AktivnostService, NastavnikService, UcenikService, UplataService, FileService, MessageService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
