/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type MessageReactionCountDetailsResponse = {
  burst: number;
  normal: number;
};

/** @internal */
export const MessageReactionCountDetailsResponse$inboundSchema: z.ZodType<
  MessageReactionCountDetailsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  burst: z.number().int(),
  normal: z.number().int(),
});

/** @internal */
export type MessageReactionCountDetailsResponse$Outbound = {
  burst: number;
  normal: number;
};

/** @internal */
export const MessageReactionCountDetailsResponse$outboundSchema: z.ZodType<
  MessageReactionCountDetailsResponse$Outbound,
  z.ZodTypeDef,
  MessageReactionCountDetailsResponse
> = z.object({
  burst: z.number().int(),
  normal: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageReactionCountDetailsResponse$ {
  /** @deprecated use `MessageReactionCountDetailsResponse$inboundSchema` instead. */
  export const inboundSchema =
    MessageReactionCountDetailsResponse$inboundSchema;
  /** @deprecated use `MessageReactionCountDetailsResponse$outboundSchema` instead. */
  export const outboundSchema =
    MessageReactionCountDetailsResponse$outboundSchema;
  /** @deprecated use `MessageReactionCountDetailsResponse$Outbound` instead. */
  export type Outbound = MessageReactionCountDetailsResponse$Outbound;
}
