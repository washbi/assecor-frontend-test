import {Component, Input, OnInit} from '@angular/core';
import {Species} from '../../../api/swapi/species';
import {Observable} from 'rxjs';
import {Planet} from '../../../api/swapi/planet';
import {PlanetService} from '../../../shared/services/planet/planet.service';
import {extractId} from '../../../shared/util/extract-id-from-url';

@Component({
  selector: 'app-species-card',
  templateUrl: './species-card.component.html'
})
export class SpeciesCardComponent implements OnInit {

  @Input() species: Species;

  planet: Observable<Planet>;

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    if (this.species.homeworld) {
      this.planet = this.planetService.getById(extractId(this.species.homeworld));
    }
  }
}
