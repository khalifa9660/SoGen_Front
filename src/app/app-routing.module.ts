import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './FootData/countries/countries.component';
import { TeamsComponent } from './FootData/teams/teams.component';
import { PlayersComponent } from './FootData/players/players.component';
import { HomeComponent } from './FootData/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';

 const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'joueurs', component: PlayersComponent },
  { path: 'equipes', component: TeamsComponent },
  { path: 'nationalité', component: CountriesComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
