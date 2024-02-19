import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, ModuleRegistry } from 'ag-grid-community'; // Column Definition Type Interface
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FlagTeam } from '../Models/Flag';
import { TeamService } from '../services/FootballData/teamApi.service';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [AgGridAngular], // Add AG Grid component
  styleUrls: ['./data-grid.component.scss'],
  template: `<!-- The AG Grid component -->
  <ag-grid-angular
    (gridReady)="onGridReady($event)"
    class="ag-theme-quartz"
    style="height: 500px;"
    [class]="themeClass"
    [rowData]="rowData"
    [pagination]="true"
    [defaultColDef]="defaultColDef"
    [columnDefs]="colDefs">
  </ag-grid-angular>`
})

export class DataGridModule {
  constructor(private http: HttpClient, private router: Router, private teamService:TeamService ){}
  themeClass =
    "ag-theme-quartz";

    defaultColDef: ColDef = {
      filter: true
    }

    onGridReady(params: GridReadyEvent) {
      this.teamService.getFlagCountries().subscribe(response =>{
          console.log(response);
          // Assurez-vous que la réponse contient la propriété response qui est un tableau
          if (response && Array.isArray(response.response)) {
              this.rowData = response.response; // Assigner directement la propriété response à rowData
          } else {
              console.error("Impossible de récupérer les données à partir de la réponse.");
          }
      }, error => {
          console.error("Une erreur s'est produite lors de la récupération des données :", error);
      });
  }

    rowData: any[] = [];

    colDefs: ColDef[] = [
        { field: "flag" },
        { field: "name" },
        { field: "code" },
      ]
}
