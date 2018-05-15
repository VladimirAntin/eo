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

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/:id', component: UserComponent},
  { path: 'predmeti', component: PredmetiComponent},
  { path: 'predmeti/:id', component: PredmetComponent},
  { path: 'inbox', component: InboxComponent},
  { path: 'inbox/:id', component: ChatComponent},
  { path: 'group_chat', component: GroupChatComponent},

  { path: 'codebook', component: CodebookComponent},

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
