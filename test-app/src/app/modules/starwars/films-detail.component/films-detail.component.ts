import {LayoutMainParentComponent} from '../layout-main-parent.component';
import {Component, OnInit} from '@angular/core';
import {FilmService} from '../../../shared/services/film/film.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Film} from '../../../api/swapi/film';


@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.component.html'
})
export class FilmsDetailComponent extends LayoutMainParentComponent implements OnInit {

  film: Film;
  episode = '';

  readonly roman = {
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  constructor(private route: ActivatedRoute, private service: FilmService) {
    super();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.service
      .getById(id)
      .then(film => {
        this.film = film;
        this.episode = this.romanize(film.episode_id);
      })
      .catch(err => console.error(err.message));
  }

  private romanize(num: number) {
    let result = 'Episode ';
    for (const index of Object.keys(this.roman)) {
      while (num >= this.roman[index]) {
        result += index;
        num -= this.roman[index];
      }
    }
    return result;
  }
}
