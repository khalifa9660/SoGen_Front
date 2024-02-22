import { Component, OnInit, Renderer2, OnDestroy } from "@angular/core";
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
})
export class AppComponent implements OnInit {
  sideNavStatus: boolean = false;

  constructor(private renderer: Renderer2, private teamService:TeamService) {
  }

  title = "SoGeneration";

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
