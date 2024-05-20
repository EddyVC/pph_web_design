import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSixComponent } from './feature-six.component';

describe('FeatureSixComponent', () => {
  let component: FeatureSixComponent;
  let fixture: ComponentFixture<FeatureSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureSixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
