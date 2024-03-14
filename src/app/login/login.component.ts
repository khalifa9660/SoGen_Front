import { Component, OnInit } from "@angular/core";
import { Login } from "../Models/login";
import { Register } from "../Models/register";
import { JwtAuth } from "../Models/jwtAuth";
import { AuthenticationService } from "../services/accountManager/authentication.service";
import { Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'Drivers.App'
  loginDto = new Login();
  jwtDto = new JwtAuth();
  submitted!: boolean;

  constructor(private authService: AuthenticationService, private router: Router, private FormBuilder: FormBuilder) { }

  loginForm!:FormGroup


  ngOnInit(): void {
    this.loginForm = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
    })
  }

  login(loginDto: Login){
    this.authService.login(loginDto).subscribe((jwtDto) =>{
      sessionStorage.setItem('jwtToken', jwtDto.token);
      console.log(sessionStorage.getItem('jwtToken'))
      this.router.navigate(['players']);
    });
  }

  get emailControl() {
    return this.loginForm.get('email');
  }
  
  get passwordControl() {
    return this.loginForm.get('password');
  }
  
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log("Form submitted successfully!");
      
      this.loginForm.reset();
    } else {
      console.log("Form submission failed. Please check the fields.");
      
      this.loginForm.markAllAsTouched();
    }
  }
  

}
