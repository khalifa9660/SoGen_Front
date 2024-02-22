import { Component } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent {
  colDefs: ColDef[] = [
    { headerName: 'Flag', field: 'flag' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Code', field: 'code' }
  ];

  rowData: any[] = [
    { flag: 'https://example.com/image1.png', name: 'Country 1', code: 'C1' },
    { flag: 'https://example.com/image2.png', name: 'Country 2', code: 'C2' }
  ];

  onGridReady(params: GridReadyEvent) {
    console.log('Grid is ready!', params);
  }
}
