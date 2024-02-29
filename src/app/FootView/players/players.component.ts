import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { PlayerService } from 'src/app/services/FootballData/playerApi.service';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent {

  constructor(private http: HttpClient, private router: Router, private PlayerService: PlayerService){}

  colDefs: ColDef[] = [
    { headerName: 'Joueur', field: 'player' },
    { headerName: 'Numéro', field: 'number' }
  ];

  rowData: any[] = [];

  ngOnInit(){
    const season = 2019; // Remplacez par la saison désirée
    const leagueId = 2;
    this.PlayerService.GetPlayersFromApi(season, leagueId).subscribe(data =>{
      this.rowData = data
    })
  }

  onGridReady(params: GridReadyEvent) {
    console.log('Grid is ready!', params);
  }
}
