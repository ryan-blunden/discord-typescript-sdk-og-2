/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListPinnedMessagesRequest = {
  channelId: string;
};

/** @internal */
export const ListPinnedMessagesRequest$inboundSchema: z.ZodType<
  ListPinnedMessagesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
  });
});

/** @internal */
export type ListPinnedMessagesRequest$Outbound = {
  channel_id: string;
};

/** @internal */
export const ListPinnedMessagesRequest$outboundSchema: z.ZodType<
  ListPinnedMessagesRequest$Outbound,
  z.ZodTypeDef,
  ListPinnedMessagesRequest
> = z.object({
  channelId: z.string(),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPinnedMessagesRequest$ {
  /** @deprecated use `ListPinnedMessagesRequest$inboundSchema` instead. */
  export const inboundSchema = ListPinnedMessagesRequest$inboundSchema;
  /** @deprecated use `ListPinnedMessagesRequest$outboundSchema` instead. */
  export const outboundSchema = ListPinnedMessagesRequest$outboundSchema;
  /** @deprecated use `ListPinnedMessagesRequest$Outbound` instead. */
  export type Outbound = ListPinnedMessagesRequest$Outbound;
}

export function listPinnedMessagesRequestToJSON(
  listPinnedMessagesRequest: ListPinnedMessagesRequest,
): string {
  return JSON.stringify(
    ListPinnedMessagesRequest$outboundSchema.parse(listPinnedMessagesRequest),
  );
}

export function listPinnedMessagesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListPinnedMessagesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListPinnedMessagesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListPinnedMessagesRequest' from JSON`,
  );
}
