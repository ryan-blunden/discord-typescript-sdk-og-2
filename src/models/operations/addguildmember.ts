/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AddGuildMemberRequestBody = {
  nick?: string | null | undefined;
  roles?: Array<string> | null | undefined;
  mute?: boolean | null | undefined;
  deaf?: boolean | null | undefined;
  accessToken: string;
  flags?: number | null | undefined;
};

export type AddGuildMemberRequest = {
  guildId: string;
  userId: string;
  requestBody: AddGuildMemberRequestBody;
};

/** @internal */
export const AddGuildMemberRequestBody$inboundSchema: z.ZodType<
  AddGuildMemberRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  nick: z.nullable(z.string()).optional(),
  roles: z.nullable(z.array(z.string())).optional(),
  mute: z.nullable(z.boolean()).optional(),
  deaf: z.nullable(z.boolean()).optional(),
  access_token: z.string(),
  flags: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "access_token": "accessToken",
  });
});

/** @internal */
export type AddGuildMemberRequestBody$Outbound = {
  nick?: string | null | undefined;
  roles?: Array<string> | null | undefined;
  mute?: boolean | null | undefined;
  deaf?: boolean | null | undefined;
  access_token: string;
  flags?: number | null | undefined;
};

/** @internal */
export const AddGuildMemberRequestBody$outboundSchema: z.ZodType<
  AddGuildMemberRequestBody$Outbound,
  z.ZodTypeDef,
  AddGuildMemberRequestBody
> = z.object({
  nick: z.nullable(z.string()).optional(),
  roles: z.nullable(z.array(z.string())).optional(),
  mute: z.nullable(z.boolean()).optional(),
  deaf: z.nullable(z.boolean()).optional(),
  accessToken: z.string(),
  flags: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    accessToken: "access_token",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddGuildMemberRequestBody$ {
  /** @deprecated use `AddGuildMemberRequestBody$inboundSchema` instead. */
  export const inboundSchema = AddGuildMemberRequestBody$inboundSchema;
  /** @deprecated use `AddGuildMemberRequestBody$outboundSchema` instead. */
  export const outboundSchema = AddGuildMemberRequestBody$outboundSchema;
  /** @deprecated use `AddGuildMemberRequestBody$Outbound` instead. */
  export type Outbound = AddGuildMemberRequestBody$Outbound;
}

export function addGuildMemberRequestBodyToJSON(
  addGuildMemberRequestBody: AddGuildMemberRequestBody,
): string {
  return JSON.stringify(
    AddGuildMemberRequestBody$outboundSchema.parse(addGuildMemberRequestBody),
  );
}

export function addGuildMemberRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<AddGuildMemberRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddGuildMemberRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddGuildMemberRequestBody' from JSON`,
  );
}

/** @internal */
export const AddGuildMemberRequest$inboundSchema: z.ZodType<
  AddGuildMemberRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  user_id: z.string(),
  RequestBody: z.lazy(() => AddGuildMemberRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "user_id": "userId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type AddGuildMemberRequest$Outbound = {
  guild_id: string;
  user_id: string;
  RequestBody: AddGuildMemberRequestBody$Outbound;
};

/** @internal */
export const AddGuildMemberRequest$outboundSchema: z.ZodType<
  AddGuildMemberRequest$Outbound,
  z.ZodTypeDef,
  AddGuildMemberRequest
> = z.object({
  guildId: z.string(),
  userId: z.string(),
  requestBody: z.lazy(() => AddGuildMemberRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    userId: "user_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddGuildMemberRequest$ {
  /** @deprecated use `AddGuildMemberRequest$inboundSchema` instead. */
  export const inboundSchema = AddGuildMemberRequest$inboundSchema;
  /** @deprecated use `AddGuildMemberRequest$outboundSchema` instead. */
  export const outboundSchema = AddGuildMemberRequest$outboundSchema;
  /** @deprecated use `AddGuildMemberRequest$Outbound` instead. */
  export type Outbound = AddGuildMemberRequest$Outbound;
}

export function addGuildMemberRequestToJSON(
  addGuildMemberRequest: AddGuildMemberRequest,
): string {
  return JSON.stringify(
    AddGuildMemberRequest$outboundSchema.parse(addGuildMemberRequest),
  );
}

export function addGuildMemberRequestFromJSON(
  jsonString: string,
): SafeParseResult<AddGuildMemberRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AddGuildMemberRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AddGuildMemberRequest' from JSON`,
  );
}
