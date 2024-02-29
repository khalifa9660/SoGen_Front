import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { FlagTeam } from "src/app/Models/Flag";


@Injectable({
    providedIn: 'root'
  })

export class CountriesService {
    errorMessage!: string;
    errorHandl:any

    

    constructor(private http: HttpClient, private router: Router){}

    private GetHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Acess-Control-Allow-Origin': '*'
        });
    }

    GetCountriesFromApi(): Observable<FlagTeam[]> {
        let CountriesApi = "https://localhost:7171/api/ExternalApi/Countries";
        return this.http.get<FlagTeam[]>(CountriesApi,{headers: this.GetHeaders() })
    }
}