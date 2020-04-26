import {LayoutMainParentComponent} from '../layout-main-parent.component';
import {Component, OnInit} from '@angular/core';
import {charactersLabel} from '../starwars.component';
import {People} from '../../../api/swapi/people';
import {PeopleService} from '../../../shared/services/people/people.service';
import {Page} from '../../../api/swapi/page';
import {extractPageNumber} from '../../../shared/util/extract-page-number-from-url';
import {ErrorHandlingService} from '../../../shared/services/error-handling.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent extends LayoutMainParentComponent implements OnInit {

  title = charactersLabel;

  characters: People[] = [];
  page: Page<People>;

  constructor(protected router: Router, private service: PeopleService, private errorService: ErrorHandlingService) {
    super(router);
  }

  ngOnInit(): void {
    this.loadPage(1);
  }

  onLoadMore() {
    this.loadPage(extractPageNumber(this.page.next));
  }

  private loadPage(pageNumber: number) {
    this.service.page(pageNumber).then(page => {
      this.page = page;
      this.characters.push(...page.results);
    }).catch(err => this.errorService.handleError(err));
  }
}
