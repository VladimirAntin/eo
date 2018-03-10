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
  MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule
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

enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    NotFoundComponent,
    UsersComponent,
    UserComponent,
    SearchPipe
  ],
  imports: [
    AppRoutingModule, BrowserModule, HttpClientModule,
    FormsModule, BrowserAnimationsModule, MatFormFieldModule, MatChipsModule, MatInputModule,
    MatListModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule, MatToolbarModule,
    MatButtonModule, MatPaginatorModule, MatTableModule, MatDialogModule, MatTooltipModule,
    MatTabsModule
  ],
  exports: [
    FormsModule,
    MatFormFieldModule, MatInputModule, MatListModule, MatIconModule, MatProgressSpinnerModule,
    MatSnackBarModule, MatToolbarModule, MatButtonModule, MatPaginatorModule, MatTableModule,
    MatDialogModule, MatTooltipModule, MatTabsModule, MatChipsModule
  ],
  providers: [AuthService, UserService, ZvanjeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
