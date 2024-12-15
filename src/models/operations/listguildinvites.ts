/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListGuildInvitesRequest = {
  guildId: string;
};

export type ListGuildInvitesResponseBody =
  | components.GroupDMInviteResponse
  | components.FriendInviteResponse
  | components.GuildInviteResponse;

/** @internal */
export const ListGuildInvitesRequest$inboundSchema: z.ZodType<
  ListGuildInvitesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
  });
});

/** @internal */
export type ListGuildInvitesRequest$Outbound = {
  guild_id: string;
};

/** @internal */
export const ListGuildInvitesRequest$outboundSchema: z.ZodType<
  ListGuildInvitesRequest$Outbound,
  z.ZodTypeDef,
  ListGuildInvitesRequest
> = z.object({
  guildId: z.string(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListGuildInvitesRequest$ {
  /** @deprecated use `ListGuildInvitesRequest$inboundSchema` instead. */
  export const inboundSchema = ListGuildInvitesRequest$inboundSchema;
  /** @deprecated use `ListGuildInvitesRequest$outboundSchema` instead. */
  export const outboundSchema = ListGuildInvitesRequest$outboundSchema;
  /** @deprecated use `ListGuildInvitesRequest$Outbound` instead. */
  export type Outbound = ListGuildInvitesRequest$Outbound;
}

export function listGuildInvitesRequestToJSON(
  listGuildInvitesRequest: ListGuildInvitesRequest,
): string {
  return JSON.stringify(
    ListGuildInvitesRequest$outboundSchema.parse(listGuildInvitesRequest),
  );
}

export function listGuildInvitesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListGuildInvitesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListGuildInvitesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListGuildInvitesRequest' from JSON`,
  );
}

/** @internal */
export const ListGuildInvitesResponseBody$inboundSchema: z.ZodType<
  ListGuildInvitesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.GroupDMInviteResponse$inboundSchema,
  components.FriendInviteResponse$inboundSchema,
  components.GuildInviteResponse$inboundSchema,
]);

/** @internal */
export type ListGuildInvitesResponseBody$Outbound =
  | components.GroupDMInviteResponse$Outbound
  | components.FriendInviteResponse$Outbound
  | components.GuildInviteResponse$Outbound;

/** @internal */
export const ListGuildInvitesResponseBody$outboundSchema: z.ZodType<
  ListGuildInvitesResponseBody$Outbound,
  z.ZodTypeDef,
  ListGuildInvitesResponseBody
> = z.union([
  components.GroupDMInviteResponse$outboundSchema,
  components.FriendInviteResponse$outboundSchema,
  components.GuildInviteResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListGuildInvitesResponseBody$ {
  /** @deprecated use `ListGuildInvitesResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListGuildInvitesResponseBody$inboundSchema;
  /** @deprecated use `ListGuildInvitesResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListGuildInvitesResponseBody$outboundSchema;
  /** @deprecated use `ListGuildInvitesResponseBody$Outbound` instead. */
  export type Outbound = ListGuildInvitesResponseBody$Outbound;
}

export function listGuildInvitesResponseBodyToJSON(
  listGuildInvitesResponseBody: ListGuildInvitesResponseBody,
): string {
  return JSON.stringify(
    ListGuildInvitesResponseBody$outboundSchema.parse(
      listGuildInvitesResponseBody,
    ),
  );
}

export function listGuildInvitesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListGuildInvitesResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListGuildInvitesResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListGuildInvitesResponseBody' from JSON`,
  );
}
