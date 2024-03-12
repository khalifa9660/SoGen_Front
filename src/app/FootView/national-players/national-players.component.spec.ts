import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalPlayersComponent } from './national-players.component';

describe('NationalPlayersComponent', () => {
  let component: NationalPlayersComponent;
  let fixture: ComponentFixture<NationalPlayersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NationalPlayersComponent]
    });
    fixture = TestBed.createComponent(NationalPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
