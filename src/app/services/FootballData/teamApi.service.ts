import { HttpClient, HttpBackend, HttpHeaders, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, retry } from "rxjs";
import { Token } from "@angular/compiler";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { FlagTeam } from "src/app/Models/flag";

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
            'X-RapidAPI-Key': '763f1903cemshf1814091940340dp16dfe1jsnb7781ae9d30a',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        })
    }

    getFlagCountries(): Observable<FlagTeam> {
        const httpOptions = {
            headers: this.GetHeaders(),
        };
        let flagCountries = 'https://api-football-v1.p.rapidapi.com/v3/countries';
        return this.http.get<FlagTeam>(flagCountries, httpOptions);

    }

}