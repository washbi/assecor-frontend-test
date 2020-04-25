import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StarwarsComponent} from './starwars.component';
import {FilmsComponent} from './films/films.component';
import {FilmsDetailComponent} from './films-detail.component/films-detail.component';

const routes: Routes = [
  {
    path: 'starwars',
    component: StarwarsComponent,
    children: [
      { path: 'films', component: FilmsComponent },
      { path: 'film/:id', component: FilmsDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StarwarsRoutingModule { }
