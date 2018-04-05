import { Component, OnInit } from '@angular/core';
import {Message} from '../model/message';
import {UserApi} from '../model/user-api';
import {AuthService} from '../service/auth.service';
import {FileService} from '../service/file.service';
import {UserService} from '../service/user.service';
import {ChatService} from '../service/chat.service';
import {Chat} from '../model/chat';

@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.css']
})
export class GroupChatComponent implements OnInit {

  chat: Chat[]; me: UserApi; newMessage = new Chat();
  serverUrl = '/chatting/ws'; loading = true;
  stompClient = null; Stomp; sockjsClient;

  constructor(private chatService: ChatService,
                private userService: UserService, private authService: AuthService,
                private fileService: FileService) { }

  ngOnInit() {
    this.chatService.getAll().subscribe(data => {
      this.chat = data;
      this.loading = false;
      this.authService.me().subscribe(data => {
        this.me = data;
        this.fileService.getBlobUser(this.me);
        this.Stomp = require('stompjs');
        this.sockjsClient = require('sockjs-client');
        this.connect();
      });
    });
  }

  connect() {
    const socket = new this.sockjsClient(this.serverUrl);
    this.stompClient = this.Stomp.over(socket);
    this.stompClient.debug = null;
    const that = this;
    this.stompClient.connect({'Authorization':localStorage.getItem('token')}, () => {
      that.stompClient.subscribe('/chatting/topic/group', (chat) =>{
        that.chat.push(JSON.parse(chat.body));
      }, {'Authorization':localStorage.getItem('token')});
    });
  }

  clickEnter(event, message: Message) {
    if(event.keyCode == 13) {
      this.send(message);
    }
  }

  send(message: Message) {
    message.text = message.text.trim();
    if(message.text!==''){
      this.stompClient.send('/chatting/group',
        {'Authorization': localStorage.getItem('token')}, JSON.stringify(message));
      this.newMessage.text = '';
    }
  }

}
