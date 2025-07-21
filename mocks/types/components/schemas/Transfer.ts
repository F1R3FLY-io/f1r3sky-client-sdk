import type { Direction } from "./Direction.js";

export type Transfer = {
  id: string;
  direction: Direction;
  date: string;
  amount: number;
  to_address: string;
  cost: number;
};
