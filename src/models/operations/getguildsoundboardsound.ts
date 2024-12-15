/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetGuildSoundboardSoundRequest = {
  guildId: string;
  soundId: string;
};

/** @internal */
export const GetGuildSoundboardSoundRequest$inboundSchema: z.ZodType<
  GetGuildSoundboardSoundRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  sound_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "sound_id": "soundId",
  });
});

/** @internal */
export type GetGuildSoundboardSoundRequest$Outbound = {
  guild_id: string;
  sound_id: string;
};

/** @internal */
export const GetGuildSoundboardSoundRequest$outboundSchema: z.ZodType<
  GetGuildSoundboardSoundRequest$Outbound,
  z.ZodTypeDef,
  GetGuildSoundboardSoundRequest
> = z.object({
  guildId: z.string(),
  soundId: z.string(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    soundId: "sound_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGuildSoundboardSoundRequest$ {
  /** @deprecated use `GetGuildSoundboardSoundRequest$inboundSchema` instead. */
  export const inboundSchema = GetGuildSoundboardSoundRequest$inboundSchema;
  /** @deprecated use `GetGuildSoundboardSoundRequest$outboundSchema` instead. */
  export const outboundSchema = GetGuildSoundboardSoundRequest$outboundSchema;
  /** @deprecated use `GetGuildSoundboardSoundRequest$Outbound` instead. */
  export type Outbound = GetGuildSoundboardSoundRequest$Outbound;
}

export function getGuildSoundboardSoundRequestToJSON(
  getGuildSoundboardSoundRequest: GetGuildSoundboardSoundRequest,
): string {
  return JSON.stringify(
    GetGuildSoundboardSoundRequest$outboundSchema.parse(
      getGuildSoundboardSoundRequest,
    ),
  );
}

export function getGuildSoundboardSoundRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetGuildSoundboardSoundRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetGuildSoundboardSoundRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetGuildSoundboardSoundRequest' from JSON`,
  );
}
