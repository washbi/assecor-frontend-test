import {Component, OnInit} from '@angular/core';
import {LayoutMainParentComponent} from '../layout-main-parent.component';
import {FilmService} from '../../../shared/services/film/film.service';
import {Film} from '../../../api/swapi/film';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {extractId} from '../../../shared/util/extract-id-from-url';
import {filmsLabel} from '../starwars.component';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html'
})
export class FilmsComponent extends LayoutMainParentComponent implements OnInit {

  title = filmsLabel;

  films: Observable<Film[]>;

  constructor(private service: FilmService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.films = this.service.all();
  }

  goToFilm(url: string) {
    this.router.navigate([`starwars/film/${extractId(url)}`]);
  }
}
