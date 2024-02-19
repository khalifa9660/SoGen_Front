import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [AgGridAngular], // Add AG Grid component
  styleUrls: ['./data-grid.component.scss'],
  template: `<!-- The AG Grid component -->
  <ag-grid-angular
    class="ag-theme-quartz"
    style="height: 500px;"
    [rowData]="rowData"
    [columnDefs]="colDefs">
  </ag-grid-angular>`
})

export class DataGridModule {
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ];
}
