import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstToDoComponent } from './first-to-do.component';

describe('FirstToDoComponent', () => {
  let component: FirstToDoComponent;
  let fixture: ComponentFixture<FirstToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstToDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
