import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { FriendsList } from './components/friends-list/friends-list';
import { Notifications } from './components/notifications/notifications';
import { UserProfile } from './components/user-profile/user-profile';
import { Footer } from './components/footer/footer'; 
import { ConferenceList } from './components/conference-list/conference-list';

@Component({
  selector: 'app-root',
  imports: [Header, Navbar, FriendsList, Notifications, UserProfile, Footer,ConferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
scrollToTop() {
throw new Error('Method not implemented.');
}
  protected readonly title = signal('mon-projet');
}