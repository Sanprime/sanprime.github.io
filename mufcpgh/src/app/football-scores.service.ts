import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FootballScoresService {

  private apiUrl = 'http://api.football-data.org/v4/teams/66/matches';

  constructor(private http: HttpClient) { }

  getUnitedScores(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
