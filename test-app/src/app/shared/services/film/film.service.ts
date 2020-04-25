import {Injectable} from '@angular/core';
import {Film} from '../../../api/swapi/film';
import {SwapiService} from '../swapi.service';
import {ResourcesEnum} from '../../../api/swapi/resources.enum';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilmService extends SwapiService<Film> {

  all(): Observable<Film[]> {
    return super.all(ResourcesEnum.FILMS);
  }

  getById(id: number): Observable<Film> {
    return super.get(ResourcesEnum.FILMS, id);
  }
}
