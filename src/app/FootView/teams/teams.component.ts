import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridOptions, GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import { TeamService } from 'src/app/services/FootballData/teamApi.service';
import { TeamModels } from 'src/app/Models/team';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  sideNavStatus: boolean = false;
  gridReadyParams!: GridReadyEvent;


  constructor(private teamService: TeamService, private http :HttpClient, private router: Router){}

  rowData: any[] = [];

  columnDefs: ColDef[] = [
    { headerName: 'Logo', field: 'logo', cellRenderer: this.imageRenderer},
    { headerName: 'Nom', field: 'name' },
    { headerName: 'Date de création', field: 'founded' },
    { headerName: "Nom d'avenue", field: 'venue_name' },
    { headerName: 'Capacité', field: 'venue_capacity' },
  ];

  defaultColDef: ColDef = {
    filter: true,
    floatingFilter: true,
  }

 
 @Input() leagueList: number[] = Array.from({length: 98 - 1 + 1}, (_, index) => index + 1);
 @Input() selectedLeague!: number;


  ngOnInit(){
    this.selectedLeague = this.leagueList[0];
    this.getTeams(this.selectedLeague);
  }

  onLeagueSelected(league: number) {
    this.getTeams(league);
  }
  

  getTeams(league: number){
    this.teamService.GetTeamsFromApi(league).subscribe(data=>{
      this.rowData = data;
    })
  }

  imageRenderer(params: ICellRendererParams) {
    return '<img src="' + params.value + '" style="width:38px">';
  }


  passGridReadyParams(params: GridReadyEvent) {
    this.gridReadyParams = params;
  }
}
