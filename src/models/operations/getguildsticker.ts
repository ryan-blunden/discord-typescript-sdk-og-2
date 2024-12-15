/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetGuildStickerRequest = {
  guildId: string;
  stickerId: string;
};

/** @internal */
export const GetGuildStickerRequest$inboundSchema: z.ZodType<
  GetGuildStickerRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  sticker_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "sticker_id": "stickerId",
  });
});

/** @internal */
export type GetGuildStickerRequest$Outbound = {
  guild_id: string;
  sticker_id: string;
};

/** @internal */
export const GetGuildStickerRequest$outboundSchema: z.ZodType<
  GetGuildStickerRequest$Outbound,
  z.ZodTypeDef,
  GetGuildStickerRequest
> = z.object({
  guildId: z.string(),
  stickerId: z.string(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    stickerId: "sticker_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGuildStickerRequest$ {
  /** @deprecated use `GetGuildStickerRequest$inboundSchema` instead. */
  export const inboundSchema = GetGuildStickerRequest$inboundSchema;
  /** @deprecated use `GetGuildStickerRequest$outboundSchema` instead. */
  export const outboundSchema = GetGuildStickerRequest$outboundSchema;
  /** @deprecated use `GetGuildStickerRequest$Outbound` instead. */
  export type Outbound = GetGuildStickerRequest$Outbound;
}

export function getGuildStickerRequestToJSON(
  getGuildStickerRequest: GetGuildStickerRequest,
): string {
  return JSON.stringify(
    GetGuildStickerRequest$outboundSchema.parse(getGuildStickerRequest),
  );
}

export function getGuildStickerRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetGuildStickerRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetGuildStickerRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetGuildStickerRequest' from JSON`,
  );
}
