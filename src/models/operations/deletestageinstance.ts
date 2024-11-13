/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type DeleteStageInstanceRequest = {
  channelId: string;
};

/** @internal */
export const DeleteStageInstanceRequest$inboundSchema: z.ZodType<
  DeleteStageInstanceRequest,
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
export type DeleteStageInstanceRequest$Outbound = {
  channel_id: string;
};

/** @internal */
export const DeleteStageInstanceRequest$outboundSchema: z.ZodType<
  DeleteStageInstanceRequest$Outbound,
  z.ZodTypeDef,
  DeleteStageInstanceRequest
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
export namespace DeleteStageInstanceRequest$ {
  /** @deprecated use `DeleteStageInstanceRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteStageInstanceRequest$inboundSchema;
  /** @deprecated use `DeleteStageInstanceRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteStageInstanceRequest$outboundSchema;
  /** @deprecated use `DeleteStageInstanceRequest$Outbound` instead. */
  export type Outbound = DeleteStageInstanceRequest$Outbound;
}
