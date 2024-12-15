/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
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
  MLSpamTriggerMetadata,
  MLSpamTriggerMetadata$inboundSchema,
  MLSpamTriggerMetadata$Outbound,
  MLSpamTriggerMetadata$outboundSchema,
} from "./mlspamtriggermetadata.js";
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

export type MLSpamUpsertRequestPartialActions =
  | BlockMessageAction
  | FlagToChannelAction
  | QuarantineUserAction
  | UserCommunicationDisabledAction;

export type MLSpamUpsertRequestPartial = {
  name?: string | undefined;
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
  triggerMetadata?: MLSpamTriggerMetadata | null | undefined;
};

/** @internal */
export const MLSpamUpsertRequestPartialActions$inboundSchema: z.ZodType<
  MLSpamUpsertRequestPartialActions,
  z.ZodTypeDef,
  unknown
> = z.union([
  BlockMessageAction$inboundSchema,
  FlagToChannelAction$inboundSchema,
  QuarantineUserAction$inboundSchema,
  UserCommunicationDisabledAction$inboundSchema,
]);

/** @internal */
export type MLSpamUpsertRequestPartialActions$Outbound =
  | BlockMessageAction$Outbound
  | FlagToChannelAction$Outbound
  | QuarantineUserAction$Outbound
  | UserCommunicationDisabledAction$Outbound;

/** @internal */
export const MLSpamUpsertRequestPartialActions$outboundSchema: z.ZodType<
  MLSpamUpsertRequestPartialActions$Outbound,
  z.ZodTypeDef,
  MLSpamUpsertRequestPartialActions
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
export namespace MLSpamUpsertRequestPartialActions$ {
  /** @deprecated use `MLSpamUpsertRequestPartialActions$inboundSchema` instead. */
  export const inboundSchema = MLSpamUpsertRequestPartialActions$inboundSchema;
  /** @deprecated use `MLSpamUpsertRequestPartialActions$outboundSchema` instead. */
  export const outboundSchema =
    MLSpamUpsertRequestPartialActions$outboundSchema;
  /** @deprecated use `MLSpamUpsertRequestPartialActions$Outbound` instead. */
  export type Outbound = MLSpamUpsertRequestPartialActions$Outbound;
}

export function mlSpamUpsertRequestPartialActionsToJSON(
  mlSpamUpsertRequestPartialActions: MLSpamUpsertRequestPartialActions,
): string {
  return JSON.stringify(
    MLSpamUpsertRequestPartialActions$outboundSchema.parse(
      mlSpamUpsertRequestPartialActions,
    ),
  );
}

export function mlSpamUpsertRequestPartialActionsFromJSON(
  jsonString: string,
): SafeParseResult<MLSpamUpsertRequestPartialActions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MLSpamUpsertRequestPartialActions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MLSpamUpsertRequestPartialActions' from JSON`,
  );
}

/** @internal */
export const MLSpamUpsertRequestPartial$inboundSchema: z.ZodType<
  MLSpamUpsertRequestPartial,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
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
  trigger_metadata: z.nullable(MLSpamTriggerMetadata$inboundSchema).optional(),
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
export type MLSpamUpsertRequestPartial$Outbound = {
  name?: string | undefined;
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
  trigger_metadata?: MLSpamTriggerMetadata$Outbound | null | undefined;
};

/** @internal */
export const MLSpamUpsertRequestPartial$outboundSchema: z.ZodType<
  MLSpamUpsertRequestPartial$Outbound,
  z.ZodTypeDef,
  MLSpamUpsertRequestPartial
> = z.object({
  name: z.string().optional(),
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
  triggerMetadata: z.nullable(MLSpamTriggerMetadata$outboundSchema).optional(),
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
export namespace MLSpamUpsertRequestPartial$ {
  /** @deprecated use `MLSpamUpsertRequestPartial$inboundSchema` instead. */
  export const inboundSchema = MLSpamUpsertRequestPartial$inboundSchema;
  /** @deprecated use `MLSpamUpsertRequestPartial$outboundSchema` instead. */
  export const outboundSchema = MLSpamUpsertRequestPartial$outboundSchema;
  /** @deprecated use `MLSpamUpsertRequestPartial$Outbound` instead. */
  export type Outbound = MLSpamUpsertRequestPartial$Outbound;
}

export function mlSpamUpsertRequestPartialToJSON(
  mlSpamUpsertRequestPartial: MLSpamUpsertRequestPartial,
): string {
  return JSON.stringify(
    MLSpamUpsertRequestPartial$outboundSchema.parse(mlSpamUpsertRequestPartial),
  );
}

export function mlSpamUpsertRequestPartialFromJSON(
  jsonString: string,
): SafeParseResult<MLSpamUpsertRequestPartial, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MLSpamUpsertRequestPartial$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MLSpamUpsertRequestPartial' from JSON`,
  );
}
