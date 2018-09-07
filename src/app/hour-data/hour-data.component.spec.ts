import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourDataComponent } from './hour-data.component';

describe('HourDataComponent', () => {
  let component: HourDataComponent;
  let fixture: ComponentFixture<HourDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
