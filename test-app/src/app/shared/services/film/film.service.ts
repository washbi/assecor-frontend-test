import {Injectable} from '@angular/core';
import {Film} from '../../../api/swapi/film';
import {Page} from '../../../api/swapi/page';
import {SwapiService} from '../swapi.service';
import {ResourcesEnum} from '../../../api/swapi/resources.enum';

@Injectable({ providedIn: 'root' })
export class FilmService extends SwapiService<Film> {

  all(): Promise<Page<Film>> {
    return super.all(ResourcesEnum.FILMS);
  }

  getById(id: number): Promise<Film> {
    return super.get(ResourcesEnum.FILMS, id);
  }
}
