import {Injectable} from '@angular/core';
import {SwapiService} from '../swapi.service';
import {Page} from '../../../api/swapi/page';
import {ResourcesEnum} from '../../../api/swapi/resources.enum';
import {Planet} from '../../../api/swapi/planet';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlanetService extends SwapiService<Planet> {

  page(pageNumber: number): Promise<Page<Planet>> {
    return super.page(pageNumber, ResourcesEnum.PLANETS);
  }

  getById(id: number): Observable<Planet> {
    return super.get(ResourcesEnum.PLANETS, id);
  }
}
