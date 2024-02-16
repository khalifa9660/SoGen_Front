import { HttpClient, HttpBackend, HttpHeaders, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, retry } from "rxjs";
import { Token } from "@angular/compiler";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { FlagTeam } from "src/app/Models/Flag";

@Injectable({
    providedIn: 'root'
  })

export class TeamService {
    errorMessage!: string;
    errorHandl:any
    flagItem:any[]=[]

    
    
    constructor(private http: HttpClient, private router: Router){}

    private GetHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': '763f1903cemshf1814091940340dp16dfe1jsnb7781ae9d30a',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            "access-control-allow-credentials": "true",
            "access-control-allow-headers": "x-rapidapi-key, x-apisports-key, x-rapidapi-host",
            "access-control-allow-methods": "GET, OPTIONS",
            "access-control-allow-origin": "*",
            "server": "RapidAPI-1.2.8",
            "vary": "Accept-Encoding",
            "x-rapidapi-region": "AWS - eu-central-1",
            "x-rapidapi-version": "1.2.8",
            "x-ratelimit-requests-limit": "100",
            "x-ratelimit-requests-remaining": "95",
            "x-ratelimit-requests-reset": "48525",
            "x-request-id": "e3eb174d-cc61-4a4e-9ff5-e7aba19b2f0e"
        })
    }

    getFlagCountries(): Observable<FlagTeam[]> {
        const httpOptions = {
            headers: this.GetHeaders(),
        };
        let flagCountries = 'https://api-football-v1.p.rapidapi.com/v3/countries';
        return this.http.get<FlagTeam[]>(flagCountries, httpOptions);
    }

}