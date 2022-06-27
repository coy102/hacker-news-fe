import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerDetailComponent } from './hacker-detail.component';

describe('HackerDetailComponent', () => {
  let component: HackerDetailComponent;
  let fixture: ComponentFixture<HackerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackerDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
