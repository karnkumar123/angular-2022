import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdfAssignmentComponent } from './rdf-assignment.component';

describe('RdfAssignmentComponent', () => {
  let component: RdfAssignmentComponent;
  let fixture: ComponentFixture<RdfAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdfAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdfAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
