import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../Models/register';
import { AuthenticationService } from '../services/accountManager/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerDto = new Register();
  constructor(private Router: Router, private authService: AuthenticationService){}

  register(registerDto: Register){
    this.authService.register(registerDto).subscribe();
    this.Router.navigate(['login'])
  }
}
