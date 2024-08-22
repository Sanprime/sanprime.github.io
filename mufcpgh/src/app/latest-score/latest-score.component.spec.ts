import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestScoreComponent } from './latest-score.component';

describe('LatestScoreComponent', () => {
  let component: LatestScoreComponent;
  let fixture: ComponentFixture<LatestScoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestScoreComponent]
    });
    fixture = TestBed.createComponent(LatestScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
