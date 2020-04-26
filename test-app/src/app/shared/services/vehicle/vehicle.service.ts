import {Injectable} from '@angular/core';
import {SwapiService} from '../swapi.service';
import {Page} from '../../../api/swapi/page';
import {ResourcesEnum} from '../../../api/swapi/resources.enum';
import {Vehicle} from '../../../api/swapi/vehicle';

@Injectable({ providedIn: 'root' })
export class VehicleService extends SwapiService<Vehicle> {

  page(): Promise<Page<Vehicle>> {
    return super.page(ResourcesEnum.VEHICLES);
  }

  getById(id: number): Promise<Vehicle> {
    return super.get(ResourcesEnum.VEHICLES, id);
  }
}
