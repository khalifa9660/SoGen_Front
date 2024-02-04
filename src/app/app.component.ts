import { Component, OnInit, Renderer2, OnDestroy } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { DataTableItem } from "./data-table/data-table-datasource";
import { TeamService } from "./services/FootballData/teamApi.service";
import { FlagTeam } from "./Models/flag";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  template:'<app-data-table [tableData]="data" [displayedColumns]="columns"></app-data-table>'
})
export class AppComponent implements OnInit {
  sideNavStatus: boolean = false;
  flags: FlagTeam[] = [];
  data: DataTableItem[] = []
  columns: string[] = ['Drapeau']

  constructor(private renderer: Renderer2, private teamService:TeamService) {
  }

  title = "SoGeneration";

  ngOnInit() {
    this.teamService.getFlagCountries().subscribe(data=>{
      console.log(data,'data')
    })
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }
}
