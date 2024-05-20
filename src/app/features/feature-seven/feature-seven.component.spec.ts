import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSevenComponent } from './feature-seven.component';

describe('FeatureSevenComponent', () => {
  let component: FeatureSevenComponent;
  let fixture: ComponentFixture<FeatureSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureSevenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
