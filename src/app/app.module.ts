import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { FourBoxComponent } from './pages/landing/components/four-box/four-box.component';
import { FortySixtyComponent } from './pages/landing//components/forty-sixty/forty-sixty.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HamburgerComponent } from './components/header/components/hamburger/hamburger.component';
import { IntroCardComponent } from './pages/landing/components/intro-card/intro-card.component';
import { RescuesComponent } from './pages/rescues/rescues.component';
import { SearchComponent } from './pages/search/search.component';
import { AboutComponent } from './pages/about/about.component';
import { RescueCardComponent } from './pages/rescues/comoonents/rescue-card/rescue-card.component';
import { SearchCardComponent } from './pages/search/components/search-card/search-card.component';
import { FilterBarComponent } from './pages/search/components/filter-bar/filter-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FourBoxComponent,
    FortySixtyComponent,
    HeaderComponent,
    FooterComponent,
    HamburgerComponent,
    IntroCardComponent,
    RescuesComponent,
    SearchComponent,
    AboutComponent,
    RescueCardComponent,
    SearchCardComponent,
    FilterBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
