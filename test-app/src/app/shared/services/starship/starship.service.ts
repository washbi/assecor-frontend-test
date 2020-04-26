import {Injectable} from '@angular/core';
import {SwapiService} from '../swapi.service';
import {Page} from '../../../api/swapi/page';
import {ResourcesEnum} from '../../../api/swapi/resources.enum';
import {Starship} from '../../../api/swapi/starship';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StarshipService extends SwapiService<Starship> {

  page(pageNumber: number): Promise<Page<Starship>> {
    return super.page(pageNumber, ResourcesEnum.STARSHIPS);
  }

  getById(id: number): Observable<Starship> {
    return super.get(ResourcesEnum.STARSHIPS, id);
  }
}
