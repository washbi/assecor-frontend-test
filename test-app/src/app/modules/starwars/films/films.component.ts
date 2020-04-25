import {Component, HostBinding} from '@angular/core';
import {LayoutMainParentComponent} from '../layout-main-parent.component';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html'
})
export class FilmsComponent extends LayoutMainParentComponent {

  title = 'Filme';

}
