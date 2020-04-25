import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StarwarsComponent} from './starwars.component';
import {FilmsComponent} from './films/films.component';

const routes: Routes = [
  {
    path: 'starwars',
    component: StarwarsComponent,
    children: [
      { path: 'films', component: FilmsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StarwarsRoutingModule { }
