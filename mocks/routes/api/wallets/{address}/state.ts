import type { HTTP_GET } from "../../../../types/paths/api/wallets/{address}/state.types.js";

export const GET: HTTP_GET = ($) => {
  return $.response[200].random();
};
