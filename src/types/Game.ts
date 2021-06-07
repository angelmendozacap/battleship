import { Ship } from "./Ship";

export default interface Game {
  numberOfAttempts: number;
  numberOfAttemptsUsed: number;
  sunkenShips: Ship[];
  win: boolean;
  over: boolean;
}
