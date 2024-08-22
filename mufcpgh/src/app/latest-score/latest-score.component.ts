import {Component, OnInit} from '@angular/core';
import {FootballScoresService} from "../football-scores.service";

@Component({
  selector: 'app-latest-score',
  templateUrl: './latest-score.component.html',
  styleUrls: ['./latest-score.component.css']
})
export class LatestScoreComponent implements OnInit{

  scores: string | undefined;

  constructor(private footballScoresService: FootballScoresService) {
  }

  ngOnInit() {
    this.footballScoresService.getUnitedScores().subscribe(
      data => {
        this.scores = JSON.stringify(data, null, 2);
      },
      error => {
        console.error('There was an error:', error);
      }
    );
  }

}
