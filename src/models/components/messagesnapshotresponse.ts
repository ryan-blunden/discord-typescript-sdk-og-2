/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  MinimalContentMessageResponse,
  MinimalContentMessageResponse$inboundSchema,
  MinimalContentMessageResponse$Outbound,
  MinimalContentMessageResponse$outboundSchema,
} from "./minimalcontentmessageresponse.js";

export type MessageSnapshotResponse = {
  message?: MinimalContentMessageResponse | null | undefined;
};

/** @internal */
export const MessageSnapshotResponse$inboundSchema: z.ZodType<
  MessageSnapshotResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.nullable(MinimalContentMessageResponse$inboundSchema).optional(),
});

/** @internal */
export type MessageSnapshotResponse$Outbound = {
  message?: MinimalContentMessageResponse$Outbound | null | undefined;
};

/** @internal */
export const MessageSnapshotResponse$outboundSchema: z.ZodType<
  MessageSnapshotResponse$Outbound,
  z.ZodTypeDef,
  MessageSnapshotResponse
> = z.object({
  message: z.nullable(MinimalContentMessageResponse$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageSnapshotResponse$ {
  /** @deprecated use `MessageSnapshotResponse$inboundSchema` instead. */
  export const inboundSchema = MessageSnapshotResponse$inboundSchema;
  /** @deprecated use `MessageSnapshotResponse$outboundSchema` instead. */
  export const outboundSchema = MessageSnapshotResponse$outboundSchema;
  /** @deprecated use `MessageSnapshotResponse$Outbound` instead. */
  export type Outbound = MessageSnapshotResponse$Outbound;
}
