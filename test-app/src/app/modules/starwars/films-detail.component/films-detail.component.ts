import {LayoutMainParentComponent} from '../layout-main-parent.component';
import {Component, OnInit} from '@angular/core';
import {FilmService} from '../../../shared/services/film/film.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Film} from '../../../api/swapi/film';
import {People} from '../../../api/swapi/people';
import {PeopleService} from '../../../shared/services/people/people.service';
import {PlanetService} from '../../../shared/services/planet/planet.service';
import {Planet} from '../../../api/swapi/planet';
import {Starship} from '../../../api/swapi/starship';
import {Vehicle} from '../../../api/swapi/vehicle';
import {StarshipService} from '../../../shared/services/starship/starship.service';
import {VehicleService} from '../../../shared/services/vehicle/vehicle.service';


@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.component.html'
})
export class FilmsDetailComponent extends LayoutMainParentComponent implements OnInit {

  film: Film;
  episode = '';
  characters: Observable<People>[] = [];
  planets: Observable<Planet>[] = [];
  starships: Observable<Starship>[] = [];
  vehicles: Observable<Vehicle>[] = [];

  readonly roman = {
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  constructor(private route: ActivatedRoute,
              private filmService: FilmService,
              private peopleService: PeopleService,
              private planetService: PlanetService,
              private starshipService: StarshipService,
              private vehicleService: VehicleService) {
    super();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.filmService
      .getById(id).toPromise()
      .then(film => {
        this.film = film;
        this.episode = this.romanize(film.episode_id);
        this.fetchCharacters(film.characters);
        this.fetchPlanets(film.planets);
        this.fetchStarships(film.starships);
        this.fetchVehicles(film.vehicles);
      })
      .catch(err => console.error(err.message));
  }

  private romanize(num: number) {
    let result = 'Episode ';
    for (const index of Object.keys(this.roman)) {
      while (num >= this.roman[index]) {
        result += index;
        num -= this.roman[index];
      }
    }
    return result;
  }

  private fetchCharacters(urls: string[]) {
    urls.forEach(url => {
      const urlParts = url.split('/');
      const charId = urlParts[urlParts.length - 2];
      this.characters.push(this.peopleService.getById(Number(charId)));
    });
  }

  private fetchPlanets(urls: string[]) {
    urls.forEach(url => {
      const urlParts = url.split('/');
      const charId = urlParts[urlParts.length - 2];
      this.planets.push(this.planetService.getById(Number(charId)));
    });
  }

  private fetchStarships(urls: string[]) {
    urls.forEach(url => {
      const urlParts = url.split('/');
      const charId = urlParts[urlParts.length - 2];
      this.starships.push(this.starshipService.getById(Number(charId)));
    });
  }

  private fetchVehicles(urls: string[]) {
    urls.forEach(url => {
      const urlParts = url.split('/');
      const charId = urlParts[urlParts.length - 2];
      this.vehicles.push(this.vehicleService.getById(Number(charId)));
    });
  }
}
