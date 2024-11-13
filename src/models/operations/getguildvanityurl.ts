/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetGuildVanityUrlRequest = {
  guildId: string;
};

/** @internal */
export const GetGuildVanityUrlRequest$inboundSchema: z.ZodType<
  GetGuildVanityUrlRequest,
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
export type GetGuildVanityUrlRequest$Outbound = {
  guild_id: string;
};

/** @internal */
export const GetGuildVanityUrlRequest$outboundSchema: z.ZodType<
  GetGuildVanityUrlRequest$Outbound,
  z.ZodTypeDef,
  GetGuildVanityUrlRequest
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
export namespace GetGuildVanityUrlRequest$ {
  /** @deprecated use `GetGuildVanityUrlRequest$inboundSchema` instead. */
  export const inboundSchema = GetGuildVanityUrlRequest$inboundSchema;
  /** @deprecated use `GetGuildVanityUrlRequest$outboundSchema` instead. */
  export const outboundSchema = GetGuildVanityUrlRequest$outboundSchema;
  /** @deprecated use `GetGuildVanityUrlRequest$Outbound` instead. */
  export type Outbound = GetGuildVanityUrlRequest$Outbound;
}
