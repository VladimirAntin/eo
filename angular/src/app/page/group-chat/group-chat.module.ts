import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {GroupChatComponent} from './group-chat.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [GroupChatComponent],
  exports: [GroupChatComponent]
})
export class GroupChatModule { }
