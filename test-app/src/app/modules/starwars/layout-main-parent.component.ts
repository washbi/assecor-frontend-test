import {Component, HostBinding} from '@angular/core';
import {extractId} from '../../shared/util/extract-id-from-url';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout-main-parent',
  template: ``,
})
export class LayoutMainParentComponent {

  // the same as fxLayout='column' fxFlexFill
  @HostBinding('style.display') display = 'flex';
  @HostBinding('style.flexDirection') flexDirection = 'column';
  @HostBinding('style.margin') margin = 0;
  @HostBinding('style.width') width = '100%';
  @HostBinding('style.height') height = '100%';
  @HostBinding('style.minWidth') minWidth = '100%';
  @HostBinding('style.minHeight') minHeight = '100%';
  @HostBinding('style.boxSizing') boxSizing = 'border-box';
  @HostBinding('style.padding') padding = '2em';

  constructor(protected router: Router) {

  }

  goTo(path: string, url: string) {
    this.router.navigate([`starwars/${path}/${extractId(url)}`]);
  }
}
