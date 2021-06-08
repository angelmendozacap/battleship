import { ShipNames } from "./Ship";

export default interface Game {
  totalAttempts: number;
  attemptsRemaining: number;
  sunkenShipFleet: ShipNames[];
  win: boolean;
  over: boolean;
}
