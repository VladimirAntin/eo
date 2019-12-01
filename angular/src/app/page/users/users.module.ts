import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {UsersComponent} from './users.component';
import {UserComponent} from './user/user.component';
import {AddDocComponent} from './user/add-doc/add-doc.component';
import {AddUserComponent} from './add-user/add-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {DialogDocumentComponent} from './dialog-document/dialog-document.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],

  declarations: [UsersComponent, UserComponent, AddDocComponent,
    AddUserComponent, EditUserComponent, ChangePasswordComponent, DialogDocumentComponent,
  ],

  exports: [UsersComponent, UserComponent, AddDocComponent,
    AddUserComponent, EditUserComponent, ChangePasswordComponent, DialogDocumentComponent,
  ],

  entryComponents: [AddDocComponent, AddUserComponent, EditUserComponent, ChangePasswordComponent, DialogDocumentComponent]
})
export class UsersModule { }
