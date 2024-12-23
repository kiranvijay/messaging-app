import { Component, Input, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-window',
    imports: [FormsModule ,CommonModule],

  templateUrl: './chat-window-component.html',
  

  styleUrls: ['./chat-window-component.css']
  
})
export class ChatWindowComponent implements OnInit {
  @Input() username!: string;
  recipient = '';
  message = '';
  messages: { sender: string; message: string }[] = [];

  constructor(private socketService: SocketService) {}

  ngOnInit() {
    this.socketService.initializeSocket(this.username);
    this.socketService.getMessages().subscribe((data) => {
      this.messages.push(data);
    });
  }

  sendMessage() {
    this.socketService.sendPrivateMessage({
      recipient: this.recipient,
      message: this.message,
      sender: this.username,
    });
    this.messages.push({ sender: this.username, message: this.message });
    this.message = '';
  }
}