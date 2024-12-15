/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListGuildSoundboardSoundsRequest = {
  guildId: string;
};

/** @internal */
export const ListGuildSoundboardSoundsRequest$inboundSchema: z.ZodType<
  ListGuildSoundboardSoundsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
  });
});

/** @internal */
export type ListGuildSoundboardSoundsRequest$Outbound = {
  guild_id: string;
};

/** @internal */
export const ListGuildSoundboardSoundsRequest$outboundSchema: z.ZodType<
  ListGuildSoundboardSoundsRequest$Outbound,
  z.ZodTypeDef,
  ListGuildSoundboardSoundsRequest
> = z.object({
  guildId: z.string(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListGuildSoundboardSoundsRequest$ {
  /** @deprecated use `ListGuildSoundboardSoundsRequest$inboundSchema` instead. */
  export const inboundSchema = ListGuildSoundboardSoundsRequest$inboundSchema;
  /** @deprecated use `ListGuildSoundboardSoundsRequest$outboundSchema` instead. */
  export const outboundSchema = ListGuildSoundboardSoundsRequest$outboundSchema;
  /** @deprecated use `ListGuildSoundboardSoundsRequest$Outbound` instead. */
  export type Outbound = ListGuildSoundboardSoundsRequest$Outbound;
}

export function listGuildSoundboardSoundsRequestToJSON(
  listGuildSoundboardSoundsRequest: ListGuildSoundboardSoundsRequest,
): string {
  return JSON.stringify(
    ListGuildSoundboardSoundsRequest$outboundSchema.parse(
      listGuildSoundboardSoundsRequest,
    ),
  );
}

export function listGuildSoundboardSoundsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListGuildSoundboardSoundsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListGuildSoundboardSoundsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListGuildSoundboardSoundsRequest' from JSON`,
  );
}
