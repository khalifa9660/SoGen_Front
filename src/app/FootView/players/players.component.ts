import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import { PlayerModel, TeamPlayerModel } from 'src/app/Models/player';
import { PlayersService } from 'src/app/services/FootballData/playersApi.service';

interface DataRow {
  team: TeamPlayerModel;
  players: PlayerModel[];
}


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit{
  sideNavStatus: boolean = false;
  constructor(private http: HttpClient, private router: Router, private playerService: PlayersService){}
  
  teamsList: number[] = Array.from({length: 98 - 1 + 1}, (_, index) => index + 1);
  selectedteamId!: number;
  gridReadyParams!: GridReadyEvent;


  rowData: any[] = [];

  defaultColDef: ColDef = {
    filter: true,
    floatingFilter: true,
  }
  
  columnDefs: ColDef[] = [
    { headerName: 'Photo', field: 'combinedImage', cellRenderer: this.imageRenderer },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Age', field: 'age' },
    { headerName: 'Position', field: 'position' },
  ];

  ngOnInit() {
    this.selectedteamId = this.teamsList[1]
    this.getPlayers(this.selectedteamId);
  }

  onTeamSelected(team: number) {
    console.log("Season selected:", team);
    this.selectedteamId = team
    this.getPlayers(this.selectedteamId)
  }

  getPlayers(teamId: number) {
      this.playerService.GetPlayersFromApi(teamId).subscribe(data => {
        this.rowData = data.players;
        this.rowData.push(data.team);
        const lastItem = this.rowData.pop();
      this.rowData.unshift(lastItem);
        this.rowData = data.players.map(player => ({
          ...player,
          combinedImage: player.photo ? `<img src="${player.photo}" width="40" >` : `<img src="${data.team.logo}" width="40" >`
        }));
      });
  }

  imageRenderer(params: ICellRendererParams) {
    return params.value;
  }


  passGridReadyParams(params: GridReadyEvent) {
    this.gridReadyParams = params;
  }

}