import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncrypLib1Component } from './encryp-lib1.component';

describe('EncrypLib1Component', () => {
  let component: EncrypLib1Component;
  let fixture: ComponentFixture<EncrypLib1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncrypLib1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncrypLib1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
