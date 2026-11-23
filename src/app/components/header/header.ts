import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = signal('Gestion des conférences');
  title1=signal('Conference App');
  tile2=signal('Bienvenue sur votre espace utilisateur');
}
