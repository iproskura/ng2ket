/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Services1Component } from './services1.component';

describe('Services1Component', () => {
  let component: Services1Component;
  let fixture: ComponentFixture<Services1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Services1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Services1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});