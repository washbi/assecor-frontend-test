import {HttpClient} from '@angular/common/http';
import {Page} from '../../api/swapi/page';
import {ResourcesEnum} from '../../api/swapi/resources.enum';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export abstract class SwapiService<T> {

  readonly basePath = 'swapi';

  constructor(private http: HttpClient) {}

  all(resource: ResourcesEnum): Observable<T[]> {
    return this.http.get<Page<T>>(`${this.basePath}/${resource}/`).pipe(map(page => page.results));
  }

  page(resource: ResourcesEnum): Promise<Page<T>> {
    return this.http.get<Page<T>>(`${this.basePath}/${resource}/`).toPromise();
  }

  get(resource: ResourcesEnum, id: number): Observable<T> {
    return this.http.get<T>(`${this.basePath}/${resource}/${id}/`);
  }

}
