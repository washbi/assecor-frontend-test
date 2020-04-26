import {Component, OnInit} from '@angular/core';
import {LayoutMainParentComponent} from '../layout-main-parent.component';
import {speciesLabel} from '../starwars.component';
import {Page} from '../../../api/swapi/page';
import {extractPageNumber} from '../../../shared/util/extract-page-number-from-url';
import {SpeciesService} from '../../../shared/services/species/species.service';
import {Species} from '../../../api/swapi/species';
import {ErrorHandlingService} from '../../../shared/services/error-handling.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html'
})
export class SpeciesComponent extends LayoutMainParentComponent implements OnInit {

  title = speciesLabel;

  species: Species[] = [];
  page: Page<Species>;

  constructor(private service: SpeciesService, private errorService: ErrorHandlingService) {
    super();
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
      this.species.push(...page.results);
    }).catch(err => this.errorService.handleError(err));
  }
}
