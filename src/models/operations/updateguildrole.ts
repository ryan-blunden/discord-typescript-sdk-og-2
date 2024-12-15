/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateGuildRoleRequestBody = {
  name?: string | null | undefined;
  permissions?: number | null | undefined;
  color?: number | null | undefined;
  hoist?: boolean | null | undefined;
  mentionable?: boolean | null | undefined;
  icon?: string | null | undefined;
  unicodeEmoji?: string | null | undefined;
};

export type UpdateGuildRoleRequest = {
  guildId: string;
  roleId: string;
  requestBody: UpdateGuildRoleRequestBody;
};

/** @internal */
export const UpdateGuildRoleRequestBody$inboundSchema: z.ZodType<
  UpdateGuildRoleRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  permissions: z.nullable(z.number().int()).optional(),
  color: z.nullable(z.number().int()).optional(),
  hoist: z.nullable(z.boolean()).optional(),
  mentionable: z.nullable(z.boolean()).optional(),
  icon: z.nullable(z.string()).optional(),
  unicode_emoji: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "unicode_emoji": "unicodeEmoji",
  });
});

/** @internal */
export type UpdateGuildRoleRequestBody$Outbound = {
  name?: string | null | undefined;
  permissions?: number | null | undefined;
  color?: number | null | undefined;
  hoist?: boolean | null | undefined;
  mentionable?: boolean | null | undefined;
  icon?: string | null | undefined;
  unicode_emoji?: string | null | undefined;
};

/** @internal */
export const UpdateGuildRoleRequestBody$outboundSchema: z.ZodType<
  UpdateGuildRoleRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateGuildRoleRequestBody
> = z.object({
  name: z.nullable(z.string()).optional(),
  permissions: z.nullable(z.number().int()).optional(),
  color: z.nullable(z.number().int()).optional(),
  hoist: z.nullable(z.boolean()).optional(),
  mentionable: z.nullable(z.boolean()).optional(),
  icon: z.nullable(z.string()).optional(),
  unicodeEmoji: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    unicodeEmoji: "unicode_emoji",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateGuildRoleRequestBody$ {
  /** @deprecated use `UpdateGuildRoleRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateGuildRoleRequestBody$inboundSchema;
  /** @deprecated use `UpdateGuildRoleRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateGuildRoleRequestBody$outboundSchema;
  /** @deprecated use `UpdateGuildRoleRequestBody$Outbound` instead. */
  export type Outbound = UpdateGuildRoleRequestBody$Outbound;
}

export function updateGuildRoleRequestBodyToJSON(
  updateGuildRoleRequestBody: UpdateGuildRoleRequestBody,
): string {
  return JSON.stringify(
    UpdateGuildRoleRequestBody$outboundSchema.parse(updateGuildRoleRequestBody),
  );
}

export function updateGuildRoleRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateGuildRoleRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateGuildRoleRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateGuildRoleRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateGuildRoleRequest$inboundSchema: z.ZodType<
  UpdateGuildRoleRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  role_id: z.string(),
  RequestBody: z.lazy(() => UpdateGuildRoleRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "role_id": "roleId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateGuildRoleRequest$Outbound = {
  guild_id: string;
  role_id: string;
  RequestBody: UpdateGuildRoleRequestBody$Outbound;
};

/** @internal */
export const UpdateGuildRoleRequest$outboundSchema: z.ZodType<
  UpdateGuildRoleRequest$Outbound,
  z.ZodTypeDef,
  UpdateGuildRoleRequest
> = z.object({
  guildId: z.string(),
  roleId: z.string(),
  requestBody: z.lazy(() => UpdateGuildRoleRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    roleId: "role_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateGuildRoleRequest$ {
  /** @deprecated use `UpdateGuildRoleRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateGuildRoleRequest$inboundSchema;
  /** @deprecated use `UpdateGuildRoleRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateGuildRoleRequest$outboundSchema;
  /** @deprecated use `UpdateGuildRoleRequest$Outbound` instead. */
  export type Outbound = UpdateGuildRoleRequest$Outbound;
}

export function updateGuildRoleRequestToJSON(
  updateGuildRoleRequest: UpdateGuildRoleRequest,
): string {
  return JSON.stringify(
    UpdateGuildRoleRequest$outboundSchema.parse(updateGuildRoleRequest),
  );
}

export function updateGuildRoleRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateGuildRoleRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateGuildRoleRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateGuildRoleRequest' from JSON`,
  );
}
