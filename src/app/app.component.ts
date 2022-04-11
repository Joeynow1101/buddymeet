import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  profileTexts = [
    'Music lover looking to write the next verse',
    'Life is great, but maybe it can be better with you?',
    'World traveler looking for a lady who likes to explore',
    'Fun and adventurous guy: Take a chance and send me a message!',
    'Proud dog mom looking for a partner in crime',
    'Life is great, but maybe it can be better with you?',
    'Woman who loves the outdoors and hiking: Let’s build a path together',
    'Accomplished woman who’s more fun than a 200 foot water slide',
  ];
  profileImg = [
    'assets/img/Profile/1.jpg',
    'assets/img/Profile/2.jpg',
    'assets/img/Profile/3.jpg',
    'assets/img/Profile/4.jpg',
    'assets/img/Profile/5.jpg',
    'assets/img/Profile/6.jpg',
    'assets/img/Profile/7.jpg',
    'assets/img/Profile/8.jpg',
  ];
}

