import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncrypLibComponent } from './encryp-lib.component';

describe('EncrypLibComponent', () => {
  let component: EncrypLibComponent;
  let fixture: ComponentFixture<EncrypLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncrypLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncrypLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
