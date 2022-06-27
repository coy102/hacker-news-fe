import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerListComponent } from './hacker-list.component';

describe('HackerListComponent', () => {
  let component: HackerListComponent;
  let fixture: ComponentFixture<HackerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
