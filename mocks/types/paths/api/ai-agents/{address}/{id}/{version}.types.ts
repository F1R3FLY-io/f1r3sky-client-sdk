// This code was automatically generated from an OpenAPI description.
// Do not edit this file. Edit the OpenAPI file instead.
// For more information, see https://github.com/pmcelhaney/counterfact/blob/main/docs/faq-generated-code.md

import type { WideOperationArgument } from "../../../../../../types.ts";
import type { OmitValueWhenNever } from "../../../../../../types.ts";
import type { COUNTERFACT_RESPONSE } from "../../../../../../types.ts";
import type { Context } from "../../../../../../routes/_.context.ts";
import type { ResponseBuilderFactory } from "../../../../../../types.ts";
import type { Agent } from "../../../../../components/schemas/Agent.js";
import type { InternalError } from "../../../../../components/schemas/InternalError.js";

export type HTTP_GET = (
  $: OmitValueWhenNever<{
    query: never;
    path: { address: string; id: string; version: string };
    headers: never;
    body: never;
    context: Context;
    response: ResponseBuilderFactory<{
      200: {
        headers: never;
        requiredHeaders: never;
        content: {
          "application/json; charset=utf-8": {
            schema: Agent;
          };
        };
      };
      404: {
        headers: never;
        requiredHeaders: never;
        content: never;
      };
      500: {
        headers: never;
        requiredHeaders: never;
        content: {
          "application/json; charset=utf-8": {
            schema: InternalError;
          };
        };
      };
    }>;
    x: WideOperationArgument;
    proxy: (url: string) => COUNTERFACT_RESPONSE;
    user: never;
  }>,
) =>
  | {
      status: 200;
      contentType?: "application/json; charset=utf-8";
      body?: Agent;
    }
  | {
      status: 404;
    }
  | {
      status: 500;
      contentType?: "application/json; charset=utf-8";
      body?: InternalError;
    }
  | { status: 415; contentType: "text/plain"; body: string }
  | COUNTERFACT_RESPONSE
  | { ALL_REMAINING_HEADERS_ARE_OPTIONAL: COUNTERFACT_RESPONSE };
