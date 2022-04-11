import { Component, Input, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss'],
})
export class ProfileRowComponent implements OnInit {
  @Input() name = 'Jane';
  @Input() img = 'assets/img/Profile/1.jpg';
  @Input() gender = 'woman';
  @Input() canFollow = true;

  constructor(public fs: FriendService) {}

  ngOnInit(): void {}
}
