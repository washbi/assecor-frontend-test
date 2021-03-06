import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StarwarsComponent} from './starwars.component';
import {FilmsComponent} from './films/films.component';
import {FilmsDetailComponent} from './films-detail/films-detail.component';
import {CharactersComponent} from './characters/characters.component';
import {CharacterDetailComponent} from './character-detail/character-detail.component';
import {ErrorComponent} from './error/error.component';
import {SpeciesComponent} from './species/species.component';

const routes: Routes = [
  {
    path: 'starwars',
    component: StarwarsComponent,
    children: [
      { path: 'films', component: FilmsComponent },
      { path: 'film/:id', component: FilmsDetailComponent },
      { path: 'characters', component: CharactersComponent },
      { path: 'character/:id', component: CharacterDetailComponent },
      { path: 'species', component: SpeciesComponent },
      { path: 'error', component: ErrorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StarwarsRoutingModule { }
