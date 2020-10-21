import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlyhoclaiComponent } from './quanlyhoclai.component';

describe('QuanlyhoclaiComponent', () => {
  let component: QuanlyhoclaiComponent;
  let fixture: ComponentFixture<QuanlyhoclaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlyhoclaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlyhoclaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
