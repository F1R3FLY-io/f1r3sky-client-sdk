import type { RequestStatus } from "./RequestStatus.js";

export type Request = {
  id: string;
  date: string;
  amount: number;
  status: RequestStatus;
};
