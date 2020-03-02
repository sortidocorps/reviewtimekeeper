import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDisplayComponent } from './subject-display.component';

describe('SubjectDisplayComponent', () => {
  let component: SubjectDisplayComponent;
  let fixture: ComponentFixture<SubjectDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
