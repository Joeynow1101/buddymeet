import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BuddyBoxComponent } from './buddybox/buddybox.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

interface Profile {
  image: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, BuddyBoxComponent, ProfileCardComponent, SuggestionsComponent],
})
export class AppComponent {
  profiles: Profile[] = [
    { image: 'assets/img/Profile/1.jpg', text: 'Music lover looking to write the next verse' },
    { image: 'assets/img/Profile/2.jpg', text: 'Life is great, but maybe it can be better with you?' },
    { image: 'assets/img/Profile/3.jpg', text: 'World traveler looking for a lady who likes to explore' },
    { image: 'assets/img/Profile/4.jpg', text: 'Fun and adventurous guy: Take a chance and send me a message!' },
    { image: 'assets/img/Profile/5.jpg', text: 'Proud dog mom looking for a partner in crime' },
    { image: 'assets/img/Profile/6.jpg', text: 'Life is great, but maybe it can be better with you?' },
    { image: 'assets/img/Profile/7.jpg', text: 'Woman who loves the outdoors and hiking: Let\'s build a path together' },
    { image: 'assets/img/Profile/8.jpg', text: 'Accomplished woman who\'s more fun than a 200 foot water slide' },
  ];
}
