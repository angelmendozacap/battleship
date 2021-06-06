/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Ref, ref } from "@vue/reactivity";
import { Cell } from "@/types/Cell";
import { onMounted } from "@vue/runtime-core";
import { shipTypes } from "@/data/shipTypes";
import { Ship } from "@/types/Ship";
import { useConfig } from "@/store/config";

export function useGenerate() {
  const boardSize = ref(10);
  const cells: Ref<Cell[]> = ref([]);

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
    const randomDirection = Math.floor(Math.random() * ship.directions.length);
    const current = ship.directions[randomDirection];
    let direction = 0;
    if (randomDirection === 0) direction = 1;
    if (randomDirection === 1) direction = 10;
    const randomStart = Math.abs(
      Math.floor(
        Math.random() * cells.value.length -
          ship.directions[0].length * direction
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

  function setCellAttacked(index: number) {
    const { setAttempts, config } = useConfig();
    const leftAttempts = config.numberOfAttempts - 1;
    setAttempts(leftAttempts);
    console.log(index, config.numberOfAttempts);

    const cell = cells.value[index];
    const { taken } = cell;
    if (taken) {
      cell.boom = true;
    } else {
      cell.miss = true;
    }
  }

  const shipArray = shipTypes(boardSize.value);
  onMounted(() => {
    createBoard();
    shipArray.forEach((ship) => {
      for (let c = 0; c < ship.count; c++) {
        generateShip(ship);
      }
    });
  });

  return { cells, boardSize, createBoard, generateShip, setCellAttacked };
}
