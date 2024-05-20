import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureFiveComponent } from './feature-five.component';

describe('FeatureFiveComponent', () => {
  let component: FeatureFiveComponent;
  let fixture: ComponentFixture<FeatureFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureFiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
