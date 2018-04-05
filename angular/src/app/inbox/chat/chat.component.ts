import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from '../../service/message.service';
import {Message} from '../../model/message';
import {UserService} from '../../service/user.service';
import {UserApi} from '../../model/user-api';
import {AuthService} from '../../service/auth.service';
import {FileService} from '../../service/file.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  id: number =0; chat: Message[] = []; user: UserApi = new UserApi(); me: UserApi; newMessage = new Message();
  serverUrl = '/chatting/ws'; loading = true;
  stompClient = null; Stomp; sockjsClient;
  constructor(private route: ActivatedRoute, private messageService: MessageService,
              private userService: UserService, private authService: AuthService,
              private fileService: FileService) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.messageService.chatUser(this.id).subscribe(data => {
      this.chat = data;
      this.loading = false;
      this.userService.get(this.id).subscribe(data => {
        this.user = data;
        this.fileService.getBlobUser(this.user);
      }, err => this.user = null);
      this.authService.me().subscribe(data => {
        this.me = data;
        this.fileService.getBlobUser(this.me);
        this.Stomp = require('stompjs');
        this.sockjsClient = require('sockjs-client');
        this.connect();
      }, err => this.user = null);
    });
  }

  clickEnter(event, message: Message) {
    if(event.keyCode == 13) {
      this.send(message);
    }
  }

  connect() {
    const socket = new this.sockjsClient(this.serverUrl);
    this.stompClient = this.Stomp.over(socket);
    this.stompClient.debug = null;
    const that = this;
    this.stompClient.connect({'Authorization':localStorage.getItem('token')}, () => {
      that.stompClient.subscribe(`/chatting/topic/${that.me.id}`, (message) =>{
        that.chat.push(JSON.parse(message.body));
      }, {'Authorization':localStorage.getItem('token')});
    });
  }

  send(message: Message) {
    message.text = message.text.trim();
    if(message.text!==''){
      this.stompClient.send(`/chatting/${this.user.id}`,
        {'Authorization': localStorage.getItem('token')}, JSON.stringify(message));
      this.newMessage.text = '';
    }
  }
}
