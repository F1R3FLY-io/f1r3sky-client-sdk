import type { Direction } from "./Direction.js";

export type Boost = {
  id: string;
  username: string;
  direction: Direction;
  date: string;
  amount: number;
  post: string;
};
