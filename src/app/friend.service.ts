import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  names: string[] = [];
  images: string[] = [];
  gender: string[] = [];

  constructor() {}

  addFriend(name: string, image: string, gender: string) {
    this.names.push(name);
    this.images.push(image);
    this.gender.push(gender);
  }
}
