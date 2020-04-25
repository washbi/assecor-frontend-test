import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StarwarsComponent} from './starwars.component';
import {StarwarsRoutingModule} from './starwars-routing.module';

@NgModule({
  declarations: [
    StarwarsComponent
  ],
  imports: [
    StarwarsRoutingModule,
    FlexLayoutModule
  ]
})
export class StarwarsModule {}
