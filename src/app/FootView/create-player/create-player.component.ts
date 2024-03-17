import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridApi, GridReadyEvent, ICellRendererParams, ValueGetterParams, ValueSetterParams, CellValueChangedEvent, IRowNode } from 'ag-grid-community';
import { CreatePlayerClass, CreatePlayerModel } from 'src/app/Models/createPlayer';
import { CreatePlayerService } from 'src/app/services/FootballData/createPlayer.services';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent {

  sideNavStatus: boolean = false;
  gridApi!: GridApi<CreatePlayerModel>;
  gridReadyParams!: GridReadyEvent;
  isDataChanged: boolean =false
  
  errorMessage!: string;
  isCellValueChanged: boolean = false;
  
  constructor(private http: HttpClient, private router: Router, private createPlayerService: CreatePlayerService ){
  }

  rowData: any[] = [];
  player = new CreatePlayerClass();
  @Input() data: any;
  public rowSelection: 'single' | 'multiple' = 'multiple';

  
  columnDefs: ColDef[] = [
    { headerName: 'Checkbox Cell', field: 'boolean', headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true,},
    { headerName: 'Photo', field: 'photo', cellRenderer: this.imageRenderer, 
    valueGetter: (params: ValueGetterParams) => { this.player.photo = params.data.photo;
    return params.data.photo},
    valueSetter: (params: ValueSetterParams) => {
      const newVal = params.newValue;
      const valueChanged = params.data.photo !== newVal;
      if (valueChanged) {
        params.data.photo = newVal;
      } else {
        this.player.photo = params.data.photo;
      }
      return valueChanged;
    },
    cellDataType: 'string',
  }, 

    { headerName: 'Name', field: 'name', 
    valueGetter: (params: ValueGetterParams) => { this.player.name = params.data.name;
      return params.data.name},    valueSetter: (params: ValueSetterParams) => {
      const newVal = params.newValue;
      const valueChanged = params.data.name !== newVal;
      if (valueChanged) {
        params.data.name = newVal;
        this.player.name = newVal;
      } else{
        this.player.name = params.data.name;
      }
      return valueChanged;
    },
    cellDataType: 'string',
  },

    { headerName: 'Age', field: 'age', 
    valueGetter: (params: ValueGetterParams) => { this.player.age = params.data.age;
      return params.data.age},    valueSetter: (params: ValueSetterParams) => {
      const newVal = params.newValue;
      const valueChanged = params.data.age !== newVal;
      if (valueChanged) {
        params.data.age = newVal;
        this.player.age = newVal;
      } else {
        this.player.age = params.data.age
      }
      return valueChanged;
    },
    cellDataType: 'number',
  },

    { headerName: 'Position', field: 'position', 
    valueGetter: (params: ValueGetterParams) => { this.player.position = params.data.position;
      return params.data.position},
    valueSetter: (params: ValueSetterParams) => {
      const newVal = params.newValue;
      const valueChanged = params.data.position !== newVal;
      if (valueChanged) {
        params.data.position = newVal;
        this.player.position = newVal;
      } else {
        this.player.position = params.data.position;
      }
      return valueChanged;
    },
    cellDataType: 'string',
  },

    { headerName: 'Number', field: 'number', 
    valueGetter: (params: ValueGetterParams) => { this.player.number = params.data.number;
      return params.data.number},    valueSetter: (params: ValueSetterParams) => {
      const newVal = params.newValue;
      const valueChanged = params.data.number !== newVal;
      if (valueChanged) {
        params.data.number = newVal;
        this.player.number = newVal;
      } else {
        this.player.number = params.data.number;
      }
      return valueChanged;
    },
    cellDataType: 'number',
  },
  ];

  modifiedPlayerIds = new Set<string>();

  defaultColDef: ColDef = {
      filter: true,
      floatingFilter: true,
      editable: true,
      flex: 1,
    }

  ngOnInit() {
    this.createPlayerService.GetAllPlayerFromApi().subscribe(data =>{
      this.rowData = data
    })
  }

  addPlayer() {
    this.router.navigate(['/AddPlayer'])
  }

  OnDataChanged( data: any) {
    console.log(data)
    this.player.id = data.id
    }
  
  updatePlayer(event: CreatePlayerClass) {
    this.OnDataChanged(event);
    console.log(this.player, "playerData");
  
    // Trouver le joueur à mettre à jour dans rowData
    const playerToUpdate = this.rowData.find(data => data.id === event.id);
  
    // Vérifier si le joueur à mettre à jour existe
    if (playerToUpdate) {
      // Mettre à jour les propriétés du joueur
      playerToUpdate.age = event.age;
      playerToUpdate.name = event.name;
      playerToUpdate.number = event.number;
      playerToUpdate.photo = event.photo;
  
      // Appeler le service pour éditer le joueur
      this.createPlayerService.EditPlayer(playerToUpdate).subscribe({
        next: (response) => {
          if (response) {
            console.log("Success Saved !");
            this.errorMessage = "Save success !";
          }
        },
        error: (error) => {
          if (error) {
            console.log("Invalid Saved !" + error);
            this.errorMessage = "Failed to save !";
          }
        }
      });
    } else {
      console.log("Joueur non trouvé !");
    }
  }


  //   deleteSelectedRows(event: CreatePlayerClass) {
  //     debugger
  //     if(this.player.id != null){
  //       this.createPlayerService.DeletePlayer(this.player.id).subscribe({
  //         next: (response) =>{
  //           console.log("Success Delete");
  //           this.errorMessage = "Success delete"
  //         }, error: (error) =>{
  //           console.log("Invalid Saved !" + error);
  //           this.errorMessage = "Failed to save !";
  //         }
  //       })
  //     }
  //   this.gridApi.refreshCells();
  // }
  

  imageRenderer(params: ICellRendererParams) {
    return '<img src="' + params.value + '" style="width:60px">';
  }

  passGridReadyParams(params: GridReadyEvent) {
    this.gridReadyParams = params;
  }

  onGridDataChange(event: any[]) {
    // Gérer les données modifiées du composant de grille
    this.data = event;
  }
}