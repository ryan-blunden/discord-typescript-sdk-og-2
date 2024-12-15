/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type BulkSetApplicationCommandsSecurity = {
  botToken?: string | undefined;
};

export type BulkSetApplicationCommandsRequest = {
  applicationId: string;
  requestBody: Array<components.ApplicationCommandUpdateRequest> | null;
};

/** @internal */
export const BulkSetApplicationCommandsSecurity$inboundSchema: z.ZodType<
  BulkSetApplicationCommandsSecurity,
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
export type BulkSetApplicationCommandsSecurity$Outbound = {
  BotToken?: string | undefined;
};

/** @internal */
export const BulkSetApplicationCommandsSecurity$outboundSchema: z.ZodType<
  BulkSetApplicationCommandsSecurity$Outbound,
  z.ZodTypeDef,
  BulkSetApplicationCommandsSecurity
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
export namespace BulkSetApplicationCommandsSecurity$ {
  /** @deprecated use `BulkSetApplicationCommandsSecurity$inboundSchema` instead. */
  export const inboundSchema = BulkSetApplicationCommandsSecurity$inboundSchema;
  /** @deprecated use `BulkSetApplicationCommandsSecurity$outboundSchema` instead. */
  export const outboundSchema =
    BulkSetApplicationCommandsSecurity$outboundSchema;
  /** @deprecated use `BulkSetApplicationCommandsSecurity$Outbound` instead. */
  export type Outbound = BulkSetApplicationCommandsSecurity$Outbound;
}

export function bulkSetApplicationCommandsSecurityToJSON(
  bulkSetApplicationCommandsSecurity: BulkSetApplicationCommandsSecurity,
): string {
  return JSON.stringify(
    BulkSetApplicationCommandsSecurity$outboundSchema.parse(
      bulkSetApplicationCommandsSecurity,
    ),
  );
}

export function bulkSetApplicationCommandsSecurityFromJSON(
  jsonString: string,
): SafeParseResult<BulkSetApplicationCommandsSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      BulkSetApplicationCommandsSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BulkSetApplicationCommandsSecurity' from JSON`,
  );
}

/** @internal */
export const BulkSetApplicationCommandsRequest$inboundSchema: z.ZodType<
  BulkSetApplicationCommandsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  application_id: z.string(),
  RequestBody: z.nullable(
    z.array(components.ApplicationCommandUpdateRequest$inboundSchema),
  ),
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type BulkSetApplicationCommandsRequest$Outbound = {
  application_id: string;
  RequestBody:
    | Array<components.ApplicationCommandUpdateRequest$Outbound>
    | null;
};

/** @internal */
export const BulkSetApplicationCommandsRequest$outboundSchema: z.ZodType<
  BulkSetApplicationCommandsRequest$Outbound,
  z.ZodTypeDef,
  BulkSetApplicationCommandsRequest
> = z.object({
  applicationId: z.string(),
  requestBody: z.nullable(
    z.array(components.ApplicationCommandUpdateRequest$outboundSchema),
  ),
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkSetApplicationCommandsRequest$ {
  /** @deprecated use `BulkSetApplicationCommandsRequest$inboundSchema` instead. */
  export const inboundSchema = BulkSetApplicationCommandsRequest$inboundSchema;
  /** @deprecated use `BulkSetApplicationCommandsRequest$outboundSchema` instead. */
  export const outboundSchema =
    BulkSetApplicationCommandsRequest$outboundSchema;
  /** @deprecated use `BulkSetApplicationCommandsRequest$Outbound` instead. */
  export type Outbound = BulkSetApplicationCommandsRequest$Outbound;
}

export function bulkSetApplicationCommandsRequestToJSON(
  bulkSetApplicationCommandsRequest: BulkSetApplicationCommandsRequest,
): string {
  return JSON.stringify(
    BulkSetApplicationCommandsRequest$outboundSchema.parse(
      bulkSetApplicationCommandsRequest,
    ),
  );
}

export function bulkSetApplicationCommandsRequestFromJSON(
  jsonString: string,
): SafeParseResult<BulkSetApplicationCommandsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BulkSetApplicationCommandsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BulkSetApplicationCommandsRequest' from JSON`,
  );
}
