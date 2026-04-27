import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
  imports: [MatIcon],
})
export class ProfileCardComponent {
  @Input() text: string = '';
  @Input() image: string = '';
}
