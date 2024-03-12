import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { AuthActionService } from "../services/AuthService/authService";
import { TokenStorageService } from "../services/token/token.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  
  constructor(private router: Router, private authActionService: AuthActionService, private tokenService: TokenStorageService ) {}

  @Input() selectedSeasonId!: number;
  @Input() seasonList: number[] = [];
  @Input() selectedLeagueId!: number;
  @Input() leagueList: number[] = [];
  @Input() selectedTeamId!: number;
  @Input() teamsList: number[] = [];

  @Output() seasonSelected = new EventEmitter<number>();
  @Output() leagueSelected = new EventEmitter<number>();
  @Output() teamSelected = new EventEmitter<number>();

  


  SideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
  
  selectedSeason(event: any) {
    const season = event.target.value;
    this.seasonSelected.emit(season); // Émet l'événement avec la saison sélectionnée
  }

  selectedLeague(event: any){
    const league = event.target.value;
    this.leagueSelected.emit(league);
  }
  
  selectedTeam(event: any){
    const team = event.target.value;
    this.teamSelected.emit(team);
  }

  logout(){
    const confirmation = confirm('Do you want to log out ?')

    if(confirmation){
      this.tokenService.deleteToken();
      this.router.navigate(['login']);
    }
    this.authActionService.logout();
    
  }
}
