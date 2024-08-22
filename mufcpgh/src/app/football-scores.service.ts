import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FootballScoresService {

  private apiUrl = 'http://api.football-data.org/v4/teams/66/matches';

  constructor(private http: HttpClient) { }

  getUnitedScores(): Observable<any> {
    const headers = new HttpHeaders({
      'X-Auth-Token': '19de5c6e7e554dae8953e810a926fed1'
    })
    return this.http.get(this.apiUrl, {headers});
  }
}
