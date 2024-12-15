/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  MessageReactionCountDetailsResponse,
  MessageReactionCountDetailsResponse$inboundSchema,
  MessageReactionCountDetailsResponse$Outbound,
  MessageReactionCountDetailsResponse$outboundSchema,
} from "./messagereactioncountdetailsresponse.js";
import {
  MessageReactionEmojiResponse,
  MessageReactionEmojiResponse$inboundSchema,
  MessageReactionEmojiResponse$Outbound,
  MessageReactionEmojiResponse$outboundSchema,
} from "./messagereactionemojiresponse.js";

export type MessageReactionResponse = {
  emoji: MessageReactionEmojiResponse;
  count: number;
  countDetails: MessageReactionCountDetailsResponse;
  burstColors: Array<string>;
  meBurst: boolean;
  me: boolean;
};

/** @internal */
export const MessageReactionResponse$inboundSchema: z.ZodType<
  MessageReactionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  emoji: MessageReactionEmojiResponse$inboundSchema,
  count: z.number().int(),
  count_details: MessageReactionCountDetailsResponse$inboundSchema,
  burst_colors: z.array(z.string()),
  me_burst: z.boolean(),
  me: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "count_details": "countDetails",
    "burst_colors": "burstColors",
    "me_burst": "meBurst",
  });
});

/** @internal */
export type MessageReactionResponse$Outbound = {
  emoji: MessageReactionEmojiResponse$Outbound;
  count: number;
  count_details: MessageReactionCountDetailsResponse$Outbound;
  burst_colors: Array<string>;
  me_burst: boolean;
  me: boolean;
};

/** @internal */
export const MessageReactionResponse$outboundSchema: z.ZodType<
  MessageReactionResponse$Outbound,
  z.ZodTypeDef,
  MessageReactionResponse
> = z.object({
  emoji: MessageReactionEmojiResponse$outboundSchema,
  count: z.number().int(),
  countDetails: MessageReactionCountDetailsResponse$outboundSchema,
  burstColors: z.array(z.string()),
  meBurst: z.boolean(),
  me: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    countDetails: "count_details",
    burstColors: "burst_colors",
    meBurst: "me_burst",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageReactionResponse$ {
  /** @deprecated use `MessageReactionResponse$inboundSchema` instead. */
  export const inboundSchema = MessageReactionResponse$inboundSchema;
  /** @deprecated use `MessageReactionResponse$outboundSchema` instead. */
  export const outboundSchema = MessageReactionResponse$outboundSchema;
  /** @deprecated use `MessageReactionResponse$Outbound` instead. */
  export type Outbound = MessageReactionResponse$Outbound;
}

export function messageReactionResponseToJSON(
  messageReactionResponse: MessageReactionResponse,
): string {
  return JSON.stringify(
    MessageReactionResponse$outboundSchema.parse(messageReactionResponse),
  );
}

export function messageReactionResponseFromJSON(
  jsonString: string,
): SafeParseResult<MessageReactionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MessageReactionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MessageReactionResponse' from JSON`,
  );
}
