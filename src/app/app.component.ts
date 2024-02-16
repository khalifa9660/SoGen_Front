import { Component, OnInit, Renderer2, OnDestroy } from "@angular/core";
import { DataTableItem } from "./data-table/data-table-datasource";
import { TeamService } from "./services/FootballData/teamApi.service";
import { FlagTeam } from "./Models/Flag";
import { ColDef } from 'ag-grid-community';

interface CountryData {
  name: string;
  code: string;
  flag: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  // template:'<app-data-table [tableData]="data" [displayedColumns]="columns"></app-data-table>'
})
export class AppComponent implements OnInit {
  sideNavStatus: boolean = false;
  data: DataTableItem[] = [];
  columnDefs: ColDef[] = [];
  rowData: any[] = [];


  constructor(private renderer: Renderer2, private teamService:TeamService) {
  }

  title = "SoGeneration";

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
