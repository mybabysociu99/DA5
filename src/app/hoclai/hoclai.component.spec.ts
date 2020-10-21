import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoclaiComponent } from './hoclai.component';

describe('HoclaiComponent', () => {
  let component: HoclaiComponent;
  let fixture: ComponentFixture<HoclaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoclaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoclaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
