import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarComponent } from './star.component';

describe('StarComponent', () => {
  let component: StarComponent;
  let fixture: ComponentFixture<StarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger an event with message', () => {
      let message;
      component.rating = 3;
      component.starClicked.subscribe(
                 response => {
                   message = response;
                 });

      component.starClick();
      expect(message).toContain(3);
  });

});
