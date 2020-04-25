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

  film: Observable<Film>;

  constructor(private route: ActivatedRoute, private service: FilmService) {
    super();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.film = this.service.getById(id);
  }

}
