import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './FootView/countries/countries.component';
import { PlayersComponent } from './FootView/players/players.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard.component';
import { ConfirmedSignUpComponent } from './confirmed-sign-up/confirmed-sign-up.component';
import { HistoryTeamMembersComponent } from './FootView/history-team-members/history-team-members.component';
import { CreatePlayerComponent } from './FootView/create-player/create-player.component';
import { AddPlayerComponent } from './FootView/add-player/add-player.component'; 
import { LeaguesComponent } from './FootView/leagues/leagues.component';

 const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'registerConfirmation', component: ConfirmedSignUpComponent },
  { path: 'history of teams', component: HistoryTeamMembersComponent, canActivate: [AuthGuard] },
  { path: 'players', component: PlayersComponent, canActivate: [AuthGuard] },
  { path: 'leagues', component: LeaguesComponent, canActivate: [AuthGuard] },
  { path: 'countries', component: CountriesComponent, canActivate: [AuthGuard] },
  { path: 'dream team', component: CreatePlayerComponent, canActivate: [AuthGuard] },
  { path: 'AddPlayer', component: AddPlayerComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
