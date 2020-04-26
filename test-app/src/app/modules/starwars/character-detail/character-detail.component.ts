import {LayoutMainParentComponent} from '../layout-main-parent.component';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmService} from '../../../shared/services/film/film.service';
import {PeopleService} from '../../../shared/services/people/people.service';
import {StarshipService} from '../../../shared/services/starship/starship.service';
import {VehicleService} from '../../../shared/services/vehicle/vehicle.service';
import {GoogleService} from '../../../shared/services/google.service';
import {People} from '../../../api/swapi/people';
import {Observable} from 'rxjs';
import {Starship} from '../../../api/swapi/starship';
import {Vehicle} from '../../../api/swapi/vehicle';
import {Film} from '../../../api/swapi/film';
import {extractId} from '../../../shared/util/extract-id-from-url';
import {SpeciesService} from '../../../shared/services/species/species.service';
import {Species} from '../../../api/swapi/species';
import {PlanetService} from '../../../shared/services/planet/planet.service';
import {Planet} from '../../../api/swapi/planet';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html'
})
export class CharacterDetailComponent extends LayoutMainParentComponent implements OnInit {

  character: People;
  imageLink: Observable<string>;
  planet: Observable<Planet>;
  films: Observable<Film>[] = [];
  species: Observable<Species>[] = [];
  starships: Observable<Starship>[] = [];
  vehicles: Observable<Vehicle>[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private filmService: FilmService,
              private peopleService: PeopleService,
              private planetsService: PlanetService,
              private speciesService: SpeciesService,
              private starshipService: StarshipService,
              private vehicleService: VehicleService,
              private googleService: GoogleService) {
    super();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.peopleService
      .getById(id).toPromise()
      .then(people => {
        this.character = people;
        this.imageLink = this.googleService.getFirstImageResult(people.name, 'xlarge');
        this.planet = this.planetsService.getById(extractId(people.homeworld));
        this.fetchFilms(people.films);
        this.fetchSpecies(people.species);
        this.fetchStarships(people.starships);
        this.fetchVehicles(people.vehicles);
      })
      .catch(err => console.error(err.message));
  }

  goToFilm(url: string) {
    this.router.navigate([`starwars/film/${extractId(url)}`]);
  }

  private fetchFilms(urls: string[]) {
    urls.forEach(url => this.films.push(this.filmService.getById(extractId(url))));
  }

  private fetchSpecies(urls: string[]) {
    urls.forEach(url => this.species.push(this.speciesService.getById(extractId(url))));
  }

  private fetchStarships(urls: string[]) {
    urls.forEach(url => this.starships.push(this.starshipService.getById(extractId(url))));
  }

  private fetchVehicles(urls: string[]) {
    urls.forEach(url => this.vehicles.push(this.vehicleService.getById(extractId(url))));
  }
}
