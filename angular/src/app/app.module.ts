import { BrowserModule } from '@angular/platform-browser';
import {enableProdMode, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {
  MatButtonModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatProgressSpinnerModule,
  MatSnackBarModule, MatToolbarModule
} from '@angular/material';
import {AuthService} from './service/auth-service.service';
import {HttpClientModule} from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';

enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    NotFoundComponent
  ],
  imports: [
    AppRoutingModule, HttpClientModule,
    BrowserModule, FormsModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule,
    MatListModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule, MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MatFormFieldModule, MatInputModule, MatListModule, MatIconModule, MatProgressSpinnerModule,
    MatSnackBarModule, MatToolbarModule, MatButtonModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
