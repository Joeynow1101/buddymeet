import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-buddybox',
  templateUrl: './buddybox.component.html',
  styleUrls: ['./buddybox.component.scss'],
})
export class BuddyBoxComponent implements OnInit {
  constructor(public fs: FriendService) {}

  ngOnInit(): void {}
}
