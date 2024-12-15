/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ChannelPermissionOverwriteResponse,
  ChannelPermissionOverwriteResponse$inboundSchema,
  ChannelPermissionOverwriteResponse$Outbound,
  ChannelPermissionOverwriteResponse$outboundSchema,
} from "./channelpermissionoverwriteresponse.js";
import {
  DefaultReactionEmojiResponse,
  DefaultReactionEmojiResponse$inboundSchema,
  DefaultReactionEmojiResponse$Outbound,
  DefaultReactionEmojiResponse$outboundSchema,
} from "./defaultreactionemojiresponse.js";
import {
  GuildTemplateChannelTags,
  GuildTemplateChannelTags$inboundSchema,
  GuildTemplateChannelTags$Outbound,
  GuildTemplateChannelTags$outboundSchema,
} from "./guildtemplatechanneltags.js";
import {
  IconEmojiResponse,
  IconEmojiResponse$inboundSchema,
  IconEmojiResponse$Outbound,
  IconEmojiResponse$outboundSchema,
} from "./iconemojiresponse.js";

export type GuildTemplateChannelResponse = {
  id?: number | null | undefined;
  type?: 1 | undefined;
  name?: string | null | undefined;
  position?: number | null | undefined;
  topic?: string | null | undefined;
  bitrate: number;
  userLimit: number;
  nsfw: boolean;
  rateLimitPerUser: number;
  parentId?: string | null | undefined;
  defaultAutoArchiveDuration?: 60 | null | undefined;
  permissionOverwrites: Array<ChannelPermissionOverwriteResponse>;
  availableTags?: Array<GuildTemplateChannelTags> | null | undefined;
  template: string;
  defaultReactionEmoji?: DefaultReactionEmojiResponse | null | undefined;
  defaultThreadRateLimitPerUser?: number | null | undefined;
  defaultSortOrder?: 0 | null | undefined;
  defaultForumLayout?: 0 | null | undefined;
  iconEmoji?: IconEmojiResponse | null | undefined;
  themeColor?: number | null | undefined;
};

/** @internal */
export const GuildTemplateChannelResponse$inboundSchema: z.ZodType<
  GuildTemplateChannelResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.number().int()).optional(),
  type: z.literal(1).optional(),
  name: z.nullable(z.string()).optional(),
  position: z.nullable(z.number().int()).optional(),
  topic: z.nullable(z.string()).optional(),
  bitrate: z.number().int(),
  user_limit: z.number().int(),
  nsfw: z.boolean(),
  rate_limit_per_user: z.number().int(),
  parent_id: z.nullable(z.string()).optional(),
  default_auto_archive_duration: z.nullable(z.literal(60)).optional(),
  permission_overwrites: z.array(
    ChannelPermissionOverwriteResponse$inboundSchema,
  ),
  available_tags: z.nullable(z.array(GuildTemplateChannelTags$inboundSchema))
    .optional(),
  template: z.string(),
  default_reaction_emoji: z.nullable(DefaultReactionEmojiResponse$inboundSchema)
    .optional(),
  default_thread_rate_limit_per_user: z.nullable(z.number().int()).optional(),
  default_sort_order: z.nullable(z.literal(0)).optional(),
  default_forum_layout: z.nullable(z.literal(0)).optional(),
  icon_emoji: z.nullable(IconEmojiResponse$inboundSchema).optional(),
  theme_color: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "user_limit": "userLimit",
    "rate_limit_per_user": "rateLimitPerUser",
    "parent_id": "parentId",
    "default_auto_archive_duration": "defaultAutoArchiveDuration",
    "permission_overwrites": "permissionOverwrites",
    "available_tags": "availableTags",
    "default_reaction_emoji": "defaultReactionEmoji",
    "default_thread_rate_limit_per_user": "defaultThreadRateLimitPerUser",
    "default_sort_order": "defaultSortOrder",
    "default_forum_layout": "defaultForumLayout",
    "icon_emoji": "iconEmoji",
    "theme_color": "themeColor",
  });
});

