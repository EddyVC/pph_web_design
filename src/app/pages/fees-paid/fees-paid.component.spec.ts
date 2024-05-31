import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesPaidComponent } from './fees-paid.component';

describe('FeesPaidComponent', () => {
  let component: FeesPaidComponent;
  let fixture: ComponentFixture<FeesPaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeesPaidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeesPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
