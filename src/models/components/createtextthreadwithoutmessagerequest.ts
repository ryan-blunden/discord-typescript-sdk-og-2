/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateTextThreadWithoutMessageRequest = {
  name: string;
  autoArchiveDuration?: 60 | null | undefined;
  rateLimitPerUser?: number | null | undefined;
  type?: 1 | undefined;
  invitable?: boolean | null | undefined;
};

/** @internal */
export const CreateTextThreadWithoutMessageRequest$inboundSchema: z.ZodType<
  CreateTextThreadWithoutMessageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  auto_archive_duration: z.nullable(z.literal(60)).optional(),
  rate_limit_per_user: z.nullable(z.number().int()).optional(),
  type: z.literal(1).optional(),
  invitable: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    "auto_archive_duration": "autoArchiveDuration",
    "rate_limit_per_user": "rateLimitPerUser",
  });
});

/** @internal */
export type CreateTextThreadWithoutMessageRequest$Outbound = {
  name: string;
  auto_archive_duration: 60 | null;
  rate_limit_per_user?: number | null | undefined;
  type: 1;
  invitable?: boolean | null | undefined;
};

/** @internal */
export const CreateTextThreadWithoutMessageRequest$outboundSchema: z.ZodType<
  CreateTextThreadWithoutMessageRequest$Outbound,
  z.ZodTypeDef,
  CreateTextThreadWithoutMessageRequest
> = z.object({
  name: z.string(),
  autoArchiveDuration: z.nullable(z.literal(60).default(60 as const)),
  rateLimitPerUser: z.nullable(z.number().int()).optional(),
  type: z.literal(1).default(1 as const),
  invitable: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    autoArchiveDuration: "auto_archive_duration",
    rateLimitPerUser: "rate_limit_per_user",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTextThreadWithoutMessageRequest$ {
  /** @deprecated use `CreateTextThreadWithoutMessageRequest$inboundSchema` instead. */
  export const inboundSchema =
    CreateTextThreadWithoutMessageRequest$inboundSchema;
  /** @deprecated use `CreateTextThreadWithoutMessageRequest$outboundSchema` instead. */
  export const outboundSchema =
    CreateTextThreadWithoutMessageRequest$outboundSchema;
  /** @deprecated use `CreateTextThreadWithoutMessageRequest$Outbound` instead. */
  export type Outbound = CreateTextThreadWithoutMessageRequest$Outbound;
}

export function createTextThreadWithoutMessageRequestToJSON(
  createTextThreadWithoutMessageRequest: CreateTextThreadWithoutMessageRequest,
): string {
  return JSON.stringify(
    CreateTextThreadWithoutMessageRequest$outboundSchema.parse(
      createTextThreadWithoutMessageRequest,
    ),
  );
}

export function createTextThreadWithoutMessageRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateTextThreadWithoutMessageRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateTextThreadWithoutMessageRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTextThreadWithoutMessageRequest' from JSON`,
  );
}
