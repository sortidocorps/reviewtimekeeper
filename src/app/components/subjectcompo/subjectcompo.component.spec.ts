import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectcompoComponent } from './subjectcompo.component';

describe('SubjectcompoComponent', () => {
  let component: SubjectcompoComponent;
  let fixture: ComponentFixture<SubjectcompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectcompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
