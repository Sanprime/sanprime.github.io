import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsComponent} from "./about-us/about-us.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {LatestScoreComponent} from "./latest-score/latest-score.component";

const routes: Routes = [
  { path: 'about_us', component: AboutUsComponent},
  { path: 'latest_score', component: LatestScoreComponent},
  { path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
