export interface Ship {
  id: number;
  name: ShipNames;
  directions: Directions;
  count: number;
  size: number;
}

export interface Directions {
  horizontal: number[];
  vertical: number[];
}

export enum ShipNames {
  DESTROYER = "destroyer",
  SUBMARINE = "submarine",
  CRUISER = "cruiser",
  BATTLESHIP = "battleship",
}
