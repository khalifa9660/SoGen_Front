import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import { CountriesService } from 'src/app/services/FootballData/countriesApi.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})

export class CountriesComponent {

  constructor(private http: HttpClient, private router: Router, private CountriesServcie: CountriesService){}

  colDefs: ColDef[] = [
    { headerName: 'Drapeau', field: 'flag', cellRenderer: this.imageRenderer },
    { headerName: 'Nom', field: 'name' },
    { headerName: 'Code', field: 'code' }
  ];

  rowData: any[] = [];

  ngOnInit(){
    debugger
    this.CountriesServcie.GetCountriesFromApi().subscribe(response =>{
      this.rowData = response;
    })
  }

  imageRenderer(params: ICellRendererParams) {
      return '<img src="' + params.value + '" style="max-width:100%;max-height:100%;">';
    }

  onGridReady(params: GridReadyEvent) {
    console.log('Grid is ready!', params);
  }

}
