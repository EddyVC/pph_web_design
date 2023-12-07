/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EposComponent } from './epos.component';

describe('EposComponent', () => {
  let component: EposComponent;
  let fixture: ComponentFixture<EposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
