import {Injectable} from '@angular/core';
import {SwapiService} from '../swapi.service';
import {Page} from '../../../api/swapi/page';
import {ResourcesEnum} from '../../../api/swapi/resources.enum';
import {Planet} from '../../../api/swapi/planet';

@Injectable({ providedIn: 'root' })
export class PeopleService extends SwapiService<Planet> {

  page(): Promise<Page<Planet>> {
    return super.page(ResourcesEnum.PLANETS);
  }

  getById(id: number): Promise<Planet> {
    return super.get(ResourcesEnum.PLANETS, id);
  }
}
