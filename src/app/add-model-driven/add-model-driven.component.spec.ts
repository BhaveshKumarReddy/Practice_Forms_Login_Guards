import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModelDrivenComponent } from './add-model-driven.component';

describe('AddModelDrivenComponent', () => {
  let component: AddModelDrivenComponent;
  let fixture: ComponentFixture<AddModelDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModelDrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModelDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
