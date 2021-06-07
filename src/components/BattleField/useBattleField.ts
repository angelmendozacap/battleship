/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Ref, ref } from "@vue/reactivity";
import { Cell } from "@/types/Cell";
import { computed, onMounted } from "@vue/runtime-core";
import { shipTypes } from "@/data/shipTypes";
import { Directions, Ship } from "@/types/Ship";
import { useConfig } from "@/store/config";
import { useGame } from "@/store/game";

export function useBattleField() {
  const boardSize = ref(10);
  const cells: Ref<Cell[]> = ref([]);
  const shipArray = computed(() => shipTypes(boardSize.value));
  const {
    saveGameHistory,
    addSunkenShip,
    setNumberOfAttempts,
    setNumberOfAttemptsUsed,
    setWin,
    setGameOver,
  } = useGame();
  const { setAttempts, config } = useConfig();

  function createBoard() {
    for (let i = 0; i < boardSize.value * boardSize.value; i++) {
      cells.value.push({
        taken: false,
        boom: false,
        miss: false,
      });
    }
  }

  function generateShip(ship: Ship) {
    const directionTypes = Object.keys(ship.directions);
    const randomDirection = Math.floor(Math.random() * directionTypes.length);
    const verticalOrHorizontal = directionTypes[
      randomDirection
    ] as keyof Directions;
    const current: number[] = ship.directions[verticalOrHorizontal];
    let direction = 0;
    if (randomDirection === 0) direction = 1;
    if (randomDirection === 1) direction = 10;
    const randomStart = Math.abs(
      Math.floor(
        Math.random() * cells.value.length - current.length * direction
      )
    );

    const isTaken = current.some(
      (index) => cells.value[randomStart + index].taken
    );
    const isAtRightEdge = current.some(
      (index) => (randomStart + index) % boardSize.value === boardSize.value - 1
    );
    const isAtLeftEdge = current.some(
      (index) => (randomStart + index) % boardSize.value === 0
    );

    if (!isTaken && !isAtRightEdge && !isAtLeftEdge)
      current.forEach((index) => {
        cells.value[randomStart + index].taken = true;
        cells.value[randomStart + index].shipName = ship.name.toLowerCase();
      });
    else generateShip(ship);
  }

  const destroyerCount = ref(0);
  const submarineCount = ref(0);
  const cruiserCount = ref(0);
  const battleshipCount = ref(0);

  function setCellAttacked(index: number) {
    const cell = cells.value[index];
    const { taken, shipName } = cell;

    const leftAttempts = config.numberOfAttempts - 1;
    setAttempts(leftAttempts);
    if (config.numberOfAttempts > 0) {
      if (taken) {
        if (shipName === "destroyer") destroyerCount.value++;
        if (shipName === "submarine") submarineCount.value++;
        if (shipName === "cruiser") cruiserCount.value++;
        if (shipName === "battleshipCount") battleshipCount.value++;

        cell.boom = true;
      } else {
        cell.miss = true;
      }

      checkForWins();
    } else {
      gameOver(false);
    }
  }

  function checkForWins() {
    shipArray.value.forEach((ship) => {
      const { name, size, count } = ship;
      const totalValue = size * count;
      if (name === "destroyer" && destroyerCount.value === totalValue) {
        destroyerCount.value = 10;
        addSunkenShip(ship);
      }
      if (name === "submarine" && submarineCount.value === totalValue) {
        submarineCount.value = 10;
        addSunkenShip(ship);
      }
      if (name === "cruiser" && cruiserCount.value === totalValue) {
        cruiserCount.value = 10;
        addSunkenShip(ship);
      }
      if (name === "battleshipCount" && battleshipCount.value === totalValue) {
        battleshipCount.value = 10;
        addSunkenShip(ship);
      }
    });

    if (
      destroyerCount.value +
        submarineCount.value +
        cruiserCount.value +
        battleshipCount.value ===
      40
    ) {
      gameOver(true);
    }
  }

  function gameOver(win: boolean) {
    setGameOver(true);
    setWin(win);
    setNumberOfAttemptsUsed(config.numberOfAttempts);
    saveGameHistory();
  }

  onMounted(() => {
    createBoard();
    shipArray.value.forEach((ship) => {
      for (let c = 0; c < ship.count; c++) {
        generateShip(ship);
      }
    });

    setNumberOfAttempts(config.numberOfAttempts);
  });

  return {
    cells,
    boardSize,
    createBoard,
    generateShip,
    setCellAttacked,
    shipArray,
  };
}