/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type AddThreadMemberRequest = {
  channelId: string;
  userId: string;
};

/** @internal */
export const AddThreadMemberRequest$inboundSchema: z.ZodType<
  AddThreadMemberRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
  user_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
    "user_id": "userId",
  });
});

/** @internal */
export type AddThreadMemberRequest$Outbound = {
  channel_id: string;
  user_id: string;
};

/** @internal */
export const AddThreadMemberRequest$outboundSchema: z.ZodType<
  AddThreadMemberRequest$Outbound,
  z.ZodTypeDef,
  AddThreadMemberRequest
> = z.object({
  channelId: z.string(),
  userId: z.string(),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddThreadMemberRequest$ {
  /** @deprecated use `AddThreadMemberRequest$inboundSchema` instead. */
  export const inboundSchema = AddThreadMemberRequest$inboundSchema;
  /** @deprecated use `AddThreadMemberRequest$outboundSchema` instead. */
  export const outboundSchema = AddThreadMemberRequest$outboundSchema;
  /** @deprecated use `AddThreadMemberRequest$Outbound` instead. */
  export type Outbound = AddThreadMemberRequest$Outbound;
}
