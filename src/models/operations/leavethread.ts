/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type LeaveThreadRequest = {
  channelId: string;
};

/** @internal */
export const LeaveThreadRequest$inboundSchema: z.ZodType<
  LeaveThreadRequest,
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
export type LeaveThreadRequest$Outbound = {
  channel_id: string;
};

/** @internal */
export const LeaveThreadRequest$outboundSchema: z.ZodType<
  LeaveThreadRequest$Outbound,
  z.ZodTypeDef,
  LeaveThreadRequest
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
export namespace LeaveThreadRequest$ {
  /** @deprecated use `LeaveThreadRequest$inboundSchema` instead. */
  export const inboundSchema = LeaveThreadRequest$inboundSchema;
  /** @deprecated use `LeaveThreadRequest$outboundSchema` instead. */
  export const outboundSchema = LeaveThreadRequest$outboundSchema;
  /** @deprecated use `LeaveThreadRequest$Outbound` instead. */
  export type Outbound = LeaveThreadRequest$Outbound;
}
