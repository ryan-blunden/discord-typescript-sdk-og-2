/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GuildChannelLocation = {
  id: string;
  kind?: "gc" | undefined;
  channelId: string;
  guildId: string;
};

/** @internal */
export const GuildChannelLocation$inboundSchema: z.ZodType<
  GuildChannelLocation,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  kind: z.literal("gc").optional(),
  channel_id: z.string(),
  guild_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
    "guild_id": "guildId",
  });
});

/** @internal */
export type GuildChannelLocation$Outbound = {
  id: string;
  kind: "gc";
  channel_id: string;
  guild_id: string;
};

/** @internal */
export const GuildChannelLocation$outboundSchema: z.ZodType<
  GuildChannelLocation$Outbound,
  z.ZodTypeDef,
  GuildChannelLocation
> = z.object({
  id: z.string(),
  kind: z.literal("gc").default("gc" as const),
  channelId: z.string(),
  guildId: z.string(),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
    guildId: "guild_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GuildChannelLocation$ {
  /** @deprecated use `GuildChannelLocation$inboundSchema` instead. */
  export const inboundSchema = GuildChannelLocation$inboundSchema;
  /** @deprecated use `GuildChannelLocation$outboundSchema` instead. */
  export const outboundSchema = GuildChannelLocation$outboundSchema;
  /** @deprecated use `GuildChannelLocation$Outbound` instead. */
  export type Outbound = GuildChannelLocation$Outbound;
}

export function guildChannelLocationToJSON(
  guildChannelLocation: GuildChannelLocation,
): string {
  return JSON.stringify(
    GuildChannelLocation$outboundSchema.parse(guildChannelLocation),
  );
}

export function guildChannelLocationFromJSON(
  jsonString: string,
): SafeParseResult<GuildChannelLocation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GuildChannelLocation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GuildChannelLocation' from JSON`,
  );
}
