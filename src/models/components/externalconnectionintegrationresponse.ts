/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  AccountResponse,
  AccountResponse$inboundSchema,
  AccountResponse$Outbound,
  AccountResponse$outboundSchema,
} from "./accountresponse.js";
import {
  UserResponse,
  UserResponse$inboundSchema,
  UserResponse$Outbound,
  UserResponse$outboundSchema,
} from "./userresponse.js";

export type ExternalConnectionIntegrationResponse = {
  type?: "discord" | undefined;
  name?: string | null | undefined;
  account?: AccountResponse | null | undefined;
  enabled?: boolean | null | undefined;
  id: string;
  user: UserResponse;
  revoked?: boolean | null | undefined;
  expireBehavior?: 0 | null | undefined;
  expireGracePeriod?: 1 | null | undefined;
  subscriberCount?: number | null | undefined;
  syncedAt?: Date | null | undefined;
  roleId?: string | null | undefined;
  syncing?: boolean | null | undefined;
  enableEmoticons?: boolean | null | undefined;
};

/** @internal */
export const ExternalConnectionIntegrationResponse$inboundSchema: z.ZodType<
  ExternalConnectionIntegrationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("discord").optional(),
  name: z.nullable(z.string()).optional(),
  account: z.nullable(AccountResponse$inboundSchema).optional(),
  enabled: z.nullable(z.boolean()).optional(),
  id: z.string(),
  user: UserResponse$inboundSchema,
  revoked: z.nullable(z.boolean()).optional(),
  expire_behavior: z.nullable(z.literal(0)).optional(),
  expire_grace_period: z.nullable(z.literal(1)).optional(),
  subscriber_count: z.nullable(z.number().int()).optional(),
  synced_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  role_id: z.nullable(z.string()).optional(),
  syncing: z.nullable(z.boolean()).optional(),
  enable_emoticons: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    "expire_behavior": "expireBehavior",
    "expire_grace_period": "expireGracePeriod",
    "subscriber_count": "subscriberCount",
    "synced_at": "syncedAt",
    "role_id": "roleId",
    "enable_emoticons": "enableEmoticons",
  });
});

/** @internal */
export type ExternalConnectionIntegrationResponse$Outbound = {
  type: "discord";
  name?: string | null | undefined;
  account?: AccountResponse$Outbound | null | undefined;
  enabled?: boolean | null | undefined;
  id: string;
  user: UserResponse$Outbound;
  revoked?: boolean | null | undefined;
  expire_behavior: 0 | null;
  expire_grace_period: 1 | null;
  subscriber_count?: number | null | undefined;
  synced_at?: string | null | undefined;
  role_id?: string | null | undefined;
  syncing?: boolean | null | undefined;
  enable_emoticons?: boolean | null | undefined;
};

/** @internal */
export const ExternalConnectionIntegrationResponse$outboundSchema: z.ZodType<
  ExternalConnectionIntegrationResponse$Outbound,
  z.ZodTypeDef,
  ExternalConnectionIntegrationResponse
> = z.object({
  type: z.literal("discord").default("discord" as const),
  name: z.nullable(z.string()).optional(),
  account: z.nullable(AccountResponse$outboundSchema).optional(),
  enabled: z.nullable(z.boolean()).optional(),
  id: z.string(),
  user: UserResponse$outboundSchema,
  revoked: z.nullable(z.boolean()).optional(),
  expireBehavior: z.nullable(z.literal(0).default(0 as const)),
  expireGracePeriod: z.nullable(z.literal(1).default(1 as const)),
  subscriberCount: z.nullable(z.number().int()).optional(),
  syncedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  roleId: z.nullable(z.string()).optional(),
  syncing: z.nullable(z.boolean()).optional(),
  enableEmoticons: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    expireBehavior: "expire_behavior",
    expireGracePeriod: "expire_grace_period",
    subscriberCount: "subscriber_count",
    syncedAt: "synced_at",
    roleId: "role_id",
    enableEmoticons: "enable_emoticons",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExternalConnectionIntegrationResponse$ {
  /** @deprecated use `ExternalConnectionIntegrationResponse$inboundSchema` instead. */
  export const inboundSchema =
    ExternalConnectionIntegrationResponse$inboundSchema;
  /** @deprecated use `ExternalConnectionIntegrationResponse$outboundSchema` instead. */
  export const outboundSchema =
    ExternalConnectionIntegrationResponse$outboundSchema;
  /** @deprecated use `ExternalConnectionIntegrationResponse$Outbound` instead. */
  export type Outbound = ExternalConnectionIntegrationResponse$Outbound;
}
