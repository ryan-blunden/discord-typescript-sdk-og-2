/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ListGuildEmojisRequest = {
  guildId: string;
};

/** @internal */
export const ListGuildEmojisRequest$inboundSchema: z.ZodType<
  ListGuildEmojisRequest,
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
export type ListGuildEmojisRequest$Outbound = {
  guild_id: string;
};

/** @internal */
export const ListGuildEmojisRequest$outboundSchema: z.ZodType<
  ListGuildEmojisRequest$Outbound,
  z.ZodTypeDef,
  ListGuildEmojisRequest
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
export namespace ListGuildEmojisRequest$ {
  /** @deprecated use `ListGuildEmojisRequest$inboundSchema` instead. */
  export const inboundSchema = ListGuildEmojisRequest$inboundSchema;
  /** @deprecated use `ListGuildEmojisRequest$outboundSchema` instead. */
  export const outboundSchema = ListGuildEmojisRequest$outboundSchema;
  /** @deprecated use `ListGuildEmojisRequest$Outbound` instead. */
  export type Outbound = ListGuildEmojisRequest$Outbound;
}
