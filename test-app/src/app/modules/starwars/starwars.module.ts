import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StarwarsComponent} from './starwars.component';
import {StarwarsRoutingModule} from './starwars-routing.module';
import {FilmsComponent} from './films/films.component';
import {LayoutMainParentComponent} from './layout-main-parent.component';
import {BrowserModule} from '@angular/platform-browser';
import {FilmsDetailComponent} from './films-detail/films-detail.component';
import {CharactersComponent} from './characters/characters.component';
import {CharacterDetailComponent} from './character-detail/character-detail.component';

@NgModule({
  declarations: [
    StarwarsComponent,
    LayoutMainParentComponent,
    FilmsComponent,
    FilmsDetailComponent,
    CharactersComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    StarwarsRoutingModule,
    FlexLayoutModule
  ]
})
export class StarwarsModule {}
