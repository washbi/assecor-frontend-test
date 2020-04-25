import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StarwarsComponent} from './starwars.component';
import {StarwarsRoutingModule} from './starwars-routing.module';
import {FilmsComponent} from './films/films.component';
import {LayoutMainParentComponent} from './layout-main-parent.component';
import {BrowserModule} from '@angular/platform-browser';
import {FilmsDetailComponent} from './films-detail.component/films-detail.component';

@NgModule({
  declarations: [
    StarwarsComponent,
    LayoutMainParentComponent,
    FilmsComponent,
    FilmsDetailComponent
  ],
  imports: [
    BrowserModule,
    StarwarsRoutingModule,
    FlexLayoutModule
  ]
})
export class StarwarsModule {}
