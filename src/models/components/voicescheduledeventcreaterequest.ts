/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  EntityMetadataVoice,
  EntityMetadataVoice$inboundSchema,
  EntityMetadataVoice$Outbound,
  EntityMetadataVoice$outboundSchema,
} from "./entitymetadatavoice.js";

export type VoiceScheduledEventCreateRequest = {
  name: string;
  description?: string | null | undefined;
  image?: string | null | undefined;
  scheduledStartTime: Date;
  scheduledEndTime?: Date | null | undefined;
  privacyLevel?: 2 | undefined;
  entityType?: 0 | undefined;
  channelId?: string | null | undefined;
  entityMetadata?: EntityMetadataVoice | null | undefined;
};

/** @internal */
export const VoiceScheduledEventCreateRequest$inboundSchema: z.ZodType<
  VoiceScheduledEventCreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  image: z.nullable(z.string()).optional(),
  scheduled_start_time: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  scheduled_end_time: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  privacy_level: z.literal(2).optional(),
  entity_type: z.literal(0).optional(),
  channel_id: z.nullable(z.string()).optional(),
  entity_metadata: z.nullable(EntityMetadataVoice$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "scheduled_start_time": "scheduledStartTime",
    "scheduled_end_time": "scheduledEndTime",
    "privacy_level": "privacyLevel",
    "entity_type": "entityType",
    "channel_id": "channelId",
    "entity_metadata": "entityMetadata",
  });
});

/** @internal */
export type VoiceScheduledEventCreateRequest$Outbound = {
  name: string;
  description?: string | null | undefined;
  image?: string | null | undefined;
  scheduled_start_time: string;
  scheduled_end_time?: string | null | undefined;
  privacy_level: 2;
  entity_type: 0;
  channel_id?: string | null | undefined;
  entity_metadata?: EntityMetadataVoice$Outbound | null | undefined;
};

/** @internal */
export const VoiceScheduledEventCreateRequest$outboundSchema: z.ZodType<
  VoiceScheduledEventCreateRequest$Outbound,
  z.ZodTypeDef,
  VoiceScheduledEventCreateRequest
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  image: z.nullable(z.string()).optional(),
  scheduledStartTime: z.date().transform(v => v.toISOString()),
  scheduledEndTime: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
  privacyLevel: z.literal(2).default(2 as const),
  entityType: z.literal(0).default(0 as const),
  channelId: z.nullable(z.string()).optional(),
  entityMetadata: z.nullable(EntityMetadataVoice$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    scheduledStartTime: "scheduled_start_time",
    scheduledEndTime: "scheduled_end_time",
    privacyLevel: "privacy_level",
    entityType: "entity_type",
    channelId: "channel_id",
    entityMetadata: "entity_metadata",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VoiceScheduledEventCreateRequest$ {
  /** @deprecated use `VoiceScheduledEventCreateRequest$inboundSchema` instead. */
  export const inboundSchema = VoiceScheduledEventCreateRequest$inboundSchema;
  /** @deprecated use `VoiceScheduledEventCreateRequest$outboundSchema` instead. */
  export const outboundSchema = VoiceScheduledEventCreateRequest$outboundSchema;
  /** @deprecated use `VoiceScheduledEventCreateRequest$Outbound` instead. */
  export type Outbound = VoiceScheduledEventCreateRequest$Outbound;
}

export function voiceScheduledEventCreateRequestToJSON(
  voiceScheduledEventCreateRequest: VoiceScheduledEventCreateRequest,
): string {
  return JSON.stringify(
    VoiceScheduledEventCreateRequest$outboundSchema.parse(
      voiceScheduledEventCreateRequest,
    ),
  );
}

export function voiceScheduledEventCreateRequestFromJSON(
  jsonString: string,
): SafeParseResult<VoiceScheduledEventCreateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VoiceScheduledEventCreateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VoiceScheduledEventCreateRequest' from JSON`,
  );
}
