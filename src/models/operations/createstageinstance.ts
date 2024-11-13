/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type CreateStageInstanceRequestBody = {
  topic: string;
  channelId: string;
  privacyLevel?: 1 | null | undefined;
  guildScheduledEventId?: string | null | undefined;
  sendStartNotification?: boolean | null | undefined;
};

/** @internal */
export const CreateStageInstanceRequestBody$inboundSchema: z.ZodType<
  CreateStageInstanceRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  topic: z.string(),
  channel_id: z.string(),
  privacy_level: z.nullable(z.literal(1)).optional(),
  guild_scheduled_event_id: z.nullable(z.string()).optional(),
  send_start_notification: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
    "privacy_level": "privacyLevel",
    "guild_scheduled_event_id": "guildScheduledEventId",
    "send_start_notification": "sendStartNotification",
  });
});

/** @internal */
export type CreateStageInstanceRequestBody$Outbound = {
  topic: string;
  channel_id: string;
  privacy_level: 1 | null;
  guild_scheduled_event_id?: string | null | undefined;
  send_start_notification?: boolean | null | undefined;
};

/** @internal */
export const CreateStageInstanceRequestBody$outboundSchema: z.ZodType<
  CreateStageInstanceRequestBody$Outbound,
  z.ZodTypeDef,
  CreateStageInstanceRequestBody
> = z.object({
  topic: z.string(),
  channelId: z.string(),
  privacyLevel: z.nullable(z.literal(1).default(1 as const)),
  guildScheduledEventId: z.nullable(z.string()).optional(),
  sendStartNotification: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
    privacyLevel: "privacy_level",
    guildScheduledEventId: "guild_scheduled_event_id",
    sendStartNotification: "send_start_notification",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateStageInstanceRequestBody$ {
  /** @deprecated use `CreateStageInstanceRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateStageInstanceRequestBody$inboundSchema;
  /** @deprecated use `CreateStageInstanceRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateStageInstanceRequestBody$outboundSchema;
  /** @deprecated use `CreateStageInstanceRequestBody$Outbound` instead. */
  export type Outbound = CreateStageInstanceRequestBody$Outbound;
}
