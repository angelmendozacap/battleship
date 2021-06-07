import { Ship } from "../types/Ship";

export const shipTypes = (width: number): Ship[] => [
  {
    id: 1,
    name: "destroyer",
    size: 1,
    directions: {
      horizontal: [0],
      vertical: [0],
    },
    count: 4,
  },
  {
    id: 2,
    name: "submarine",
    size: 2,
    directions: {
      horizontal: [0, 1],
      vertical: [0, width],
    },
    count: 3,
  },
  {
    id: 3,
    name: "cruiser",
    size: 3,
    directions: {
      horizontal: [0, 1, 2],
      vertical: [0, width, width * 2],
    },
    count: 2,
  },
  {
    id: 4,
    name: "battleship",
    size: 4,
    directions: {
      horizontal: [0, 1, 2, 3],
      vertical: [0, width, width * 2, width * 3],
    },
    count: 1,
  },
];
