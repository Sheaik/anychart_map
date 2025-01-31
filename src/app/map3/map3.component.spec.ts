import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map3Component } from './map3.component';

describe('Map3Component', () => {
  let component: Map3Component;
  let fixture: ComponentFixture<Map3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Map3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Map3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
