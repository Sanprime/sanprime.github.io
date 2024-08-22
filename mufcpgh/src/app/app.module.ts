import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LinkTreeComponent } from './home-page/link-tree/link-tree.component';
import { FooterComponent } from './footer/footer.component';
import { PhotoGalleryComponent } from './home-page/photo-gallery/photo-gallery.component';
import { LatestScoreComponent } from './latest-score/latest-score.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomePageComponent,
    LinkTreeComponent,
    FooterComponent,
    PhotoGalleryComponent,
    LatestScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
