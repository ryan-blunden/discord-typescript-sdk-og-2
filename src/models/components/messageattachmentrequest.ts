/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type MessageAttachmentRequest = {
  id: string;
  filename?: string | null | undefined;
  description?: string | null | undefined;
  durationSecs?: number | null | undefined;
  waveform?: string | null | undefined;
  title?: string | null | undefined;
  isRemix?: boolean | null | undefined;
};

/** @internal */
export const MessageAttachmentRequest$inboundSchema: z.ZodType<
  MessageAttachmentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  filename: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  duration_secs: z.nullable(z.number()).optional(),
  waveform: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
  is_remix: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    "duration_secs": "durationSecs",
    "is_remix": "isRemix",
  });
});

/** @internal */
export type MessageAttachmentRequest$Outbound = {
  id: string;
  filename?: string | null | undefined;
  description?: string | null | undefined;
  duration_secs?: number | null | undefined;
  waveform?: string | null | undefined;
  title?: string | null | undefined;
  is_remix?: boolean | null | undefined;
};

/** @internal */
export const MessageAttachmentRequest$outboundSchema: z.ZodType<
  MessageAttachmentRequest$Outbound,
  z.ZodTypeDef,
  MessageAttachmentRequest
> = z.object({
  id: z.string(),
  filename: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  durationSecs: z.nullable(z.number()).optional(),
  waveform: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
  isRemix: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    durationSecs: "duration_secs",
    isRemix: "is_remix",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageAttachmentRequest$ {
  /** @deprecated use `MessageAttachmentRequest$inboundSchema` instead. */
  export const inboundSchema = MessageAttachmentRequest$inboundSchema;
  /** @deprecated use `MessageAttachmentRequest$outboundSchema` instead. */
  export const outboundSchema = MessageAttachmentRequest$outboundSchema;
  /** @deprecated use `MessageAttachmentRequest$Outbound` instead. */
  export type Outbound = MessageAttachmentRequest$Outbound;
}

export function messageAttachmentRequestToJSON(
  messageAttachmentRequest: MessageAttachmentRequest,
): string {
  return JSON.stringify(
    MessageAttachmentRequest$outboundSchema.parse(messageAttachmentRequest),
  );
}

export function messageAttachmentRequestFromJSON(
  jsonString: string,
): SafeParseResult<MessageAttachmentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MessageAttachmentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MessageAttachmentRequest' from JSON`,
  );
}
