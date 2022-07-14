import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCollapsibleComponent } from './comment-collapsible.component';

describe('CommentCollapsibleComponent', () => {
  let component: CommentCollapsibleComponent;
  let fixture: ComponentFixture<CommentCollapsibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentCollapsibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentCollapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
