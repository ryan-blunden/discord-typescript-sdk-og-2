/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type JoinThreadRequest = {
  channelId: string;
};

/** @internal */
export const JoinThreadRequest$inboundSchema: z.ZodType<
  JoinThreadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
  });
});

/** @internal */
export type JoinThreadRequest$Outbound = {
  channel_id: string;
};

/** @internal */
export const JoinThreadRequest$outboundSchema: z.ZodType<
  JoinThreadRequest$Outbound,
  z.ZodTypeDef,
  JoinThreadRequest
> = z.object({
  channelId: z.string(),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JoinThreadRequest$ {
  /** @deprecated use `JoinThreadRequest$inboundSchema` instead. */
  export const inboundSchema = JoinThreadRequest$inboundSchema;
  /** @deprecated use `JoinThreadRequest$outboundSchema` instead. */
  export const outboundSchema = JoinThreadRequest$outboundSchema;
  /** @deprecated use `JoinThreadRequest$Outbound` instead. */
  export type Outbound = JoinThreadRequest$Outbound;
}
