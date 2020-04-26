import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GoogleService {

  readonly apiKey = environment.googleApiKey;
  readonly searchEngineId = environment.googleCX;
  readonly path = 'https://customsearch.googleapis.com/customsearch/v1';
  readonly numberOfResults = '1';
  readonly fallbackImage = 'assets/pngwing.com.png';

  constructor(private http: HttpClient) {
  }

  /**
   * returns an Observable with the image-link of the first google result.
   */
  getFirstImageResult(query: string, size: string): Observable<string> {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('cx', this.searchEngineId)
      .set('searchType', 'image')
      .set('imgSize', size)
      .set('imgType', 'photo')
      .set('num', this.numberOfResults)
      .set('q', 'Star Wars ' + query);
    return this.http
      .get<any>(this.path, {params})
      .pipe(
        map(res => res.items[0].link),
        catchError(err => of(this.fallbackImage))
      );
  }
}
