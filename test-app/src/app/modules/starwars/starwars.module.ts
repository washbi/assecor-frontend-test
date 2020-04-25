import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StarwarsComponent} from './starwars.component';
import {StarwarsRoutingModule} from './starwars-routing.module';
import {FilmsComponent} from './films/films.component';
import {LayoutMainParentComponent} from './layout-main-parent.component';

@NgModule({
  declarations: [
    StarwarsComponent,
    LayoutMainParentComponent,
    FilmsComponent
  ],
  imports: [
    StarwarsRoutingModule,
    FlexLayoutModule
  ]
})
export class StarwarsModule {}
