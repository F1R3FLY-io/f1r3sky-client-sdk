import type { HTTP_GET } from "../../../types/paths/api/ai-agents/{address}.types.js";

export const GET: HTTP_GET = ($) => {
  return $.response[200].random();
};
