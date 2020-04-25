import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StarwarsComponent} from './starwars.component';

const routes: Routes = [
  { path: 'starwars', component: StarwarsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StarwarsRoutingModule { }
