import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SocketService {
  private socket!: Socket;
  

  initializeSocket(username: string) {
    this.socket = io('http://localhost:5001');
    this.socket.emit('register', username);
  } 

  sendPrivateMessage({ recipient, message, sender }: { recipient: string; message: string; sender: string }) {
    console.log('private_messages_ui', recipient , message , sender);
    this.socket.emit('private_message', { recipient, message, sender });
  }

  getMessages(): Observable<{ sender: string; message: string }> {
    return new Observable((observer) => {
      this.socket.on('private_message', (data) => {
        observer.next(data);
      });
    });
  }
}