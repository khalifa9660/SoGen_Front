import { HttpClient, HttpBackend, HttpHeaders, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { PlayerModel } from "src/app/Models/player";
import { TeamModels } from "src/app/Models/team";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })

export class PlayerService {
    errorMessage!: string;
    errorHandl:any
    
    constructor(private http: HttpClient, private router: Router){}


    private GetHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Acess-Control-Allow-Origin': '*'
        });
    }

    GetPlayersFromApi(season:number, leagueId:number): Observable<PlayerModel[]> {
        let PlayersApi = `${environment.apiUrl}/FootBallApi/${season}/${leagueId}`;
        return this.http.get<PlayerModel[]>(PlayersApi,{headers: this.GetHeaders() })
    }

}