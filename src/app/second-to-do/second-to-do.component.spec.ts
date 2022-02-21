import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondToDoComponent } from './second-to-do.component';

describe('SecondToDoComponent', () => {
  let component: SecondToDoComponent;
  let fixture: ComponentFixture<SecondToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondToDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
