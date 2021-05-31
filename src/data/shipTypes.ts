import { Ship } from "../types/Ship";

export const shipTypes = (width: number): Ship[] => [
  {
    id: 1,
    name: "destroyer",
    directions: [[0], [0]],
    count: 4,
  },
  {
    id: 2,
    name: "submarine",
    directions: [
      [0, 1],
      [0, width],
    ],
    count: 3,
  },
  {
    id: 3,
    name: "cruiser",
    directions: [
      [0, 1, 2],
      [0, width, width * 2],
    ],
    count: 2,
  },
  {
    id: 4,
    name: "battleship",
    directions: [
      [0, 1, 2, 3],
      [0, width, width * 2, width * 3],
    ],
    count: 1,
  },
];
