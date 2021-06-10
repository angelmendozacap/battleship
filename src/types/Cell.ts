import { Ship } from "./Ship";

export interface Cell {
  taken: boolean;
  boom: boolean;
  miss: boolean;
  ship?: Ship;
}
