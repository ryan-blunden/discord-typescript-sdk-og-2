/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  MessageReactionEmojiResponse,
  MessageReactionEmojiResponse$inboundSchema,
  MessageReactionEmojiResponse$Outbound,
  MessageReactionEmojiResponse$outboundSchema,
} from "./messagereactionemojiresponse.js";

export type PollMediaResponse = {
  text?: string | null | undefined;
  emoji?: MessageReactionEmojiResponse | null | undefined;
};

/** @internal */
export const PollMediaResponse$inboundSchema: z.ZodType<
  PollMediaResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  text: z.nullable(z.string()).optional(),
  emoji: z.nullable(MessageReactionEmojiResponse$inboundSchema).optional(),
});

/** @internal */
export type PollMediaResponse$Outbound = {
  text?: string | null | undefined;
  emoji?: MessageReactionEmojiResponse$Outbound | null | undefined;
};

/** @internal */
export const PollMediaResponse$outboundSchema: z.ZodType<
  PollMediaResponse$Outbound,
  z.ZodTypeDef,
  PollMediaResponse
> = z.object({
  text: z.nullable(z.string()).optional(),
  emoji: z.nullable(MessageReactionEmojiResponse$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PollMediaResponse$ {
  /** @deprecated use `PollMediaResponse$inboundSchema` instead. */
  export const inboundSchema = PollMediaResponse$inboundSchema;
  /** @deprecated use `PollMediaResponse$outboundSchema` instead. */
  export const outboundSchema = PollMediaResponse$outboundSchema;
  /** @deprecated use `PollMediaResponse$Outbound` instead. */
  export type Outbound = PollMediaResponse$Outbound;
}

export function pollMediaResponseToJSON(
  pollMediaResponse: PollMediaResponse,
): string {
  return JSON.stringify(
    PollMediaResponse$outboundSchema.parse(pollMediaResponse),
  );
}

export function pollMediaResponseFromJSON(
  jsonString: string,
): SafeParseResult<PollMediaResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PollMediaResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PollMediaResponse' from JSON`,
  );
}
