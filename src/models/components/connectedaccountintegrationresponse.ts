/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AccountResponse,
  AccountResponse$inboundSchema,
  AccountResponse$Outbound,
  AccountResponse$outboundSchema,
} from "./accountresponse.js";
import {
  ConnectedAccountGuildResponse,
  ConnectedAccountGuildResponse$inboundSchema,
  ConnectedAccountGuildResponse$Outbound,
  ConnectedAccountGuildResponse$outboundSchema,
} from "./connectedaccountguildresponse.js";

export type ConnectedAccountIntegrationResponse = {
  id: string;
  type?: "discord" | undefined;
  account: AccountResponse;
  guild: ConnectedAccountGuildResponse;
};

/** @internal */
export const ConnectedAccountIntegrationResponse$inboundSchema: z.ZodType<
  ConnectedAccountIntegrationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: z.literal("discord").optional(),
  account: AccountResponse$inboundSchema,
  guild: ConnectedAccountGuildResponse$inboundSchema,
});

/** @internal */
export type ConnectedAccountIntegrationResponse$Outbound = {
  id: string;
  type: "discord";
  account: AccountResponse$Outbound;
  guild: ConnectedAccountGuildResponse$Outbound;
};

/** @internal */
export const ConnectedAccountIntegrationResponse$outboundSchema: z.ZodType<
  ConnectedAccountIntegrationResponse$Outbound,
  z.ZodTypeDef,
  ConnectedAccountIntegrationResponse
> = z.object({
  id: z.string(),
  type: z.literal("discord").default("discord" as const),
  account: AccountResponse$outboundSchema,
  guild: ConnectedAccountGuildResponse$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectedAccountIntegrationResponse$ {
  /** @deprecated use `ConnectedAccountIntegrationResponse$inboundSchema` instead. */
  export const inboundSchema =
    ConnectedAccountIntegrationResponse$inboundSchema;
  /** @deprecated use `ConnectedAccountIntegrationResponse$outboundSchema` instead. */
  export const outboundSchema =
    ConnectedAccountIntegrationResponse$outboundSchema;
  /** @deprecated use `ConnectedAccountIntegrationResponse$Outbound` instead. */
  export type Outbound = ConnectedAccountIntegrationResponse$Outbound;
}

export function connectedAccountIntegrationResponseToJSON(
  connectedAccountIntegrationResponse: ConnectedAccountIntegrationResponse,
): string {
  return JSON.stringify(
    ConnectedAccountIntegrationResponse$outboundSchema.parse(
      connectedAccountIntegrationResponse,
    ),
  );
}

export function connectedAccountIntegrationResponseFromJSON(
  jsonString: string,
): SafeParseResult<ConnectedAccountIntegrationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ConnectedAccountIntegrationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConnectedAccountIntegrationResponse' from JSON`,
  );
}
