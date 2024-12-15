/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  WidgetActivity,
  WidgetActivity$inboundSchema,
  WidgetActivity$Outbound,
  WidgetActivity$outboundSchema,
} from "./widgetactivity.js";

export type WidgetMember = {
  id: string;
  username: string;
  discriminator?: "0000" | undefined;
  avatar?: any | null | undefined;
  status: string;
  avatarUrl: string;
  activity?: WidgetActivity | null | undefined;
  deaf?: boolean | null | undefined;
  mute?: boolean | null | undefined;
  selfDeaf?: boolean | null | undefined;
  selfMute?: boolean | null | undefined;
  suppress?: boolean | null | undefined;
  channelId?: string | null | undefined;
};

/** @internal */
export const WidgetMember$inboundSchema: z.ZodType<
  WidgetMember,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  username: z.string(),
  discriminator: z.literal("0000").optional(),
  avatar: z.nullable(z.any()).optional(),
  status: z.string(),
  avatar_url: z.string(),
  activity: z.nullable(WidgetActivity$inboundSchema).optional(),
  deaf: z.nullable(z.boolean()).optional(),
  mute: z.nullable(z.boolean()).optional(),
  self_deaf: z.nullable(z.boolean()).optional(),
  self_mute: z.nullable(z.boolean()).optional(),
  suppress: z.nullable(z.boolean()).optional(),
  channel_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "avatar_url": "avatarUrl",
    "self_deaf": "selfDeaf",
    "self_mute": "selfMute",
    "channel_id": "channelId",
  });
});

/** @internal */
export type WidgetMember$Outbound = {
  id: string;
  username: string;
  discriminator: "0000";
  avatar?: any | null | undefined;
  status: string;
  avatar_url: string;
  activity?: WidgetActivity$Outbound | null | undefined;
  deaf?: boolean | null | undefined;
  mute?: boolean | null | undefined;
  self_deaf?: boolean | null | undefined;
  self_mute?: boolean | null | undefined;
  suppress?: boolean | null | undefined;
  channel_id?: string | null | undefined;
};

/** @internal */
export const WidgetMember$outboundSchema: z.ZodType<
  WidgetMember$Outbound,
  z.ZodTypeDef,
  WidgetMember
> = z.object({
  id: z.string(),
  username: z.string(),
  discriminator: z.literal("0000").default("0000" as const),
  avatar: z.nullable(z.any()).optional(),
  status: z.string(),
  avatarUrl: z.string(),
  activity: z.nullable(WidgetActivity$outboundSchema).optional(),
  deaf: z.nullable(z.boolean()).optional(),
  mute: z.nullable(z.boolean()).optional(),
  selfDeaf: z.nullable(z.boolean()).optional(),
  selfMute: z.nullable(z.boolean()).optional(),
  suppress: z.nullable(z.boolean()).optional(),
  channelId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    avatarUrl: "avatar_url",
    selfDeaf: "self_deaf",
    selfMute: "self_mute",
    channelId: "channel_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WidgetMember$ {
  /** @deprecated use `WidgetMember$inboundSchema` instead. */
  export const inboundSchema = WidgetMember$inboundSchema;
  /** @deprecated use `WidgetMember$outboundSchema` instead. */
  export const outboundSchema = WidgetMember$outboundSchema;
  /** @deprecated use `WidgetMember$Outbound` instead. */
  export type Outbound = WidgetMember$Outbound;
}

export function widgetMemberToJSON(widgetMember: WidgetMember): string {
  return JSON.stringify(WidgetMember$outboundSchema.parse(widgetMember));
}

export function widgetMemberFromJSON(
  jsonString: string,
): SafeParseResult<WidgetMember, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WidgetMember$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WidgetMember' from JSON`,
  );
}
