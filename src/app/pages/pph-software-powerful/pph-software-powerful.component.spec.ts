import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PphSoftwarePowerfulPageComponent } from './pph-software-powerful.component';

describe('PphSoftwarePowerfulPageComponent', () => {
  let component: PphSoftwarePowerfulPageComponent;
  let fixture: ComponentFixture<PphSoftwarePowerfulPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PphSoftwarePowerfulPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PphSoftwarePowerfulPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
