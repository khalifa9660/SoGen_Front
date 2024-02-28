import { Component, Input, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, ModuleRegistry, ICellRendererParams, GridApi, GridOptions  } from 'ag-grid-community'; // Column Definition Type Interface
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
    #agGrid
    (gridReady)="onGridReady($event)"
    class="ag-theme-quartz"
    style="height: 680px;"
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

  @Input() onGridReadyFn!: (params: GridReadyEvent) => void;
  @Input() rowData: any[] = [];
  @Input() colDefs: ColDef[] = [];

  @ViewChild('agGrid') agGrid!: AgGridAngular;
  private gridApi!: GridApi;

  onGridReady(params: GridReadyEvent) {
    if (this.onGridReadyFn) {
      this.onGridReadyFn(params);
    }
  }

  ngAfterViewInit(): void {
    this.gridApi = this.agGrid.api;
    this.autoSizeColumns();

  }

  autoSizeColumns() {
    if (this.gridApi) {
      this.gridApi.sizeColumnsToFit();
    }
  }
    // rowData: any[] = [];

    // colDefs: ColDef[] = [
    //   { headerName: 'Drapeau', field: 'flag', cellRenderer: this.imageRenderer },
    //   { headerName: 'Nom', field: 'name' },
    //   { headerName: 'Code', field: 'code' }
    // ]

    // imageRenderer(params: ICellRendererParams) {
    //   return '<img src="' + params.value + '" style="max-width:100%;max-height:100%;">';
    // }
}
