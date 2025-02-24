/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ComponentEmojiForMessageRequest = {
  id?: string | null | undefined;
  name: string;
};

/** @internal */
export const ComponentEmojiForMessageRequest$inboundSchema: z.ZodType<
  ComponentEmojiForMessageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.string(),
});

/** @internal */
export type ComponentEmojiForMessageRequest$Outbound = {
  id?: string | null | undefined;
  name: string;
};

/** @internal */
export const ComponentEmojiForMessageRequest$outboundSchema: z.ZodType<
  ComponentEmojiForMessageRequest$Outbound,
  z.ZodTypeDef,
  ComponentEmojiForMessageRequest
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ComponentEmojiForMessageRequest$ {
  /** @deprecated use `ComponentEmojiForMessageRequest$inboundSchema` instead. */
  export const inboundSchema = ComponentEmojiForMessageRequest$inboundSchema;
  /** @deprecated use `ComponentEmojiForMessageRequest$outboundSchema` instead. */
  export const outboundSchema = ComponentEmojiForMessageRequest$outboundSchema;
  /** @deprecated use `ComponentEmojiForMessageRequest$Outbound` instead. */
  export type Outbound = ComponentEmojiForMessageRequest$Outbound;
}

export function componentEmojiForMessageRequestToJSON(
  componentEmojiForMessageRequest: ComponentEmojiForMessageRequest,
): string {
  return JSON.stringify(
    ComponentEmojiForMessageRequest$outboundSchema.parse(
      componentEmojiForMessageRequest,
    ),
  );
}

export function componentEmojiForMessageRequestFromJSON(
  jsonString: string,
): SafeParseResult<ComponentEmojiForMessageRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ComponentEmojiForMessageRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ComponentEmojiForMessageRequest' from JSON`,
  );
}
