import {LayoutMainParentComponent} from '../layout-main-parent.component';
import {Component, OnInit} from '@angular/core';
import {charactersLabel} from '../starwars.component';
import {People} from '../../../api/swapi/people';
import {PeopleService} from '../../../shared/services/people/people.service';
import {Page} from '../../../api/swapi/page';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent extends LayoutMainParentComponent implements OnInit {

  title = charactersLabel;

  characters: People[] = [];

  page: Page<People>;

  constructor(private service: PeopleService) {
    super();
  }

  ngOnInit(): void {
    this.loadPage(1);
  }

  }

  private loadPage(pageNumber: number) {
    this.service.page(pageNumber).then(page => {
      this.page = page;
      this.characters.push(...page.results);
    }).catch(err => console.error(err));
  }
}
