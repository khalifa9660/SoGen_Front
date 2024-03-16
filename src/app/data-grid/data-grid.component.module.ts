import { Component, Input, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, ModuleRegistry, ICellRendererParams, GridApi, GridOptions, IsRowSelectable, IRowNode  } from 'ag-grid-community'; // Column Definition Type Interface
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FlagTeam } from '../Models/Flag';
import { TeamService } from '../services/FootballData/teamApi.service';
import { PlayerModel } from '../Models/player';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [AgGridAngular, HttpClientModule], // Add AG Grid component
  styleUrls: ['./data-grid.component.scss'],
  template: `<!-- The AG Grid component -->
  <ag-grid-angular
    #agGrid
    (gridReady)="onGridReady($event)"
    class="ag-theme-quartz"
    [rowSelection]="rowSelection"
    [suppressRowClickSelection]="true"
    [isRowSelectable]="isRowSelectable"
    style="height: 680px;"
    [class]="themeClass"
    [rowData]="rowData"
    [pagination]="true"
    [defaultColDef]="defaultColDef"
    [columnDefs]="columnDefs">
  </ag-grid-angular>`
})

export class DataGridModule {
  constructor(private http: HttpClient, private router: Router, private teamService:TeamService ){}
  themeClass =
    "ag-theme-quartz";

  @Input() onGridReadyFn!: (params: GridReadyEvent) => void;
  @Input() rowData: any[] = [];
  @Input() columnDefs: ColDef[] = [];
  @Input() defaultColDef: ColDef ={};

  @ViewChild('agGrid') agGrid!: AgGridAngular;
  private gridApi!: GridApi;
  public rowSelection: 'single' | 'multiple' = 'multiple';

  public isRowSelectable: IsRowSelectable = (
    params: IRowNode<PlayerModel>
  ) => {
    return !!params.data && params.data.age == 10;
  };

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
}
