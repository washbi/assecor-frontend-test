import {Component, Input, OnInit} from '@angular/core';
import {People} from '../../../api/swapi/people';
import {extractId} from '../../../shared/util/extract-id-from-url';
import {Observable} from 'rxjs';
import {PlanetService} from '../../../shared/services/planet/planet.service';
import {Planet} from '../../../api/swapi/planet';
import {GoogleService} from '../../../shared/services/google.service';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html'
})
export class CharactersCardComponent implements OnInit {

  @Input() character: People;

  imageLink: Observable<string>;
  homeworld: Observable<Planet>;

  constructor(private planetService: PlanetService, private googleService: GoogleService) {}

  ngOnInit(): void {
    // this.imageLink = this.googleService.getFirstImageResult(this.character.name, 'large'); will be throttled quickly due to daily limit
    this.homeworld = this.planetService.getById(extractId(this.character.homeworld));
  }

  getCharacterLink(url: string) {
    return `/starwars/character/${extractId(url)}`;
  }
}
