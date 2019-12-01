import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {InboxComponent} from './inbox.component';
import {ChatComponent} from './chat/chat.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [InboxComponent, ChatComponent],
  exports: [InboxComponent, ChatComponent]
})
export class InboxModule { }
