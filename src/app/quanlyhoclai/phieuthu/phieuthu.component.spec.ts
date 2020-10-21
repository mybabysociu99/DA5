import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhieuthuComponent } from './phieuthu.component';

describe('PhieuthuComponent', () => {
  let component: PhieuthuComponent;
  let fixture: ComponentFixture<PhieuthuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhieuthuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhieuthuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
