import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buoi2Component } from './buoi2.component';

describe('Buoi2Component', () => {
  let component: Buoi2Component;
  let fixture: ComponentFixture<Buoi2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buoi2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buoi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
