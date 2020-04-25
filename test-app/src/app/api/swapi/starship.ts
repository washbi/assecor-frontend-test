export interface Starship {

  cargo_capacity: number;
  consumables: string;
  cost_in_credits: number;
  crew: number;
  hyperdrive_rating: number;
  length: number;
  manufacturer: string;
  max_atmosphering_speed: string;
  MGLT: string;
  model: string;
  name: string;
  passengers: number;
  starship_class: string;
  url: string;

  films: string[];
  pilots: string[];

  created: Date;
  edited: Date;
}
