import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesAvaliablesComponent } from './sites-avaliables.component';

describe('SitesAvaliablesComponent', () => {
  let component: SitesAvaliablesComponent;
  let fixture: ComponentFixture<SitesAvaliablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SitesAvaliablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SitesAvaliablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
