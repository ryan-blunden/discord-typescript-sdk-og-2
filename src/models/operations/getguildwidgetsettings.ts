/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type GetGuildWidgetSettingsRequest = {
  guildId: string;
};

/** @internal */
export const GetGuildWidgetSettingsRequest$inboundSchema: z.ZodType<
  GetGuildWidgetSettingsRequest,
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
export type GetGuildWidgetSettingsRequest$Outbound = {
  guild_id: string;
};

/** @internal */
export const GetGuildWidgetSettingsRequest$outboundSchema: z.ZodType<
  GetGuildWidgetSettingsRequest$Outbound,
  z.ZodTypeDef,
  GetGuildWidgetSettingsRequest
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
export namespace GetGuildWidgetSettingsRequest$ {
  /** @deprecated use `GetGuildWidgetSettingsRequest$inboundSchema` instead. */
  export const inboundSchema = GetGuildWidgetSettingsRequest$inboundSchema;
  /** @deprecated use `GetGuildWidgetSettingsRequest$outboundSchema` instead. */
  export const outboundSchema = GetGuildWidgetSettingsRequest$outboundSchema;
  /** @deprecated use `GetGuildWidgetSettingsRequest$Outbound` instead. */
  export type Outbound = GetGuildWidgetSettingsRequest$Outbound;
}
