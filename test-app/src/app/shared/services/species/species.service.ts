import {Injectable} from '@angular/core';
import {SwapiService} from '../swapi.service';
import {Page} from '../../../api/swapi/page';
import {ResourcesEnum} from '../../../api/swapi/resources.enum';
import {Species} from '../../../api/swapi/species';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpeciesService extends SwapiService<Species> {

  page(): Promise<Page<Species>> {
    return super.page(ResourcesEnum.SPECIES);
  }

  getById(id: number): Observable<Species> {
    return super.get(ResourcesEnum.SPECIES, id);
  }
}
