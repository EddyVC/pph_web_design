import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureFourComponent } from './feature-four.component';

describe('FeatureFourComponent', () => {
  let component: FeatureFourComponent;
  let fixture: ComponentFixture<FeatureFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureFourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
