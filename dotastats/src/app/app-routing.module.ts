import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { RecentMatchesComponent } from './components/recent-matches/recent-matches.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'recentMatches', component: RecentMatchesComponent },
/*   { path: '', redirectTo: 'heroes', pathMatch: 'full'} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
