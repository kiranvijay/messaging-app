import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { ChatWindowComponent } from '../components/chat-window/chat-window-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule , ChatWindowComponent ,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'messaging-app';

  username = '';
  loggedIn = false;

  login() {
    this.loggedIn = true;
  }
}

