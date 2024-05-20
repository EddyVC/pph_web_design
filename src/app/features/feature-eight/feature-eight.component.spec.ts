import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureEightComponent } from './feature-eight.component';

describe('FeatureEightComponent', () => {
  let component: FeatureEightComponent;
  let fixture: ComponentFixture<FeatureEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureEightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
