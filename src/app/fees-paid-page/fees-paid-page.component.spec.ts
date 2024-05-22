import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesPaidPageComponent } from './fees-paid-page.component';

describe('FeesPaidPageComponent', () => {
  let component: FeesPaidPageComponent;
  let fixture: ComponentFixture<FeesPaidPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeesPaidPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeesPaidPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
