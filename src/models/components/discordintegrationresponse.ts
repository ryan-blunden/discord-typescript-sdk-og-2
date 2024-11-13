/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  AccountResponse,
  AccountResponse$inboundSchema,
  AccountResponse$Outbound,
  AccountResponse$outboundSchema,
} from "./accountresponse.js";
import {
  IntegrationApplicationResponse,
  IntegrationApplicationResponse$inboundSchema,
  IntegrationApplicationResponse$Outbound,
  IntegrationApplicationResponse$outboundSchema,
} from "./integrationapplicationresponse.js";
import {
  UserResponse,
  UserResponse$inboundSchema,
  UserResponse$Outbound,
  UserResponse$outboundSchema,
} from "./userresponse.js";

export type DiscordIntegrationResponse = {
  type?: "discord" | undefined;
  name?: string | null | undefined;
  account?: AccountResponse | null | undefined;
  enabled?: boolean | null | undefined;
  id: string;
  application: IntegrationApplicationResponse;
  scopes: Array<string>;
  user?: UserResponse | null | undefined;
};

/** @internal */
export const DiscordIntegrationResponse$inboundSchema: z.ZodType<
  DiscordIntegrationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("discord").optional(),
  name: z.nullable(z.string()).optional(),
  account: z.nullable(AccountResponse$inboundSchema).optional(),
  enabled: z.nullable(z.boolean()).optional(),
  id: z.string(),
  application: IntegrationApplicationResponse$inboundSchema,
  scopes: z.array(z.string()),
  user: z.nullable(UserResponse$inboundSchema).optional(),
});

/** @internal */
export type DiscordIntegrationResponse$Outbound = {
  type: "discord";
  name?: string | null | undefined;
  account?: AccountResponse$Outbound | null | undefined;
  enabled?: boolean | null | undefined;
  id: string;
  application: IntegrationApplicationResponse$Outbound;
  scopes: Array<string>;
  user?: UserResponse$Outbound | null | undefined;
};

/** @internal */
export const DiscordIntegrationResponse$outboundSchema: z.ZodType<
  DiscordIntegrationResponse$Outbound,
  z.ZodTypeDef,
  DiscordIntegrationResponse
> = z.object({
  type: z.literal("discord").default("discord" as const),
  name: z.nullable(z.string()).optional(),
  account: z.nullable(AccountResponse$outboundSchema).optional(),
  enabled: z.nullable(z.boolean()).optional(),
  id: z.string(),
  application: IntegrationApplicationResponse$outboundSchema,
  scopes: z.array(z.string()),
  user: z.nullable(UserResponse$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscordIntegrationResponse$ {
  /** @deprecated use `DiscordIntegrationResponse$inboundSchema` instead. */
  export const inboundSchema = DiscordIntegrationResponse$inboundSchema;
  /** @deprecated use `DiscordIntegrationResponse$outboundSchema` instead. */
  export const outboundSchema = DiscordIntegrationResponse$outboundSchema;
  /** @deprecated use `DiscordIntegrationResponse$Outbound` instead. */
  export type Outbound = DiscordIntegrationResponse$Outbound;
}
