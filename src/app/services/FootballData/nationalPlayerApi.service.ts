import { HttpClient, HttpBackend, HttpHeaders, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { NationalPlayerModel, PlayerModel } from "src/app/Models/player";
import { TeamModels } from "src/app/Models/team";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })

export class NationalPlayersService {
    errorMessage!: string;
    errorHandl:any
    
    constructor(private http: HttpClient, private router: Router){}


    private GetHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Acess-Control-Allow-Origin': '*'
        });
    }

    GetNationalPlayersFromApi(season:number, leagueId:number): Observable<NationalPlayerModel[]> {
        let PlayersApi = `${environment.apiUrl}/FootBallApi/NationalPlayers/${season}/${leagueId}`;
        return this.http.get<NationalPlayerModel[]>(PlayersApi,{headers: this.GetHeaders() })
    }

}