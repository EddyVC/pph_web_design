import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePphServicePageComponent } from './choose-pph-service.component';

describe('ChoosePphServicePageComponent', () => {
  let component: ChoosePphServicePageComponent;
  let fixture: ComponentFixture<ChoosePphServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoosePphServicePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosePphServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
