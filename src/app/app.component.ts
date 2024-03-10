import { Component, OnInit, Renderer2, OnDestroy } from "@angular/core";
import { TeamService } from "./services/FootballData/teamApi.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {


  constructor() {
  }

  title = "SoGeneration";

  ngOnInit() {
  }
}