/** @internal */
export type GuildTemplateChannelResponse$Outbound = {
  id?: number | null | undefined;
  type: 1;
  name?: string | null | undefined;
  position?: number | null | undefined;
  topic?: string | null | undefined;
  bitrate: number;
  user_limit: number;
  nsfw: boolean;
  rate_limit_per_user: number;
  parent_id?: string | null | undefined;
  default_auto_archive_duration: 60 | null;
  permission_overwrites: Array<ChannelPermissionOverwriteResponse$Outbound>;
  available_tags?: Array<GuildTemplateChannelTags$Outbound> | null | undefined;
  template: string;
  default_reaction_emoji?:
    | DefaultReactionEmojiResponse$Outbound
    | null
    | undefined;
  default_thread_rate_limit_per_user?: number | null | undefined;
  default_sort_order: 0 | null;
  default_forum_layout: 0 | null;
  icon_emoji?: IconEmojiResponse$Outbound | null | undefined;
  theme_color?: number | null | undefined;
};

/** @internal */
export const GuildTemplateChannelResponse$outboundSchema: z.ZodType<
  GuildTemplateChannelResponse$Outbound,
  z.ZodTypeDef,
  GuildTemplateChannelResponse
> = z.object({
  id: z.nullable(z.number().int()).optional(),
  type: z.literal(1).default(1 as const),
  name: z.nullable(z.string()).optional(),
  position: z.nullable(z.number().int()).optional(),
  topic: z.nullable(z.string()).optional(),
  bitrate: z.number().int(),
  userLimit: z.number().int(),
  nsfw: z.boolean(),
  rateLimitPerUser: z.number().int(),
  parentId: z.nullable(z.string()).optional(),
  defaultAutoArchiveDuration: z.nullable(z.literal(60).default(60 as const)),
  permissionOverwrites: z.array(
    ChannelPermissionOverwriteResponse$outboundSchema,
  ),
  availableTags: z.nullable(z.array(GuildTemplateChannelTags$outboundSchema))
    .optional(),
  template: z.string(),
  defaultReactionEmoji: z.nullable(DefaultReactionEmojiResponse$outboundSchema)
    .optional(),
  defaultThreadRateLimitPerUser: z.nullable(z.number().int()).optional(),
  defaultSortOrder: z.nullable(z.literal(0).default(0 as const)),
  defaultForumLayout: z.nullable(z.literal(0).default(0 as const)),
  iconEmoji: z.nullable(IconEmojiResponse$outboundSchema).optional(),
  themeColor: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    userLimit: "user_limit",
    rateLimitPerUser: "rate_limit_per_user",
    parentId: "parent_id",
    defaultAutoArchiveDuration: "default_auto_archive_duration",
    permissionOverwrites: "permission_overwrites",
    availableTags: "available_tags",
    defaultReactionEmoji: "default_reaction_emoji",
    defaultThreadRateLimitPerUser: "default_thread_rate_limit_per_user",
    defaultSortOrder: "default_sort_order",
    defaultForumLayout: "default_forum_layout",
    iconEmoji: "icon_emoji",
    themeColor: "theme_color",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GuildTemplateChannelResponse$ {
  /** @deprecated use `GuildTemplateChannelResponse$inboundSchema` instead. */
  export const inboundSchema = GuildTemplateChannelResponse$inboundSchema;
  /** @deprecated use `GuildTemplateChannelResponse$outboundSchema` instead. */
  export const outboundSchema = GuildTemplateChannelResponse$outboundSchema;
  /** @deprecated use `GuildTemplateChannelResponse$Outbound` instead. */
  export type Outbound = GuildTemplateChannelResponse$Outbound;
}

export function guildTemplateChannelResponseToJSON(
  guildTemplateChannelResponse: GuildTemplateChannelResponse,
): string {
  return JSON.stringify(
    GuildTemplateChannelResponse$outboundSchema.parse(
      guildTemplateChannelResponse,
    ),
  );
}

export function guildTemplateChannelResponseFromJSON(
  jsonString: string,
): SafeParseResult<GuildTemplateChannelResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GuildTemplateChannelResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GuildTemplateChannelResponse' from JSON`,
  );
}
