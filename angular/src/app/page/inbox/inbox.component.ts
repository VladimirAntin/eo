import { Component } from '@angular/core';
import {MessageService} from '../../service/message.service';
import {FileService} from '../../service/file.service';
import {UserService} from '../../service/user.service';
import {UserApi} from '../../model/user-api';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {

  chat = []; users = []; filter = ''; loading = true;
  constructor(private messageService: MessageService, private fileService: FileService,
              private userService: UserService, private _auth: AuthService) {
    this.init();
    this.userService.getAll().subscribe(data => {
      this.users = data;
      this._auth.me().subscribe(me => this.users = this.users.filter(u => me.id !== u.id));
    });
  }

  init() {
    this.messageService.chat().subscribe(data => {
      this.chat = data;
      this.loading = false;
      this.chat.forEach((value) => {
        this.getAvatar(value);
        this.messageService.countUnreadUser(value.id).subscribe(m => value.unread = m);
      });
    });
  }

  getAvatar(user) {
    this.fileService.getBlobUser(user);
  }

}
