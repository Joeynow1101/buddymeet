import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddyBoxComponent } from './buddybox.component';

describe('BuddyBoxComponent', () => {
  let component: BuddyBoxComponent;
  let fixture: ComponentFixture<BuddyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuddyBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuddyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
