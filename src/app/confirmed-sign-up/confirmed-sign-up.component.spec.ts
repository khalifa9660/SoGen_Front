import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedSignUpComponent } from './confirmed-sign-up.component';

describe('ConfirmedSignUpComponent', () => {
  let component: ConfirmedSignUpComponent;
  let fixture: ComponentFixture<ConfirmedSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmedSignUpComponent]
    });
    fixture = TestBed.createComponent(ConfirmedSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
