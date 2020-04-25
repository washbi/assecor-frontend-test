import {Injectable} from '@angular/core';
import {SwapiService} from '../swapi.service';
import {Page} from '../../../api/swapi/page';
import {ResourcesEnum} from '../../../api/swapi/resources.enum';
import {People} from '../../../api/swapi/people';

@Injectable({ providedIn: 'root' })
export class PeopleService extends SwapiService<People> {

  all(): Promise<Page<People>> {
    return super.all(ResourcesEnum.PEOPLE);
  }

  getById(id: number): Promise<People> {
    return super.get(ResourcesEnum.PEOPLE, id);
  }
}
