import { Component, OnInit } from "@angular/core";
import { Login } from "../Models/login";
import { Register } from "../Models/register";
import { JwtAuth } from "../Models/jwtAuth";
import { AuthenticationService } from "../services/accountManager/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'Drivers.App'
  loginDto = new Login();
  jwtDto = new JwtAuth();

  constructor(private authService: AuthenticationService, private router: Router) { }


  ngOnInit(): void {
  }

  login(loginDto: Login){
    this.authService.login(loginDto).subscribe((jwtDto) =>{
      sessionStorage.setItem('jwtToken', jwtDto.token);
      console.log(sessionStorage.getItem('jwtToken'))
      this.router.navigate(['players']);
    });
  }
  

}
