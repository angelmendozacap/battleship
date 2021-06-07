/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Game from "@/types/Game";
import { ShipNames } from "@/types/Ship";
import { computed, ComputedRef, readonly, reactive } from "vue";

const game: Game = reactive({
  numberOfAttempts: 0,
  numberOfAttemptsUsed: 0,
  sunkenShipFleet: [],
  win: false,
  over: false,
});

export function useGame() {
  function setNumberOfAttempts(value: number) {
    game.numberOfAttempts = value;
  }

  function setNumberOfAttemptsUsed(value: number) {
    game.numberOfAttemptsUsed = value;
  }

  function setWin(value: boolean) {
    game.win = value;
  }

  function setGameOver(value: boolean) {
    game.over = value;
  }

  function addSunkenShip(fleetName: ShipNames) {
    game.sunkenShipFleet.push(fleetName);
  }

  function saveGameHistory() {
    const history = gameHistory.value;
    history.push(game);

    localStorage.setItem("_GAME_HISTORY", JSON.stringify(history));
  }

  function resetGame() {
    game.numberOfAttempts = 0;
    game.numberOfAttemptsUsed = 0;
    game.sunkenShipFleet = [];
    game.win = false;
    game.over = false;
  }

  const gameHistory: ComputedRef<Game[]> = computed(() => {
    const history = localStorage.getItem("_GAME_HISTORY") || "[]";

    return JSON.parse(history) || [];
  });

  return readonly({
    game,
    addSunkenShip,
    gameHistory,
    saveGameHistory,
    setNumberOfAttempts,
    setNumberOfAttemptsUsed,
    setWin,
    setGameOver,
    resetGame,
  });
}
