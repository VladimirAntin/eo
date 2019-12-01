import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {CodebookModule} from './codebook/codebook.module';
import {PredmetiModule} from './predmeti/predmeti.module';
import {UsersModule} from './users/users.module';
import {GroupChatModule} from './group-chat/group-chat.module';
import {HomeModule} from './home/home.module';
import {InboxModule} from './inbox/inbox.module';
import {LoginModule} from './login/login.module';

@NgModule({
  imports: [
    CommonModule, SharedModule, CodebookModule, PredmetiModule, UsersModule,
    GroupChatModule, HomeModule, InboxModule, LoginModule
  ]
})
export class PageModule { }
