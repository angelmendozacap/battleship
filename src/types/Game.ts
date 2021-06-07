import { ShipNames } from "./Ship";

export default interface Game {
  numberOfAttempts: number;
  numberOfAttemptsUsed: number;
  sunkenShipFleet: ShipNames[];
  win: boolean;
  over: boolean;
}
