/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListGuildApplicationCommandsSecurity = {
  botToken?: string | undefined;
};

export type ListGuildApplicationCommandsRequest = {
  applicationId: string;
  guildId: string;
  withLocalizations?: boolean | undefined;
};

/** @internal */
export const ListGuildApplicationCommandsSecurity$inboundSchema: z.ZodType<
  ListGuildApplicationCommandsSecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  BotToken: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "BotToken": "botToken",
  });
});

/** @internal */
export type ListGuildApplicationCommandsSecurity$Outbound = {
  BotToken?: string | undefined;
};

/** @internal */
export const ListGuildApplicationCommandsSecurity$outboundSchema: z.ZodType<
  ListGuildApplicationCommandsSecurity$Outbound,
  z.ZodTypeDef,
  ListGuildApplicationCommandsSecurity
> = z.object({
  botToken: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    botToken: "BotToken",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListGuildApplicationCommandsSecurity$ {
  /** @deprecated use `ListGuildApplicationCommandsSecurity$inboundSchema` instead. */
  export const inboundSchema =
    ListGuildApplicationCommandsSecurity$inboundSchema;
  /** @deprecated use `ListGuildApplicationCommandsSecurity$outboundSchema` instead. */
  export const outboundSchema =
    ListGuildApplicationCommandsSecurity$outboundSchema;
  /** @deprecated use `ListGuildApplicationCommandsSecurity$Outbound` instead. */
  export type Outbound = ListGuildApplicationCommandsSecurity$Outbound;
}

export function listGuildApplicationCommandsSecurityToJSON(
  listGuildApplicationCommandsSecurity: ListGuildApplicationCommandsSecurity,
): string {
  return JSON.stringify(
    ListGuildApplicationCommandsSecurity$outboundSchema.parse(
      listGuildApplicationCommandsSecurity,
    ),
  );
}

export function listGuildApplicationCommandsSecurityFromJSON(
  jsonString: string,
): SafeParseResult<ListGuildApplicationCommandsSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListGuildApplicationCommandsSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListGuildApplicationCommandsSecurity' from JSON`,
  );
}

/** @internal */
export const ListGuildApplicationCommandsRequest$inboundSchema: z.ZodType<
  ListGuildApplicationCommandsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  application_id: z.string(),
  guild_id: z.string(),
  with_localizations: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
    "guild_id": "guildId",
    "with_localizations": "withLocalizations",
  });
});

/** @internal */
export type ListGuildApplicationCommandsRequest$Outbound = {
  application_id: string;
  guild_id: string;
  with_localizations?: boolean | undefined;
};

/** @internal */
export const ListGuildApplicationCommandsRequest$outboundSchema: z.ZodType<
  ListGuildApplicationCommandsRequest$Outbound,
  z.ZodTypeDef,
  ListGuildApplicationCommandsRequest
> = z.object({
  applicationId: z.string(),
  guildId: z.string(),
  withLocalizations: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
    guildId: "guild_id",
    withLocalizations: "with_localizations",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListGuildApplicationCommandsRequest$ {
  /** @deprecated use `ListGuildApplicationCommandsRequest$inboundSchema` instead. */
  export const inboundSchema =
    ListGuildApplicationCommandsRequest$inboundSchema;
  /** @deprecated use `ListGuildApplicationCommandsRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListGuildApplicationCommandsRequest$outboundSchema;
  /** @deprecated use `ListGuildApplicationCommandsRequest$Outbound` instead. */
  export type Outbound = ListGuildApplicationCommandsRequest$Outbound;
}

export function listGuildApplicationCommandsRequestToJSON(
  listGuildApplicationCommandsRequest: ListGuildApplicationCommandsRequest,
): string {
  return JSON.stringify(
    ListGuildApplicationCommandsRequest$outboundSchema.parse(
      listGuildApplicationCommandsRequest,
    ),
  );
}

export function listGuildApplicationCommandsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListGuildApplicationCommandsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListGuildApplicationCommandsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListGuildApplicationCommandsRequest' from JSON`,
  );
}
