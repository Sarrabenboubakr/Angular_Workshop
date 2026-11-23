import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  links =signal([
    { name: 'Accueil', url: '/' },
    { name: 'Profil', url: '/profil' },
    { name: 'Conférences', url: '/conferences' },
    { name: 'Amis', url: '/amis' },
    { name: 'Notifications', url: '/notifications' },
    { name: 'Admin', url: '/admin' }
  ])  ;
}
