import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './FootView/countries/countries.component';
import { TeamsComponent } from './FootView/teams/teams.component';
import { PlayersComponent } from './FootView/players/players.component';
import { HomeComponent } from './FootView/home/home.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard.component';

 const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'players', component: PlayersComponent, canActivate: [AuthGuard] },
  { path: 'teams', component: TeamsComponent, canActivate: [AuthGuard] },
  { path: 'countries', component: CountriesComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
