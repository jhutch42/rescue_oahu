import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { RescuesComponent } from './pages/rescues/rescues.component';
import { AboutComponent } from './pages/about/about.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'rescues', component: RescuesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
