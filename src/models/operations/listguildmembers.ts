/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListGuildMembersRequest = {
  guildId: string;
  limit?: number | undefined;
  after?: number | undefined;
};

/** @internal */
export const ListGuildMembersRequest$inboundSchema: z.ZodType<
  ListGuildMembersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  limit: z.number().int().optional(),
  after: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
  });
});

/** @internal */
export type ListGuildMembersRequest$Outbound = {
  guild_id: string;
  limit?: number | undefined;
  after?: number | undefined;
};

/** @internal */
export const ListGuildMembersRequest$outboundSchema: z.ZodType<
  ListGuildMembersRequest$Outbound,
  z.ZodTypeDef,
  ListGuildMembersRequest
> = z.object({
  guildId: z.string(),
  limit: z.number().int().optional(),
  after: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListGuildMembersRequest$ {
  /** @deprecated use `ListGuildMembersRequest$inboundSchema` instead. */
  export const inboundSchema = ListGuildMembersRequest$inboundSchema;
  /** @deprecated use `ListGuildMembersRequest$outboundSchema` instead. */
  export const outboundSchema = ListGuildMembersRequest$outboundSchema;
  /** @deprecated use `ListGuildMembersRequest$Outbound` instead. */
  export type Outbound = ListGuildMembersRequest$Outbound;
}

export function listGuildMembersRequestToJSON(
  listGuildMembersRequest: ListGuildMembersRequest,
): string {
  return JSON.stringify(
    ListGuildMembersRequest$outboundSchema.parse(listGuildMembersRequest),
  );
}

export function listGuildMembersRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListGuildMembersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListGuildMembersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListGuildMembersRequest' from JSON`,
  );
}
