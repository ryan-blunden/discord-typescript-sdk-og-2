/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateGroupDMInviteRequest = {
  maxAge?: number | null | undefined;
};

/** @internal */
export const CreateGroupDMInviteRequest$inboundSchema: z.ZodType<
  CreateGroupDMInviteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  max_age: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "max_age": "maxAge",
  });
});

/** @internal */
export type CreateGroupDMInviteRequest$Outbound = {
  max_age?: number | null | undefined;
};

/** @internal */
export const CreateGroupDMInviteRequest$outboundSchema: z.ZodType<
  CreateGroupDMInviteRequest$Outbound,
  z.ZodTypeDef,
  CreateGroupDMInviteRequest
> = z.object({
  maxAge: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    maxAge: "max_age",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateGroupDMInviteRequest$ {
  /** @deprecated use `CreateGroupDMInviteRequest$inboundSchema` instead. */
  export const inboundSchema = CreateGroupDMInviteRequest$inboundSchema;
  /** @deprecated use `CreateGroupDMInviteRequest$outboundSchema` instead. */
  export const outboundSchema = CreateGroupDMInviteRequest$outboundSchema;
  /** @deprecated use `CreateGroupDMInviteRequest$Outbound` instead. */
  export type Outbound = CreateGroupDMInviteRequest$Outbound;
}

export function createGroupDMInviteRequestToJSON(
  createGroupDMInviteRequest: CreateGroupDMInviteRequest,
): string {
  return JSON.stringify(
    CreateGroupDMInviteRequest$outboundSchema.parse(createGroupDMInviteRequest),
  );
}

export function createGroupDMInviteRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateGroupDMInviteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateGroupDMInviteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateGroupDMInviteRequest' from JSON`,
  );
}
