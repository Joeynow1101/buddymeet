import { Component } from '@angular/core';
import { ProfileRowComponent } from '../profile-row/profile-row.component';
import { Friend } from '../friend.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss'],
  imports: [ProfileRowComponent],
})
export class SuggestionsComponent {
  suggestions: Friend[] = [
    { name: 'Noah',      image: 'assets/img/Profile/2.jpg', gender: 'man' },
    { name: 'Liam',      image: 'assets/img/Profile/3.jpg', gender: 'man' },
    { name: 'Jacob',     image: 'assets/img/Profile/4.jpg', gender: 'man' },
    { name: 'Olivia',    image: 'assets/img/Profile/5.jpg', gender: 'woman' },
    { name: 'Alexander', image: 'assets/img/Profile/6.jpg', gender: 'man' },
    { name: 'Sophia',    image: 'assets/img/Profile/7.jpg', gender: 'woman' },
    { name: 'Isabella',  image: 'assets/img/Profile/8.jpg', gender: 'woman' },
  ];
}
