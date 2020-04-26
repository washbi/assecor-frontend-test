import {LayoutMainParentComponent} from '../layout-main-parent.component';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent extends LayoutMainParentComponent implements OnInit {

  ngOnInit(): void {
  }

}
