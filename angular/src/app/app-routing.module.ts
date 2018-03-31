import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {PredmetiComponent} from './predmeti/predmeti.component';
import {PredmetComponent} from './predmeti/predmet/predmet.component';
import {InboxComponent} from './inbox/inbox.component';
import {ChatComponent} from './inbox/chat/chat.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/:id', component: UserComponent},
  { path: 'predmeti', component: PredmetiComponent},
  { path: 'predmeti/:id', component: PredmetComponent},
  { path: 'inbox', component: InboxComponent},
  { path: 'inbox/:id', component: ChatComponent},
  {path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
