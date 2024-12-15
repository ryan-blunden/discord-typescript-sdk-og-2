/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type IconEmojiResponse = {};

/** @internal */
export const IconEmojiResponse$inboundSchema: z.ZodType<
  IconEmojiResponse,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type IconEmojiResponse$Outbound = {};

/** @internal */
export const IconEmojiResponse$outboundSchema: z.ZodType<
  IconEmojiResponse$Outbound,
  z.ZodTypeDef,
  IconEmojiResponse
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IconEmojiResponse$ {
  /** @deprecated use `IconEmojiResponse$inboundSchema` instead. */
  export const inboundSchema = IconEmojiResponse$inboundSchema;
  /** @deprecated use `IconEmojiResponse$outboundSchema` instead. */
  export const outboundSchema = IconEmojiResponse$outboundSchema;
  /** @deprecated use `IconEmojiResponse$Outbound` instead. */
  export type Outbound = IconEmojiResponse$Outbound;
}

export function iconEmojiResponseToJSON(
  iconEmojiResponse: IconEmojiResponse,
): string {
  return JSON.stringify(
    IconEmojiResponse$outboundSchema.parse(iconEmojiResponse),
  );
}

export function iconEmojiResponseFromJSON(
  jsonString: string,
): SafeParseResult<IconEmojiResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IconEmojiResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IconEmojiResponse' from JSON`,
  );
}
