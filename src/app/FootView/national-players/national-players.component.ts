import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { NationalPlayersService } from 'src/app/services/FootballData/nationalPlayerApi.service';

@Component({
  selector: 'app-national-players',
  templateUrl: './national-players.component.html',
  styleUrls: ['./national-players.component.scss']
})
export class NationalPlayersComponent implements OnInit{
  sideNavStatus: boolean = false;
  constructor(private http: HttpClient, private router: Router, private nationalPlayers: NationalPlayersService){}

  seasons: number[] = Array.from({length: 2022 - 2008 + 1}, (_, index) => index + 2008);
  leagues: number[] = Array.from({length: 98 - 1 + 1}, (_, index) => index + 1);
  selectedLeagueId!: number;
  selectedSeason!: number;

  rowData: any[] = [];
  
  colDefs: ColDef[] = [
    { headerName: 'Joueurs', field: 'player' },
    { headerName: 'Numéro', field: 'number' }
  ];

  ngOnInit() {
    this.selectedSeason = this.seasons[12];
    this.selectedLeagueId = this.leagues[1]
    this.getPlayers(this.selectedSeason, this.selectedLeagueId);
  }

  onSeasonSelected(season: number) {
    debugger
    console.log("Season selected:", season);
    this.selectedSeason = season
    this.selectedLeagueId
    this.getPlayers(this.selectedSeason, this.selectedLeagueId)
  }

  onLeagueSelected(league: number) {
    debugger
    console.log("League selected:", league);
    this.selectedSeason
    this.selectedLeagueId = league;
    this.getPlayers(this.selectedSeason, this.selectedLeagueId)
  }

  getPlayers(season: number, league: number) {
      this.nationalPlayers.GetNationalPlayersFromApi(season, league).subscribe(data => {
        this.rowData = data;
      });
    
  }


  onGridReady(params: GridReadyEvent) {
    console.log('Grid is ready!', params);
  }

}
