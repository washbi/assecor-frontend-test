import {Injectable} from '@angular/core';
import {SwapiService} from '../swapi.service';
import {Page} from '../../../api/swapi/page';
import {ResourcesEnum} from '../../../api/swapi/resources.enum';
import {Vehicle} from '../../../api/swapi/vehicle';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VehicleService extends SwapiService<Vehicle> {

  page(pageNumber: number): Promise<Page<Vehicle>> {
    return super.page(pageNumber, ResourcesEnum.VEHICLES);
  }

  getById(id: number): Observable<Vehicle> {
    return super.get(ResourcesEnum.VEHICLES, id);
  }
}
