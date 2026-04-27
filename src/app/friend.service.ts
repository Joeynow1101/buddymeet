import { Injectable } from '@angular/core';

export interface Friend {
  name: string;
  image: string;
  gender: string;
}

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  friends: Friend[] = [];

  addFriend(name: string, image: string, gender: string) {
    this.friends.push({ name, image, gender });
  }
}
