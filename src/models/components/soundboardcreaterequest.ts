/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SoundboardCreateRequest = {
  name: string;
  volume?: number | null | undefined;
  emojiId?: string | null | undefined;
  emojiName?: string | null | undefined;
  sound: string;
};

/** @internal */
export const SoundboardCreateRequest$inboundSchema: z.ZodType<
  SoundboardCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  volume: z.nullable(z.number()).optional(),
  emoji_id: z.nullable(z.string()).optional(),
  emoji_name: z.nullable(z.string()).optional(),
  sound: z.string(),
}).transform((v) => {
  return remap$(v, {
    "emoji_id": "emojiId",
    "emoji_name": "emojiName",
  });
});

/** @internal */
export type SoundboardCreateRequest$Outbound = {
  name: string;
  volume?: number | null | undefined;
  emoji_id?: string | null | undefined;
  emoji_name?: string | null | undefined;
  sound: string;
};

/** @internal */
export const SoundboardCreateRequest$outboundSchema: z.ZodType<
  SoundboardCreateRequest$Outbound,
  z.ZodTypeDef,
  SoundboardCreateRequest
> = z.object({
  name: z.string(),
  volume: z.nullable(z.number()).optional(),
  emojiId: z.nullable(z.string()).optional(),
  emojiName: z.nullable(z.string()).optional(),
  sound: z.string(),
}).transform((v) => {
  return remap$(v, {
    emojiId: "emoji_id",
    emojiName: "emoji_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SoundboardCreateRequest$ {
  /** @deprecated use `SoundboardCreateRequest$inboundSchema` instead. */
  export const inboundSchema = SoundboardCreateRequest$inboundSchema;
  /** @deprecated use `SoundboardCreateRequest$outboundSchema` instead. */
  export const outboundSchema = SoundboardCreateRequest$outboundSchema;
  /** @deprecated use `SoundboardCreateRequest$Outbound` instead. */
  export type Outbound = SoundboardCreateRequest$Outbound;
}

export function soundboardCreateRequestToJSON(
  soundboardCreateRequest: SoundboardCreateRequest,
): string {
  return JSON.stringify(
    SoundboardCreateRequest$outboundSchema.parse(soundboardCreateRequest),
  );
}

export function soundboardCreateRequestFromJSON(
  jsonString: string,
): SafeParseResult<SoundboardCreateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SoundboardCreateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SoundboardCreateRequest' from JSON`,
  );
}
