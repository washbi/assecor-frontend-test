import {Injectable} from '@angular/core';
import {SwapiService} from '../swapi.service';
import {Page} from '../../../api/swapi/page';
import {ResourcesEnum} from '../../../api/swapi/resources.enum';
import {People} from '../../../api/swapi/people';
import {Film} from '../../../api/swapi/film';

@Injectable({ providedIn: 'root' })
export class PeopleService extends SwapiService<People> {

  page(): Promise<Page<People>> {
    return super.page(ResourcesEnum.PEOPLE);
  }

  getById(id: number): Promise<People> {
    return super.get(ResourcesEnum.PEOPLE, id);
  }
}
