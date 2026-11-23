import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-friends-list',
  imports: [FormsModule],
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css',
})
export class FriendsList {
  friends =signal([
    { name: 'Alice', status: 'En ligne' },
    { name: 'Bob', status: 'Hors ligne' },
    { name: 'Charlie', status: 'En ligne' },
  ])  ;
}
