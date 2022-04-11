import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss'],
})
export class SuggestionsComponent implements OnInit {
  names = [
    'Noah',
    'Liam',
    'Jacob',
    'Olivia',
    'Alexander',
    'Sophia',
    'Isabella',
  ];
  img = [
    'assets/img/Profile/2.jpg',
    'assets/img/Profile/3.jpg',
    'assets/img/Profile/4.jpg',
    'assets/img/Profile/5.jpg',
    'assets/img/Profile/6.jpg',
    'assets/img/Profile/7.jpg',
    'assets/img/Profile/8.jpg',
  ];
  gender = ['man', 'man', 'man', 'woman', 'man', 'woman', 'woman'];

  constructor() { }

  ngOnInit(): void { }
}
