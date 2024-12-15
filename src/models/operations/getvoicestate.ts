/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetVoiceStateRequest = {
  guildId: string;
  userId: string;
};

/** @internal */
export const GetVoiceStateRequest$inboundSchema: z.ZodType<
  GetVoiceStateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  user_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "user_id": "userId",
  });
});

/** @internal */
export type GetVoiceStateRequest$Outbound = {
  guild_id: string;
  user_id: string;
};

/** @internal */
export const GetVoiceStateRequest$outboundSchema: z.ZodType<
  GetVoiceStateRequest$Outbound,
  z.ZodTypeDef,
  GetVoiceStateRequest
> = z.object({
  guildId: z.string(),
  userId: z.string(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetVoiceStateRequest$ {
  /** @deprecated use `GetVoiceStateRequest$inboundSchema` instead. */
  export const inboundSchema = GetVoiceStateRequest$inboundSchema;
  /** @deprecated use `GetVoiceStateRequest$outboundSchema` instead. */
  export const outboundSchema = GetVoiceStateRequest$outboundSchema;
  /** @deprecated use `GetVoiceStateRequest$Outbound` instead. */
  export type Outbound = GetVoiceStateRequest$Outbound;
}

export function getVoiceStateRequestToJSON(
  getVoiceStateRequest: GetVoiceStateRequest,
): string {
  return JSON.stringify(
    GetVoiceStateRequest$outboundSchema.parse(getVoiceStateRequest),
  );
}

export function getVoiceStateRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetVoiceStateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetVoiceStateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetVoiceStateRequest' from JSON`,
  );
}
