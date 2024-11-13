/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ListMyGuildsSecurity = {
  botToken?: string | undefined;
};

export type ListMyGuildsRequest = {
  before?: string | undefined;
  after?: string | undefined;
  limit?: number | undefined;
  withCounts?: boolean | undefined;
};

/** @internal */
export const ListMyGuildsSecurity$inboundSchema: z.ZodType<
  ListMyGuildsSecurity,
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
export type ListMyGuildsSecurity$Outbound = {
  BotToken?: string | undefined;
};

/** @internal */
export const ListMyGuildsSecurity$outboundSchema: z.ZodType<
  ListMyGuildsSecurity$Outbound,
  z.ZodTypeDef,
  ListMyGuildsSecurity
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
export namespace ListMyGuildsSecurity$ {
  /** @deprecated use `ListMyGuildsSecurity$inboundSchema` instead. */
  export const inboundSchema = ListMyGuildsSecurity$inboundSchema;
  /** @deprecated use `ListMyGuildsSecurity$outboundSchema` instead. */
  export const outboundSchema = ListMyGuildsSecurity$outboundSchema;
  /** @deprecated use `ListMyGuildsSecurity$Outbound` instead. */
  export type Outbound = ListMyGuildsSecurity$Outbound;
}

/** @internal */
export const ListMyGuildsRequest$inboundSchema: z.ZodType<
  ListMyGuildsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  before: z.string().optional(),
  after: z.string().optional(),
  limit: z.number().int().optional(),
  with_counts: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "with_counts": "withCounts",
  });
});

/** @internal */
export type ListMyGuildsRequest$Outbound = {
  before?: string | undefined;
  after?: string | undefined;
  limit?: number | undefined;
  with_counts?: boolean | undefined;
};

/** @internal */
export const ListMyGuildsRequest$outboundSchema: z.ZodType<
  ListMyGuildsRequest$Outbound,
  z.ZodTypeDef,
  ListMyGuildsRequest
> = z.object({
  before: z.string().optional(),
  after: z.string().optional(),
  limit: z.number().int().optional(),
  withCounts: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    withCounts: "with_counts",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListMyGuildsRequest$ {
  /** @deprecated use `ListMyGuildsRequest$inboundSchema` instead. */
  export const inboundSchema = ListMyGuildsRequest$inboundSchema;
  /** @deprecated use `ListMyGuildsRequest$outboundSchema` instead. */
  export const outboundSchema = ListMyGuildsRequest$outboundSchema;
  /** @deprecated use `ListMyGuildsRequest$Outbound` instead. */
  export type Outbound = ListMyGuildsRequest$Outbound;
}
