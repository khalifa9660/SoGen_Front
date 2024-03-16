import { HttpClient, HttpBackend, HttpHeaders, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { JwtAuth } from "src/app/Models/jwtAuth";
import { Coachs, CreatePlayerModel, NationalPlayerModel, PlayerModel } from "src/app/Models/player";
import { TeamModels } from "src/app/Models/team";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })

export class CreatePlayerService {
    errorMessage!: string;
    errorHandl:any
    
    constructor(private http: HttpClient, private router: Router){}


    private GetHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Acess-Control-Allow-Origin': '*'
        });
    }

    GetAllPlayerFromApi(): Observable<PlayerModel[]> {
        let PlayersApi = `${environment.apiUrl}/Player/GetAllPlayers/`;
        return this.http.get<PlayerModel[]>(PlayersApi,{headers: this.GetHeaders() })
    }

    AddPlayer(player: CreatePlayerModel): Observable<JwtAuth> {
        let AddPlayerApi = `${environment.apiUrl}/Player/AddPlayer/`;
        return this.http.post<JwtAuth>(AddPlayerApi, player, {headers: this.GetHeaders() })
    }

}