/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  BlockMessageAction,
  BlockMessageAction$inboundSchema,
  BlockMessageAction$Outbound,
  BlockMessageAction$outboundSchema,
} from "./blockmessageaction.js";
import {
  FlagToChannelAction,
  FlagToChannelAction$inboundSchema,
  FlagToChannelAction$Outbound,
  FlagToChannelAction$outboundSchema,
} from "./flagtochannelaction.js";
import {
  MentionSpamTriggerMetadata,
  MentionSpamTriggerMetadata$inboundSchema,
  MentionSpamTriggerMetadata$Outbound,
  MentionSpamTriggerMetadata$outboundSchema,
} from "./mentionspamtriggermetadata.js";
import {
  QuarantineUserAction,
  QuarantineUserAction$inboundSchema,
  QuarantineUserAction$Outbound,
  QuarantineUserAction$outboundSchema,
} from "./quarantineuseraction.js";
import {
  UserCommunicationDisabledAction,
  UserCommunicationDisabledAction$inboundSchema,
  UserCommunicationDisabledAction$Outbound,
  UserCommunicationDisabledAction$outboundSchema,
} from "./usercommunicationdisabledaction.js";

export type MentionSpamUpsertRequestActions =
  | BlockMessageAction
  | FlagToChannelAction
  | QuarantineUserAction
  | UserCommunicationDisabledAction;

export type MentionSpamUpsertRequest = {
  name: string;
  eventType?: 1 | undefined;
  actions?:
    | Array<
      | BlockMessageAction
      | FlagToChannelAction
      | QuarantineUserAction
      | UserCommunicationDisabledAction
    >
    | null
    | undefined;
  enabled?: boolean | null | undefined;
  exemptRoles?: Array<string> | null | undefined;
  exemptChannels?: Array<string> | null | undefined;
  triggerType?: 1 | undefined;
  triggerMetadata?: MentionSpamTriggerMetadata | null | undefined;
};

/** @internal */
export const MentionSpamUpsertRequestActions$inboundSchema: z.ZodType<
  MentionSpamUpsertRequestActions,
  z.ZodTypeDef,
  unknown
> = z.union([
  BlockMessageAction$inboundSchema,
  FlagToChannelAction$inboundSchema,
  QuarantineUserAction$inboundSchema,
  UserCommunicationDisabledAction$inboundSchema,
]);

/** @internal */
export type MentionSpamUpsertRequestActions$Outbound =
  | BlockMessageAction$Outbound
  | FlagToChannelAction$Outbound
  | QuarantineUserAction$Outbound
  | UserCommunicationDisabledAction$Outbound;

/** @internal */
export const MentionSpamUpsertRequestActions$outboundSchema: z.ZodType<
  MentionSpamUpsertRequestActions$Outbound,
  z.ZodTypeDef,
  MentionSpamUpsertRequestActions
> = z.union([
  BlockMessageAction$outboundSchema,
  FlagToChannelAction$outboundSchema,
  QuarantineUserAction$outboundSchema,
  UserCommunicationDisabledAction$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MentionSpamUpsertRequestActions$ {
  /** @deprecated use `MentionSpamUpsertRequestActions$inboundSchema` instead. */
  export const inboundSchema = MentionSpamUpsertRequestActions$inboundSchema;
  /** @deprecated use `MentionSpamUpsertRequestActions$outboundSchema` instead. */
  export const outboundSchema = MentionSpamUpsertRequestActions$outboundSchema;
  /** @deprecated use `MentionSpamUpsertRequestActions$Outbound` instead. */
  export type Outbound = MentionSpamUpsertRequestActions$Outbound;
}

/** @internal */
export const MentionSpamUpsertRequest$inboundSchema: z.ZodType<
  MentionSpamUpsertRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  event_type: z.literal(1).optional(),
  actions: z.nullable(
    z.array(
      z.union([
        BlockMessageAction$inboundSchema,
        FlagToChannelAction$inboundSchema,
        QuarantineUserAction$inboundSchema,
        UserCommunicationDisabledAction$inboundSchema,
      ]),
    ),
  ).optional(),
  enabled: z.nullable(z.boolean()).optional(),
  exempt_roles: z.nullable(z.array(z.string())).optional(),
  exempt_channels: z.nullable(z.array(z.string())).optional(),
  trigger_type: z.literal(1).optional(),
  trigger_metadata: z.nullable(MentionSpamTriggerMetadata$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "event_type": "eventType",
    "exempt_roles": "exemptRoles",
    "exempt_channels": "exemptChannels",
    "trigger_type": "triggerType",
    "trigger_metadata": "triggerMetadata",
  });
});

/** @internal */
export type MentionSpamUpsertRequest$Outbound = {
  name: string;
  event_type: 1;
  actions?:
    | Array<
      | BlockMessageAction$Outbound
      | FlagToChannelAction$Outbound
      | QuarantineUserAction$Outbound
      | UserCommunicationDisabledAction$Outbound
    >
    | null
    | undefined;
  enabled?: boolean | null | undefined;
  exempt_roles?: Array<string> | null | undefined;
  exempt_channels?: Array<string> | null | undefined;
  trigger_type: 1;
  trigger_metadata?: MentionSpamTriggerMetadata$Outbound | null | undefined;
};

/** @internal */
export const MentionSpamUpsertRequest$outboundSchema: z.ZodType<
  MentionSpamUpsertRequest$Outbound,
  z.ZodTypeDef,
  MentionSpamUpsertRequest
> = z.object({
  name: z.string(),
  eventType: z.literal(1).default(1 as const),
  actions: z.nullable(
    z.array(
      z.union([
        BlockMessageAction$outboundSchema,
        FlagToChannelAction$outboundSchema,
        QuarantineUserAction$outboundSchema,
        UserCommunicationDisabledAction$outboundSchema,
      ]),
    ),
  ).optional(),
  enabled: z.nullable(z.boolean()).optional(),
  exemptRoles: z.nullable(z.array(z.string())).optional(),
  exemptChannels: z.nullable(z.array(z.string())).optional(),
  triggerType: z.literal(1).default(1 as const),
  triggerMetadata: z.nullable(MentionSpamTriggerMetadata$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    eventType: "event_type",
    exemptRoles: "exempt_roles",
    exemptChannels: "exempt_channels",
    triggerType: "trigger_type",
    triggerMetadata: "trigger_metadata",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MentionSpamUpsertRequest$ {
  /** @deprecated use `MentionSpamUpsertRequest$inboundSchema` instead. */
  export const inboundSchema = MentionSpamUpsertRequest$inboundSchema;
  /** @deprecated use `MentionSpamUpsertRequest$outboundSchema` instead. */
  export const outboundSchema = MentionSpamUpsertRequest$outboundSchema;
  /** @deprecated use `MentionSpamUpsertRequest$Outbound` instead. */
  export type Outbound = MentionSpamUpsertRequest$Outbound;
}
