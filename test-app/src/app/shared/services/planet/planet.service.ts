import {Injectable} from '@angular/core';
import {SwapiService} from '../swapi.service';
import {Page} from '../../../api/swapi/page';
import {ResourcesEnum} from '../../../api/swapi/resources.enum';
import {Planet} from '../../../api/swapi/planet';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PeopleService extends SwapiService<Planet> {

  page(): Promise<Page<Planet>> {
    return super.page(ResourcesEnum.PLANETS);
  }

  getById(id: number): Observable<Planet> {
    return super.get(ResourcesEnum.PLANETS, id);
  }
}
