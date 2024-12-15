/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PollEmoji = {
  id?: string | null | undefined;
  name?: string | null | undefined;
  animated?: boolean | null | undefined;
};

/** @internal */
export const PollEmoji$inboundSchema: z.ZodType<
  PollEmoji,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  animated: z.nullable(z.boolean()).optional(),
});

/** @internal */
export type PollEmoji$Outbound = {
  id?: string | null | undefined;
  name?: string | null | undefined;
  animated?: boolean | null | undefined;
};

/** @internal */
export const PollEmoji$outboundSchema: z.ZodType<
  PollEmoji$Outbound,
  z.ZodTypeDef,
  PollEmoji
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  animated: z.nullable(z.boolean()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PollEmoji$ {
  /** @deprecated use `PollEmoji$inboundSchema` instead. */
  export const inboundSchema = PollEmoji$inboundSchema;
  /** @deprecated use `PollEmoji$outboundSchema` instead. */
  export const outboundSchema = PollEmoji$outboundSchema;
  /** @deprecated use `PollEmoji$Outbound` instead. */
  export type Outbound = PollEmoji$Outbound;
}

export function pollEmojiToJSON(pollEmoji: PollEmoji): string {
  return JSON.stringify(PollEmoji$outboundSchema.parse(pollEmoji));
}

export function pollEmojiFromJSON(
  jsonString: string,
): SafeParseResult<PollEmoji, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PollEmoji$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PollEmoji' from JSON`,
  );
}
