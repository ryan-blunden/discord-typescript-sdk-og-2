/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type PollExpireRequest = {
  channelId: string;
  messageId: string;
};

/** @internal */
export const PollExpireRequest$inboundSchema: z.ZodType<
  PollExpireRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
  message_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
    "message_id": "messageId",
  });
});

/** @internal */
export type PollExpireRequest$Outbound = {
  channel_id: string;
  message_id: string;
};

/** @internal */
export const PollExpireRequest$outboundSchema: z.ZodType<
  PollExpireRequest$Outbound,
  z.ZodTypeDef,
  PollExpireRequest
> = z.object({
  channelId: z.string(),
  messageId: z.string(),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
    messageId: "message_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PollExpireRequest$ {
  /** @deprecated use `PollExpireRequest$inboundSchema` instead. */
  export const inboundSchema = PollExpireRequest$inboundSchema;
  /** @deprecated use `PollExpireRequest$outboundSchema` instead. */
  export const outboundSchema = PollExpireRequest$outboundSchema;
  /** @deprecated use `PollExpireRequest$Outbound` instead. */
  export type Outbound = PollExpireRequest$Outbound;
}
