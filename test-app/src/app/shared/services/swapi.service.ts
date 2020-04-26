import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Page} from '../../api/swapi/page';
import {ResourcesEnum} from '../../api/swapi/resources.enum';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ErrorHandlingService} from './error-handling.service';

@Injectable({ providedIn: 'root' })
export abstract class SwapiService<T> {

  readonly basePath = 'https://swapi.dev/api';

  constructor(private http: HttpClient, private errorService: ErrorHandlingService) {}

  all(resource: ResourcesEnum): Observable<T[]> {
    return this.http
      .get<Page<T>>(`${this.basePath}/${resource}/`)
      .pipe(
        map(page => page.results),
        catchError(err => {
          this.errorService.handleError(err);
          return of([]);
        })
      );
  }

  page(pageNumber: number, resource: ResourcesEnum): Promise<Page<T>> {
    const params = new HttpParams().set('page', String(pageNumber));
    return this.http
      .get<Page<T>>(`${this.basePath}/${resource}/`, { params })
      .pipe(
        catchError(err => {
          this.errorService.handleError(err);
          return of(null);
        })
      )
      .toPromise();
  }

  get(resource: ResourcesEnum, id: number): Observable<T> {
    return this.http
      .get<T>(`${this.basePath}/${resource}/${id}/`)
      .pipe(
        catchError(err => {
          this.errorService.handleError(err);
          return of(null);
        })
      );
  }
}
