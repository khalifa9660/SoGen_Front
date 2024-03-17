import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { Coachs } from 'src/app/Models/player';
import { HistoryTeamMembersService } from 'src/app/services/FootballData/historyTeamMembersApi.service';

@Component({
  selector: 'app-history-team-members',
  templateUrl: './history-team-members.component.html',
  styleUrls: ['./history-team-members.component.scss']
})
export class HistoryTeamMembersComponent implements OnInit {

  sideNavStatus: boolean = false;
  constructor(private http: HttpClient, private router: Router, private historyTeamMembers: HistoryTeamMembersService){}

  seasons: number[] = Array.from({length: 2022 - 2009 + 1}, (_, index) => index + 2009);
  leagues: number[] = Array.from({length: 98 - 1 + 1}, (_, index) => index + 1);
  selectedLeagueId!: number;
  selectedSeason!: number;
  gridReadyParams!: GridReadyEvent;

  rowData: any[] = [];
  
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'combinedName' },
    { headerName: 'Number', field: 'number' },
  ];

  defaultColDef: ColDef = {
    filter: true,
    floatingFilter: true,
  }

  ngOnInit() {
    this.selectedSeason = this.seasons[12];
    this.selectedLeagueId = this.leagues[1]
    this.getPlayers(this.selectedSeason, this.selectedLeagueId);
  }

  onSeasonSelected(season: number) {
    this.selectedSeason = season
    this.selectedLeagueId
    this.getPlayers(this.selectedSeason, this.selectedLeagueId)
  }

  onLeagueSelected(league: number) {
    this.selectedSeason
    this.selectedLeagueId = league;
    this.getPlayers(this.selectedSeason, this.selectedLeagueId)
  }

  getPlayers(season: number, league: number) {
      this.historyTeamMembers.GetHistoryTeamMembersFromApi(season, league).subscribe(data => {
        const coachs: Coachs[] = data.coachs;

        this.rowData = data.players;
        this.rowData.push(...coachs);

        this.rowData.forEach(row => {
          if (row.name == undefined) {
            row.combinedName = `${row.player}`;
          } else {
            if(row.players == undefined){
              row.combinedName = `${row.name}`
            }
          }

        });
    
      });
    
  }


  passGridReadyParams(params: GridReadyEvent) {
    this.gridReadyParams = params;
  }
}
