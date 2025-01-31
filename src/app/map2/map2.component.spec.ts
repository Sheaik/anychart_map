import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map2Component } from './map2.component';

describe('Map2Component', () => {
  let component: Map2Component;
  let fixture: ComponentFixture<Map2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Map2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Map2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
