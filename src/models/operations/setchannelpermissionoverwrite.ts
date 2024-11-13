/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type SetChannelPermissionOverwriteRequestBody = {
  type?: 0 | null | undefined;
  allow?: number | null | undefined;
  deny?: number | null | undefined;
};

export type SetChannelPermissionOverwriteRequest = {
  channelId: string;
  overwriteId: string;
  requestBody: SetChannelPermissionOverwriteRequestBody;
};

/** @internal */
export const SetChannelPermissionOverwriteRequestBody$inboundSchema: z.ZodType<
  SetChannelPermissionOverwriteRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.nullable(z.literal(0)).optional(),
  allow: z.nullable(z.number().int()).optional(),
  deny: z.nullable(z.number().int()).optional(),
});

/** @internal */
export type SetChannelPermissionOverwriteRequestBody$Outbound = {
  type: 0 | null;
  allow?: number | null | undefined;
  deny?: number | null | undefined;
};

/** @internal */
export const SetChannelPermissionOverwriteRequestBody$outboundSchema: z.ZodType<
  SetChannelPermissionOverwriteRequestBody$Outbound,
  z.ZodTypeDef,
  SetChannelPermissionOverwriteRequestBody
> = z.object({
  type: z.nullable(z.literal(0).default(0 as const)),
  allow: z.nullable(z.number().int()).optional(),
  deny: z.nullable(z.number().int()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SetChannelPermissionOverwriteRequestBody$ {
  /** @deprecated use `SetChannelPermissionOverwriteRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    SetChannelPermissionOverwriteRequestBody$inboundSchema;
  /** @deprecated use `SetChannelPermissionOverwriteRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    SetChannelPermissionOverwriteRequestBody$outboundSchema;
  /** @deprecated use `SetChannelPermissionOverwriteRequestBody$Outbound` instead. */
  export type Outbound = SetChannelPermissionOverwriteRequestBody$Outbound;
}

/** @internal */
export const SetChannelPermissionOverwriteRequest$inboundSchema: z.ZodType<
  SetChannelPermissionOverwriteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
  overwrite_id: z.string(),
  RequestBody: z.lazy(() =>
    SetChannelPermissionOverwriteRequestBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
    "overwrite_id": "overwriteId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type SetChannelPermissionOverwriteRequest$Outbound = {
  channel_id: string;
  overwrite_id: string;
  RequestBody: SetChannelPermissionOverwriteRequestBody$Outbound;
};

/** @internal */
export const SetChannelPermissionOverwriteRequest$outboundSchema: z.ZodType<
  SetChannelPermissionOverwriteRequest$Outbound,
  z.ZodTypeDef,
  SetChannelPermissionOverwriteRequest
> = z.object({
  channelId: z.string(),
  overwriteId: z.string(),
  requestBody: z.lazy(() =>
    SetChannelPermissionOverwriteRequestBody$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
    overwriteId: "overwrite_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SetChannelPermissionOverwriteRequest$ {
  /** @deprecated use `SetChannelPermissionOverwriteRequest$inboundSchema` instead. */
  export const inboundSchema =
    SetChannelPermissionOverwriteRequest$inboundSchema;
  /** @deprecated use `SetChannelPermissionOverwriteRequest$outboundSchema` instead. */
  export const outboundSchema =
    SetChannelPermissionOverwriteRequest$outboundSchema;
  /** @deprecated use `SetChannelPermissionOverwriteRequest$Outbound` instead. */
  export type Outbound = SetChannelPermissionOverwriteRequest$Outbound;
}
