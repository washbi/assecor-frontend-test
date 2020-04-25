import {Component, HostBinding} from '@angular/core';

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

}
