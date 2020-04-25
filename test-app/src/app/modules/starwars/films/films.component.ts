import {Component, OnInit} from '@angular/core';
import {LayoutMainParentComponent} from '../layout-main-parent.component';
import {FilmService} from '../../../shared/services/film/film.service';
import {Film} from '../../../api/swapi/film';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html'
})
export class FilmsComponent extends LayoutMainParentComponent implements OnInit {

  title = 'Films';

  films: Observable<Film[]>;

  constructor(private service: FilmService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.films = this.service.all();
  }

  goToFilm(url: string) {
    const urlParts = url.split('/');
    const id = urlParts[urlParts.length - 2];
    this.router.navigate([`starwars/film/${id}`]);
  }
}
