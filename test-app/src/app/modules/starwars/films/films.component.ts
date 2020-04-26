import {Component, OnInit} from '@angular/core';
import {LayoutMainParentComponent} from '../layout-main-parent.component';
import {FilmService} from '../../../shared/services/film/film.service';
import {Film} from '../../../api/swapi/film';
import {Observable} from 'rxjs';
import {extractId} from '../../../shared/util/extract-id-from-url';
import {filmsLabel} from '../starwars.component';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html'
})
export class FilmsComponent extends LayoutMainParentComponent implements OnInit {

  title = filmsLabel;

  films: Observable<Film[]>;

  constructor(private service: FilmService) {
    super();
  }

  ngOnInit(): void {
    this.films = this.service.all();
  }

  getFilmLink(url: string) {
    return `/starwars/film/${extractId(url)}`;
  }
}
