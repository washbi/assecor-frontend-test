import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Film} from '../../api/swapi/film';
import {Page} from '../../api/swapi/page';

@Injectable({ providedIn: 'root' })
export class FilmService {

  readonly path = 'swapi/films';

  constructor(private http: HttpClient) {}

  all(): Promise<Page<Film>> {
    return this.http.get<Page<Film>>(`${this.path}/`).toPromise();
  }

  get(id: number): Promise<Film> {
    return this.http.get<Film>(`${this.path}/${id}/`).toPromise();
  }
}
