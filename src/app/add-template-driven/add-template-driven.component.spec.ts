import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDTemplateDrivenComponent } from './add-template-driven.component';

describe('ADDTemplateDrivenComponent', () => {
  let component: ADDTemplateDrivenComponent;
  let fixture: ComponentFixture<ADDTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADDTemplateDrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADDTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
