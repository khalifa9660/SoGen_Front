import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import { TeamService } from 'src/app/services/FootballData/teamApi.service';
import { TeamModels } from 'src/app/Models/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {

  constructor(private teamService: TeamService, private http :HttpClient, private router: Router){}

  colDefs: ColDef[] = [
    { headerName: 'Logo', field: 'logo', cellRenderer: this.imageRenderer },
    { headerName: 'Nom', field: 'name' },
    { headerName: 'Date de création', field: 'founded' },
    { headerName: "Nom d'avenue", field: 'venue_name' },
    { headerName: 'Ville', field: 'venue_city' },
    { headerName: 'Adresse', field: 'venue_address' },
    { headerName: 'Pays', field: 'country' },
    { headerName: 'Capacité', field: 'venue_capacity' },
    { headerName: 'nation', field: 'is_national' },

  ];

  rowData: any[] = [];


  ngOnInit(){
    this.teamService.GetTeamsFromApi(2).subscribe(data=>{
      this.rowData = data;
    })
  }

  imageRenderer(params: ICellRendererParams) {
    return '<img src="' + params.value + '" style="max-width:100%;max-height:100%;">';
  }


  onGridReady(params: GridReadyEvent) {
    console.log('Grid is ready!', params);
  }
}
