/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ListGuildChannelsSecurity = {
  botToken?: string | undefined;
};

export type ListGuildChannelsRequest = {
  guildId: string;
};

export type ListGuildChannelsResponseBody =
  | components.PrivateChannelResponse
  | components.PrivateGroupChannelResponse
  | components.ThreadResponse
  | components.GuildChannelResponse;

/** @internal */
export const ListGuildChannelsSecurity$inboundSchema: z.ZodType<
  ListGuildChannelsSecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  BotToken: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "BotToken": "botToken",
  });
});

/** @internal */
export type ListGuildChannelsSecurity$Outbound = {
  BotToken?: string | undefined;
};

/** @internal */
export const ListGuildChannelsSecurity$outboundSchema: z.ZodType<
  ListGuildChannelsSecurity$Outbound,
  z.ZodTypeDef,
  ListGuildChannelsSecurity
> = z.object({
  botToken: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    botToken: "BotToken",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListGuildChannelsSecurity$ {
  /** @deprecated use `ListGuildChannelsSecurity$inboundSchema` instead. */
  export const inboundSchema = ListGuildChannelsSecurity$inboundSchema;
  /** @deprecated use `ListGuildChannelsSecurity$outboundSchema` instead. */
  export const outboundSchema = ListGuildChannelsSecurity$outboundSchema;
  /** @deprecated use `ListGuildChannelsSecurity$Outbound` instead. */
  export type Outbound = ListGuildChannelsSecurity$Outbound;
}

/** @internal */
export const ListGuildChannelsRequest$inboundSchema: z.ZodType<
  ListGuildChannelsRequest,
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
export type ListGuildChannelsRequest$Outbound = {
  guild_id: string;
};

/** @internal */
export const ListGuildChannelsRequest$outboundSchema: z.ZodType<
  ListGuildChannelsRequest$Outbound,
  z.ZodTypeDef,
  ListGuildChannelsRequest
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
export namespace ListGuildChannelsRequest$ {
  /** @deprecated use `ListGuildChannelsRequest$inboundSchema` instead. */
  export const inboundSchema = ListGuildChannelsRequest$inboundSchema;
  /** @deprecated use `ListGuildChannelsRequest$outboundSchema` instead. */
  export const outboundSchema = ListGuildChannelsRequest$outboundSchema;
  /** @deprecated use `ListGuildChannelsRequest$Outbound` instead. */
  export type Outbound = ListGuildChannelsRequest$Outbound;
}

/** @internal */
export const ListGuildChannelsResponseBody$inboundSchema: z.ZodType<
  ListGuildChannelsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.PrivateChannelResponse$inboundSchema,
  components.PrivateGroupChannelResponse$inboundSchema,
  components.ThreadResponse$inboundSchema,
  components.GuildChannelResponse$inboundSchema,
]);

/** @internal */
export type ListGuildChannelsResponseBody$Outbound =
  | components.PrivateChannelResponse$Outbound
  | components.PrivateGroupChannelResponse$Outbound
  | components.ThreadResponse$Outbound
  | components.GuildChannelResponse$Outbound;

/** @internal */
export const ListGuildChannelsResponseBody$outboundSchema: z.ZodType<
  ListGuildChannelsResponseBody$Outbound,
  z.ZodTypeDef,
  ListGuildChannelsResponseBody
> = z.union([
  components.PrivateChannelResponse$outboundSchema,
  components.PrivateGroupChannelResponse$outboundSchema,
  components.ThreadResponse$outboundSchema,
  components.GuildChannelResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListGuildChannelsResponseBody$ {
  /** @deprecated use `ListGuildChannelsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListGuildChannelsResponseBody$inboundSchema;
  /** @deprecated use `ListGuildChannelsResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListGuildChannelsResponseBody$outboundSchema;
  /** @deprecated use `ListGuildChannelsResponseBody$Outbound` instead. */
  export type Outbound = ListGuildChannelsResponseBody$Outbound;
}
