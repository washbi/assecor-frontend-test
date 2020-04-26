import {LayoutMainParentComponent} from '../layout-main-parent.component';
import {Component, OnInit} from '@angular/core';
import {FilmService} from '../../../shared/services/film/film.service';
import {ActivatedRoute, Router} from '@angular/router';
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
import {extractId} from '../../../shared/util/extract-id-from-url';
import {GoogleService} from '../../../shared/services/google.service';


@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.component.html'
})
export class FilmsDetailComponent extends LayoutMainParentComponent implements OnInit {

  film: Film;
  episode = '';
  imageLink: Observable<string>;
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
              private router: Router,
              private filmService: FilmService,
              private peopleService: PeopleService,
              private planetService: PlanetService,
              private starshipService: StarshipService,
              private vehicleService: VehicleService,
              private googleService: GoogleService) {
    super();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.filmService
      .getById(id).toPromise()
      .then(film => {
        this.film = film;
        this.episode = this.romanize(film.episode_id);
        this.imageLink = this.googleService.getFirstImageResult(film.title, 'xlarge');
        this.fetchCharacters(film.characters);
        this.fetchPlanets(film.planets);
        this.fetchStarships(film.starships);
        this.fetchVehicles(film.vehicles);
      })
      .catch(err => console.error(err.message));
  }

  goToCharacter(url: string) {
    this.router.navigate([`starwars/character/${extractId(url)}`]);
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
    urls.forEach(url => this.characters.push(this.peopleService.getById(extractId(url))));
  }

  private fetchPlanets(urls: string[]) {
    urls.forEach(url => this.planets.push(this.planetService.getById(extractId(url))));
  }

  private fetchStarships(urls: string[]) {
    urls.forEach(url => this.starships.push(this.starshipService.getById(extractId(url))));
  }

  private fetchVehicles(urls: string[]) {
    urls.forEach(url => this.vehicles.push(this.vehicleService.getById(extractId(url))));
  }
}
