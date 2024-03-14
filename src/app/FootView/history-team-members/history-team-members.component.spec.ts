import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTeamMembersComponent } from './history-team-members.component';

describe('HistoryTeamMembersComponent', () => {
  let component: HistoryTeamMembersComponent;
  let fixture: ComponentFixture<HistoryTeamMembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryTeamMembersComponent]
    });
    fixture = TestBed.createComponent(HistoryTeamMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
