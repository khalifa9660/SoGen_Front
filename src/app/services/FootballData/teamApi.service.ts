import { HttpClient, HttpBackend, HttpHeaders, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { TeamModels } from "src/app/Models/team";

@Injectable({
    providedIn: 'root'
  })

export class TeamService {
    errorMessage!: string;
    errorHandl:any
    
    constructor(private http: HttpClient, private router: Router){}


    private GetHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Acess-Control-Allow-Origin': '*'
        });
    }

    GetTeamsFromApi(leagueId:number): Observable<TeamModels[]> {
        let TeamsApi = `https://localhost:7171/api/ExternalApi/${leagueId}`;
        return this.http.get<TeamModels[]>(TeamsApi,{headers: this.GetHeaders() })
    }

}