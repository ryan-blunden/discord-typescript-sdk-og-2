/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateOrUpdateThreadTagRequest = {
  name: string;
  emojiId?: string | null | undefined;
  emojiName?: string | null | undefined;
  moderated?: boolean | null | undefined;
};

/** @internal */
export const CreateOrUpdateThreadTagRequest$inboundSchema: z.ZodType<
  CreateOrUpdateThreadTagRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  emoji_id: z.nullable(z.string()).optional(),
  emoji_name: z.nullable(z.string()).optional(),
  moderated: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    "emoji_id": "emojiId",
    "emoji_name": "emojiName",
  });
});

/** @internal */
export type CreateOrUpdateThreadTagRequest$Outbound = {
  name: string;
  emoji_id?: string | null | undefined;
  emoji_name?: string | null | undefined;
  moderated?: boolean | null | undefined;
};

/** @internal */
export const CreateOrUpdateThreadTagRequest$outboundSchema: z.ZodType<
  CreateOrUpdateThreadTagRequest$Outbound,
  z.ZodTypeDef,
  CreateOrUpdateThreadTagRequest
> = z.object({
  name: z.string(),
  emojiId: z.nullable(z.string()).optional(),
  emojiName: z.nullable(z.string()).optional(),
  moderated: z.nullable(z.boolean()).optional(),
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
export namespace CreateOrUpdateThreadTagRequest$ {
  /** @deprecated use `CreateOrUpdateThreadTagRequest$inboundSchema` instead. */
  export const inboundSchema = CreateOrUpdateThreadTagRequest$inboundSchema;
  /** @deprecated use `CreateOrUpdateThreadTagRequest$outboundSchema` instead. */
  export const outboundSchema = CreateOrUpdateThreadTagRequest$outboundSchema;
  /** @deprecated use `CreateOrUpdateThreadTagRequest$Outbound` instead. */
  export type Outbound = CreateOrUpdateThreadTagRequest$Outbound;
}

export function createOrUpdateThreadTagRequestToJSON(
  createOrUpdateThreadTagRequest: CreateOrUpdateThreadTagRequest,
): string {
  return JSON.stringify(
    CreateOrUpdateThreadTagRequest$outboundSchema.parse(
      createOrUpdateThreadTagRequest,
    ),
  );
}

export function createOrUpdateThreadTagRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateOrUpdateThreadTagRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateOrUpdateThreadTagRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateOrUpdateThreadTagRequest' from JSON`,
  );
}
