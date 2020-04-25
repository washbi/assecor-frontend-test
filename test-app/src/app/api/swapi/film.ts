export interface Film {

  episode_id: number;
  director: string;
  opening_crawl: string;
  producer: string;
  title: string;
  url: string;

  characters: string[];
  planets: string[];
  species: string[];
  starships: string[];
  vehicles: string[];

  created: Date;
  edited: Date;
  release_date: Date;
}
