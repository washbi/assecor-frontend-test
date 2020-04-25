import {HttpClient} from '@angular/common/http';
import {Page} from '../api/swapi/page';
import {ResourcesEnum} from '../api/swapi/resources.enum';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export abstract class SwapiService<T> {

  readonly basePath = 'swapi';

  constructor(private http: HttpClient) {}

  all(resource: ResourcesEnum): Promise<Page<T>> {
    return this.http.get<Page<T>>(`${this.basePath}/${resource}/`).toPromise();
  }

  get(resource: ResourcesEnum, id: number): Promise<T> {
    return this.http.get<T>(`${this.basePath}/${resource}/${id}/`).toPromise();
  }

}
