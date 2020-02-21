import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimertestComponent } from './timertest.component';

describe('TimertestComponent', () => {
  let component: TimertestComponent;
  let fixture: ComponentFixture<TimertestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimertestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimertestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
