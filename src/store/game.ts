/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Game from "@/types/Game";
import { ShipNames } from "@/types/Ship";
import { computed, ComputedRef, readonly, reactive } from "vue";

const game: Game = reactive({
  totalAttempts: 0,
  attemptsRemaining: 0,
  sunkenShipFleet: [],
  win: false,
  over: false,
  date: "",
});

export function useGame() {
  function setTotalAttempts(value: number) {
    game.totalAttempts = value;
  }

  function setAttemptsRemaining(value: number) {
    game.attemptsRemaining = value;
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
    game.date = new Date();
    history.push(game);

    localStorage.setItem("_GAME_HISTORY", JSON.stringify(history));
  }

  function resetGame() {
    game.totalAttempts = 0;
    game.attemptsRemaining = 0;
    game.sunkenShipFleet = [];
    game.win = false;
    game.over = false;
    game.date = "";
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
    setTotalAttempts,
    setAttemptsRemaining,
    setWin,
    setGameOver,
    resetGame,
  });
}
