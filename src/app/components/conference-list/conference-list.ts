import { Component, computed, signal } from '@angular/core';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';
@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, NgClass, UpperCasePipe, DatePipe],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  conferences = signal<Conference[]>([
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Les nouveautés d’Angular 21 : signals, contrôle de flux natif et SSR.',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur la réactivité avec les signals.',
      date: new Date(2027, 10, 30),
      place: 'Ariana',
      maxParticipants: 50,
      nbParticipants: 44,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Panorama des tendances du développement web.',
      date: new Date(2027, 10, 20),
      place: 'Sousse',
      maxParticipants: 80,
      nbParticipants: 80,
    },
    {
      id: 4,
      title: 'Ancienne conférence',
      description: 'Conférence déjà passée : ne doit pas être affichée.',
      date: new Date(2025, 0, 10),
      place: 'Sfax',
      maxParticipants: 40,
      nbParticipants: 12,
    },
  ]);

  searchTerm = signal('');
  selectedId = signal<number | null>(null);

  /** Conférences à venir uniquement */
  upcoming = computed(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.conferences().filter((c) => c.date >= today);
  });

  /** Conférences à venir filtrées par le titre saisi */
  filtered = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    return this.upcoming().filter((c) => c.title.toLowerCase().includes(term));
  });

  remaining(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  /** vert : places disponibles ; orange : moins de 10 places ; rouge : complet */
  buttonClass(c: Conference): string {
    const left = this.remaining(c);
    if (left <= 0) return 'btn-red';
    if (left < 10) return 'btn-orange';
    return 'btn-green';
  }

  register(id: number): void {
    this.conferences.update((list) =>
      list.map((c) =>
        c.id === id && c.nbParticipants < c.maxParticipants
          ? { ...c, nbParticipants: c.nbParticipants + 1 }
          : c,
      ),
    );
  }

  toggleDetails(id: number): void {
    this.selectedId.update((current) => (current === id ? null : id));
  }
}
