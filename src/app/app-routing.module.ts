import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './FootView/countries/countries.component';
import { TeamsComponent } from './FootView/teams/teams.component';
import { PlayersComponent } from './FootView/players/players.component';
import { HomeComponent } from './FootView/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

 const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'joueurs', component: PlayersComponent },
  { path: 'equipes', component: TeamsComponent },
  { path: 'pays', component: CountriesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
