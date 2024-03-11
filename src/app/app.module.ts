import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LayoutModule } from "@angular/cdk/layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { DataTableComponent } from "./data-table/data-table.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { DataGridModule } from "./data-grid/data-grid.component.module";
import { PlayersComponent } from './FootView/players/players.component';
import { TeamsComponent } from './FootView/teams/teams.component';
import { CountriesComponent } from './FootView/countries/countries.component';
import { RouterModule } from '@angular/router';
import { LeaguesComponent } from "./FootView/leagues/leagues.component";
import { HomeComponent } from "./FootView/home/home.component";
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationInterceptor } from "./services/interceptor";

@NgModule({
  declarations: [AppComponent, LoginComponent, DataTableComponent, HeaderComponent, SidenavComponent, PlayersComponent, TeamsComponent, CountriesComponent, LeaguesComponent, HomeComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    DataGridModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true //Able to have many request
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
