import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesAvaliablesPageComponent } from './sites-avaliables-page.component';

describe('SitesAvaliablesPageComponent', () => {
  let component: SitesAvaliablesPageComponent;
  let fixture: ComponentFixture<SitesAvaliablesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SitesAvaliablesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SitesAvaliablesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
