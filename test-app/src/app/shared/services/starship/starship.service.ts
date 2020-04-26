import {Injectable} from '@angular/core';
import {SwapiService} from '../swapi.service';
import {Page} from '../../../api/swapi/page';
import {ResourcesEnum} from '../../../api/swapi/resources.enum';
import {Starship} from '../../../api/swapi/starship';

@Injectable({ providedIn: 'root' })
export class StarshipService extends SwapiService<Starship> {

  page(): Promise<Page<Starship>> {
    return super.page(ResourcesEnum.STARSHIPS);
  }

  getById(id: number): Promise<Starship> {
    return super.get(ResourcesEnum.STARSHIPS, id);
  }
}
