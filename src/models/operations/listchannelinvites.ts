/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ListChannelInvitesRequest = {
  channelId: string;
};

export type ListChannelInvitesResponseBody =
  | components.GroupDMInviteResponse
  | components.FriendInviteResponse
  | components.GuildInviteResponse;

/** @internal */
export const ListChannelInvitesRequest$inboundSchema: z.ZodType<
  ListChannelInvitesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
  });
});

/** @internal */
export type ListChannelInvitesRequest$Outbound = {
  channel_id: string;
};

/** @internal */
export const ListChannelInvitesRequest$outboundSchema: z.ZodType<
  ListChannelInvitesRequest$Outbound,
  z.ZodTypeDef,
  ListChannelInvitesRequest
> = z.object({
  channelId: z.string(),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListChannelInvitesRequest$ {
  /** @deprecated use `ListChannelInvitesRequest$inboundSchema` instead. */
  export const inboundSchema = ListChannelInvitesRequest$inboundSchema;
  /** @deprecated use `ListChannelInvitesRequest$outboundSchema` instead. */
  export const outboundSchema = ListChannelInvitesRequest$outboundSchema;
  /** @deprecated use `ListChannelInvitesRequest$Outbound` instead. */
  export type Outbound = ListChannelInvitesRequest$Outbound;
}

/** @internal */
export const ListChannelInvitesResponseBody$inboundSchema: z.ZodType<
  ListChannelInvitesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.GroupDMInviteResponse$inboundSchema,
  components.FriendInviteResponse$inboundSchema,
  components.GuildInviteResponse$inboundSchema,
]);

/** @internal */
export type ListChannelInvitesResponseBody$Outbound =
  | components.GroupDMInviteResponse$Outbound
  | components.FriendInviteResponse$Outbound
  | components.GuildInviteResponse$Outbound;

/** @internal */
export const ListChannelInvitesResponseBody$outboundSchema: z.ZodType<
  ListChannelInvitesResponseBody$Outbound,
  z.ZodTypeDef,
  ListChannelInvitesResponseBody
> = z.union([
  components.GroupDMInviteResponse$outboundSchema,
  components.FriendInviteResponse$outboundSchema,
  components.GuildInviteResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListChannelInvitesResponseBody$ {
  /** @deprecated use `ListChannelInvitesResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListChannelInvitesResponseBody$inboundSchema;
  /** @deprecated use `ListChannelInvitesResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListChannelInvitesResponseBody$outboundSchema;
  /** @deprecated use `ListChannelInvitesResponseBody$Outbound` instead. */
  export type Outbound = ListChannelInvitesResponseBody$Outbound;
}
