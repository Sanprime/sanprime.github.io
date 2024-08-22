import { TestBed } from '@angular/core/testing';

import { FootballScoresService } from './football-scores.service';

describe('FootballScoresService', () => {
  let service: FootballScoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballScoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
