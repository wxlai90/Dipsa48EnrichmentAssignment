import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnegameComponent } from './onegame.component';

describe('OnegameComponent', () => {
  let component: OnegameComponent;
  let fixture: ComponentFixture<OnegameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnegameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnegameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
