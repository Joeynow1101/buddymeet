import { Component, Input, inject } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss'],
})
export class ProfileRowComponent {
  @Input() name = 'Jane';
  @Input() img = 'assets/img/Profile/1.jpg';
  @Input() gender = 'woman';
  @Input() canFollow = true;

  fs = inject(FriendService);
}
