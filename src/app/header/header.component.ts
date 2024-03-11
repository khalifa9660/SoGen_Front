import { Component, EventEmitter, Output } from "@angular/core";
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

  SideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
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
