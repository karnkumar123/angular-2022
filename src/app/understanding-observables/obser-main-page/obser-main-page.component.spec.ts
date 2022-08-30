import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserMainPageComponent } from './obser-main-page.component';

describe('ObserMainPageComponent', () => {
  let component: ObserMainPageComponent;
  let fixture: ComponentFixture<ObserMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObserMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
