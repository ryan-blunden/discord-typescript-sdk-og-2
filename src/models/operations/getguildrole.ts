/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetGuildRoleRequest = {
  guildId: string;
  roleId: string;
};

/** @internal */
export const GetGuildRoleRequest$inboundSchema: z.ZodType<
  GetGuildRoleRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  role_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "role_id": "roleId",
  });
});

/** @internal */
export type GetGuildRoleRequest$Outbound = {
  guild_id: string;
  role_id: string;
};

/** @internal */
export const GetGuildRoleRequest$outboundSchema: z.ZodType<
  GetGuildRoleRequest$Outbound,
  z.ZodTypeDef,
  GetGuildRoleRequest
> = z.object({
  guildId: z.string(),
  roleId: z.string(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    roleId: "role_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetGuildRoleRequest$ {
  /** @deprecated use `GetGuildRoleRequest$inboundSchema` instead. */
  export const inboundSchema = GetGuildRoleRequest$inboundSchema;
  /** @deprecated use `GetGuildRoleRequest$outboundSchema` instead. */
  export const outboundSchema = GetGuildRoleRequest$outboundSchema;
  /** @deprecated use `GetGuildRoleRequest$Outbound` instead. */
  export type Outbound = GetGuildRoleRequest$Outbound;
}

export function getGuildRoleRequestToJSON(
  getGuildRoleRequest: GetGuildRoleRequest,
): string {
  return JSON.stringify(
    GetGuildRoleRequest$outboundSchema.parse(getGuildRoleRequest),
  );
}

export function getGuildRoleRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetGuildRoleRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetGuildRoleRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetGuildRoleRequest' from JSON`,
  );
}
