import {LayoutMainParentComponent} from '../layout-main-parent.component';
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.component.html'
})
export class FilmsDetailComponent extends LayoutMainParentComponent implements OnInit{

  ngOnInit(): void {
  }

}
