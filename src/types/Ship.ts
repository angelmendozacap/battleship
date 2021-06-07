export interface Ship {
  id: number;
  name: string;
  directions: Directions;
  count: number;
  size: number;
}

export interface Directions {
  horizontal: number[];
  vertical: number[];
}
