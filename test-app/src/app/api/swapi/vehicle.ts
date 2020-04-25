export interface Vehicle {

  cargo_capacity: number;
  consumables: string;
  cost_in_credits: number;
  crew: number;
  length: number;
  manufacturer: string;
  max_atmosphering_speed: number;
  model: string;
  name: string;
  passengers: number;
  url: string;
  vehicle_class: string;

  pilots: string[];
  films: string[];

  created: Date;
  edited: Date;
}
