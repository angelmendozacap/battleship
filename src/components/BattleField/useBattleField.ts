/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Ref, ref } from "@vue/reactivity";
import { Cell } from "@/types/Cell";
import { computed, onMounted } from "@vue/runtime-core";
import { shipTypes } from "@/data/shipTypes";
import { Directions, Ship, ShipNames } from "@/types/Ship";
import { useConfig } from "@/store/config";
import { useGame } from "@/store/game";

export function useBattleField() {
  const boardSize = ref(10);
  const cells: Ref<Cell[]> = ref([]);
  const shipArray = computed(() => shipTypes(boardSize.value));
  const {
    saveGameHistory,
    addSunkenShip,
    setTotalAttempts,
    setAttemptsRemaining,
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
        cells.value[randomStart + index].ship = ship;
      });
    else generateShip(ship);
  }

  const destroyerCount = ref(0);
  const submarineCount = ref(0);
  const cruiserCount = ref(0);
  const battleshipCount = ref(0);

  function setCellAttacked(index: number) {
    const cell = cells.value[index];
    const { taken, ship } = cell;

    const leftAttempts = config.numberOfAttempts - 1;
    setAttempts(leftAttempts);
    if (config.numberOfAttempts > 0) {
      if (taken) {
        if (ship?.name === ShipNames.DESTROYER) destroyerCount.value++;
        if (ship?.name === ShipNames.SUBMARINE) submarineCount.value++;
        if (ship?.name === ShipNames.CRUISER) cruiserCount.value++;
        if (ship?.name === ShipNames.BATTLESHIP) battleshipCount.value++;

        cell.boom = true;
        checkSunkenShips(cell);
      } else {
        cell.miss = true;
      }

      checkForWins();
    } else {
      gameOver(false);
    }
  }

  const sunkenShipsInfo = ref({
    info: "",
    destroyed: false,
  });

  function checkSunkenShips(cell: Cell) {
    if (cell.taken && cell.ship) {
      sunkenShipsInfo.value.info = `${cell.ship?.name
        .toString()
        .toUpperCase()} atacado`;

      const sunkenShips = cells.value.filter(
        (c) => c.ship?.name === cell.ship?.name && c.boom
      );
      const size = cell.ship?.size ?? 1;
      if (sunkenShips.length % size === 0) {
        sunkenShipsInfo.value.destroyed = true;
        sunkenShipsInfo.value.info = `${cell.ship?.name
          .toString()
          .toUpperCase()} destruido`;
      }
    }
  }

  function checkForWins() {
    const sunkScore = 10;

    shipArray.value.forEach((ship) => {
      const { name, size, count } = ship;
      const totalValue = size * count;
      if (name === ShipNames.DESTROYER && destroyerCount.value === totalValue) {
        addSunkenShip(name);
        destroyerCount.value = sunkScore;
      }
      if (name === ShipNames.SUBMARINE && submarineCount.value === totalValue) {
        submarineCount.value = sunkScore;
        addSunkenShip(name);
      }
      if (name === ShipNames.CRUISER && cruiserCount.value === totalValue) {
        cruiserCount.value = sunkScore;
        addSunkenShip(name);
      }
      if (
        name === ShipNames.BATTLESHIP &&
        battleshipCount.value === totalValue
      ) {
        battleshipCount.value = sunkScore;
        addSunkenShip(name);
      }
    });

    if (
      destroyerCount.value +
        submarineCount.value +
        cruiserCount.value +
        battleshipCount.value ===
      sunkScore * 4
    ) {
      gameOver(true);
    }
  }

  function gameOver(win: boolean) {
    setGameOver(true);
    setWin(win);
    setAttemptsRemaining(config.numberOfAttempts);
    saveGameHistory();
  }

  onMounted(() => {
    createBoard();
    shipArray.value.forEach((ship) => {
      for (let c = 0; c < ship.count; c++) {
        generateShip(ship);
      }
    });

    setTotalAttempts(config.numberOfAttempts);
  });

  return {
    cells,
    boardSize,
    sunkenShipsInfo,
    createBoard,
    generateShip,
    setCellAttacked,
    shipArray,
  };
}
