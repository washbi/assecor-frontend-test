import {Component} from '@angular/core';

export const filmsLabel = 'Films';
export const charactersLabel = 'Characters';
export const speciesLabel = 'Species';
export const planetsLabel = 'Planets';
export const starshipsLabel = 'Starships';
export const vehiclesLabel = 'Vehicles';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent {

  films = filmsLabel;
  characteres = charactersLabel;
  species = speciesLabel;
  planets = planetsLabel;
  starships = starshipsLabel;
  vehicles = vehiclesLabel;

}
