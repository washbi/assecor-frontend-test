export interface Page<T> {
  count: number;
  next: string;
  previouse: string;
  results: T[];
}
