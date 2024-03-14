import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent {

  sideNavStatus: boolean = false;
  constructor(private http: HttpClient, private router: Router ){}

  rowData: any[] = [];
  
  colDefs: ColDef[] = [
  ];

  ngOnInit() {
  }

  onGridReady(params: GridReadyEvent) {
    console.log('Grid is ready!', params);
  }
}
