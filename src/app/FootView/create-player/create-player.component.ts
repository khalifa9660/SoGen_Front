import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridApi, GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import { CreatePlayerModel } from 'src/app/Models/createPlayer';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent {

  sideNavStatus: boolean = false;
  private gridApi!: GridApi<CreatePlayerModel>;
  constructor(private http: HttpClient, private router: Router, ){}

  rowData: any[] = [];
  
  columnDefs: ColDef[] = [
    { headerName: 'Photo', field: 'Photo', cellRenderer: this.imageRenderer, rowDrag: true },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Age', field: 'age' },
    { headerName: 'Position', field: 'position' },
    { headerName: 'Number', field: 'number' }
  ];

  defaultColDef: ColDef = {
      filter: true,
      floatingFilter: true,
      editable: true,
      checkboxSelection: true,
    }

  ngOnInit() {
  }

  addEmptyRow() {
    this.rowData.push({});
    this.gridApi.refreshCells();
  }

  // deleteSelectedRows() {
  //   // Obtenez les lignes sélectionnées à l'aide du service de sélection
  //   const selectedRows = this.selection.getSelectedRows(); // Assurez-vous d'implémenter ce service ou d'utiliser la méthode appropriée pour obtenir les lignes sélectionnées

  //   // Supprimez les lignes sélectionnées de votre source de données
  //   selectedRows.forEach(row => {
  //     // Supprimez la ligne de votre source de données
  //     // Par exemple, si vous utilisez un tableau rowData pour stocker vos données :
  //     const index = this.rowData.indexOf(row);
  //     if (index !== -1) {
  //       this.rowData.splice(index, 1);
  //     }
  //   });

  //   // Rafraîchissez la vue de la grille pour refléter les changements
  //   this.gridApi.refreshCells();
  // }

  imageRenderer(params: ICellRendererParams) {
    return '<img src="' + params.value + '" style="max-width:100%;max-height:100%;">';
  }

  onGridReady(params: GridReadyEvent) {
    console.log('Grid is ready!', params);
  }
}
