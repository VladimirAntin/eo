import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './page/login/login.component';
import {HomeComponent} from './page/home/home.component';
import {NotFoundComponent} from './page/not-found/not-found.component';
import {UsersComponent} from './page/users/users.component';
import {UserComponent} from './page/users/user/user.component';
import {PredmetiComponent} from './page/predmeti/predmeti.component';
import {PredmetComponent} from './page/predmeti/predmet/predmet.component';
import {InboxComponent} from './page/inbox/inbox.component';
import {ChatComponent} from './page/inbox/chat/chat.component';
import {GroupChatComponent} from './page/group-chat/group-chat.component';
import {CodebookComponent} from './page/codebook/codebook.component';
import {AuthGuard} from './auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  { path: 'users/:id', component: UserComponent, canActivate: [AuthGuard]},
  { path: 'predmeti', component: PredmetiComponent, canActivate: [AuthGuard]},
  { path: 'predmeti/:id', component: PredmetComponent, canActivate: [AuthGuard]},
  { path: 'inbox', component: InboxComponent, canActivate: [AuthGuard]},
  { path: 'inbox/:id', component: ChatComponent, canActivate: [AuthGuard]},
  { path: 'group_chat', component: GroupChatComponent, canActivate: [AuthGuard]},

  { path: 'codebook', component: CodebookComponent, canActivate: [AuthGuard]},

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
