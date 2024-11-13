/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  BlockMessageActionResponse,
  BlockMessageActionResponse$inboundSchema,
  BlockMessageActionResponse$Outbound,
  BlockMessageActionResponse$outboundSchema,
} from "./blockmessageactionresponse.js";
import {
  FlagToChannelActionResponse,
  FlagToChannelActionResponse$inboundSchema,
  FlagToChannelActionResponse$Outbound,
  FlagToChannelActionResponse$outboundSchema,
} from "./flagtochannelactionresponse.js";
import {
  QuarantineUserActionResponse,
  QuarantineUserActionResponse$inboundSchema,
  QuarantineUserActionResponse$Outbound,
  QuarantineUserActionResponse$outboundSchema,
} from "./quarantineuseractionresponse.js";
import {
  SpamLinkTriggerMetadataResponse,
  SpamLinkTriggerMetadataResponse$inboundSchema,
  SpamLinkTriggerMetadataResponse$Outbound,
  SpamLinkTriggerMetadataResponse$outboundSchema,
} from "./spamlinktriggermetadataresponse.js";
import {
  UserCommunicationDisabledActionResponse,
  UserCommunicationDisabledActionResponse$inboundSchema,
  UserCommunicationDisabledActionResponse$Outbound,
  UserCommunicationDisabledActionResponse$outboundSchema,
} from "./usercommunicationdisabledactionresponse.js";

export type SpamLinkRuleResponseActions =
  | BlockMessageActionResponse
  | FlagToChannelActionResponse
  | QuarantineUserActionResponse
  | UserCommunicationDisabledActionResponse;

export type SpamLinkRuleResponse = {
  id: string;
  guildId: string;
  creatorId: string;
  name: string;
  eventType?: 1 | undefined;
  actions: Array<
    | BlockMessageActionResponse
    | FlagToChannelActionResponse
    | QuarantineUserActionResponse
    | UserCommunicationDisabledActionResponse
  >;
  triggerType?: 1 | undefined;
  enabled?: boolean | null | undefined;
  exemptRoles?: Array<string> | null | undefined;
  exemptChannels?: Array<string> | null | undefined;
  triggerMetadata: SpamLinkTriggerMetadataResponse;
};

/** @internal */
export const SpamLinkRuleResponseActions$inboundSchema: z.ZodType<
  SpamLinkRuleResponseActions,
  z.ZodTypeDef,
  unknown
> = z.union([
  BlockMessageActionResponse$inboundSchema,
  FlagToChannelActionResponse$inboundSchema,
  QuarantineUserActionResponse$inboundSchema,
  UserCommunicationDisabledActionResponse$inboundSchema,
]);

/** @internal */
export type SpamLinkRuleResponseActions$Outbound =
  | BlockMessageActionResponse$Outbound
  | FlagToChannelActionResponse$Outbound
  | QuarantineUserActionResponse$Outbound
  | UserCommunicationDisabledActionResponse$Outbound;

/** @internal */
export const SpamLinkRuleResponseActions$outboundSchema: z.ZodType<
  SpamLinkRuleResponseActions$Outbound,
  z.ZodTypeDef,
  SpamLinkRuleResponseActions
> = z.union([
  BlockMessageActionResponse$outboundSchema,
  FlagToChannelActionResponse$outboundSchema,
  QuarantineUserActionResponse$outboundSchema,
  UserCommunicationDisabledActionResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SpamLinkRuleResponseActions$ {
  /** @deprecated use `SpamLinkRuleResponseActions$inboundSchema` instead. */
  export const inboundSchema = SpamLinkRuleResponseActions$inboundSchema;
  /** @deprecated use `SpamLinkRuleResponseActions$outboundSchema` instead. */
  export const outboundSchema = SpamLinkRuleResponseActions$outboundSchema;
  /** @deprecated use `SpamLinkRuleResponseActions$Outbound` instead. */
  export type Outbound = SpamLinkRuleResponseActions$Outbound;
}

/** @internal */
export const SpamLinkRuleResponse$inboundSchema: z.ZodType<
  SpamLinkRuleResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  guild_id: z.string(),
  creator_id: z.string(),
  name: z.string(),
  event_type: z.literal(1).optional(),
  actions: z.array(
    z.union([
      BlockMessageActionResponse$inboundSchema,
      FlagToChannelActionResponse$inboundSchema,
      QuarantineUserActionResponse$inboundSchema,
      UserCommunicationDisabledActionResponse$inboundSchema,
    ]),
  ),
  trigger_type: z.literal(1).optional(),
  enabled: z.nullable(z.boolean()).optional(),
  exempt_roles: z.nullable(z.array(z.string())).optional(),
  exempt_channels: z.nullable(z.array(z.string())).optional(),
  trigger_metadata: SpamLinkTriggerMetadataResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "creator_id": "creatorId",
    "event_type": "eventType",
    "trigger_type": "triggerType",
    "exempt_roles": "exemptRoles",
    "exempt_channels": "exemptChannels",
    "trigger_metadata": "triggerMetadata",
  });
});

/** @internal */
export type SpamLinkRuleResponse$Outbound = {
  id: string;
  guild_id: string;
  creator_id: string;
  name: string;
  event_type: 1;
  actions: Array<
    | BlockMessageActionResponse$Outbound
    | FlagToChannelActionResponse$Outbound
    | QuarantineUserActionResponse$Outbound
    | UserCommunicationDisabledActionResponse$Outbound
  >;
  trigger_type: 1;
  enabled?: boolean | null | undefined;
  exempt_roles?: Array<string> | null | undefined;
  exempt_channels?: Array<string> | null | undefined;
  trigger_metadata: SpamLinkTriggerMetadataResponse$Outbound;
};

/** @internal */
export const SpamLinkRuleResponse$outboundSchema: z.ZodType<
  SpamLinkRuleResponse$Outbound,
  z.ZodTypeDef,
  SpamLinkRuleResponse
> = z.object({
  id: z.string(),
  guildId: z.string(),
  creatorId: z.string(),
  name: z.string(),
  eventType: z.literal(1).default(1 as const),
  actions: z.array(
    z.union([
      BlockMessageActionResponse$outboundSchema,
      FlagToChannelActionResponse$outboundSchema,
      QuarantineUserActionResponse$outboundSchema,
      UserCommunicationDisabledActionResponse$outboundSchema,
    ]),
  ),
  triggerType: z.literal(1).default(1 as const),
  enabled: z.nullable(z.boolean()).optional(),
  exemptRoles: z.nullable(z.array(z.string())).optional(),
  exemptChannels: z.nullable(z.array(z.string())).optional(),
  triggerMetadata: SpamLinkTriggerMetadataResponse$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    creatorId: "creator_id",
    eventType: "event_type",
    triggerType: "trigger_type",
    exemptRoles: "exempt_roles",
    exemptChannels: "exempt_channels",
    triggerMetadata: "trigger_metadata",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SpamLinkRuleResponse$ {
  /** @deprecated use `SpamLinkRuleResponse$inboundSchema` instead. */
  export const inboundSchema = SpamLinkRuleResponse$inboundSchema;
  /** @deprecated use `SpamLinkRuleResponse$outboundSchema` instead. */
  export const outboundSchema = SpamLinkRuleResponse$outboundSchema;
  /** @deprecated use `SpamLinkRuleResponse$Outbound` instead. */
  export type Outbound = SpamLinkRuleResponse$Outbound;
}
