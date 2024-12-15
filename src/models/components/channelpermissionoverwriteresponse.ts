/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ChannelPermissionOverwriteResponse = {
  id: string;
  type?: 0 | undefined;
  allow: string;
  deny: string;
};

/** @internal */
export const ChannelPermissionOverwriteResponse$inboundSchema: z.ZodType<
  ChannelPermissionOverwriteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: z.literal(0).optional(),
  allow: z.string(),
  deny: z.string(),
});

/** @internal */
export type ChannelPermissionOverwriteResponse$Outbound = {
  id: string;
  type: 0;
  allow: string;
  deny: string;
};

/** @internal */
export const ChannelPermissionOverwriteResponse$outboundSchema: z.ZodType<
  ChannelPermissionOverwriteResponse$Outbound,
  z.ZodTypeDef,
  ChannelPermissionOverwriteResponse
> = z.object({
  id: z.string(),
  type: z.literal(0).default(0 as const),
  allow: z.string(),
  deny: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChannelPermissionOverwriteResponse$ {
  /** @deprecated use `ChannelPermissionOverwriteResponse$inboundSchema` instead. */
  export const inboundSchema = ChannelPermissionOverwriteResponse$inboundSchema;
  /** @deprecated use `ChannelPermissionOverwriteResponse$outboundSchema` instead. */
  export const outboundSchema =
    ChannelPermissionOverwriteResponse$outboundSchema;
  /** @deprecated use `ChannelPermissionOverwriteResponse$Outbound` instead. */
  export type Outbound = ChannelPermissionOverwriteResponse$Outbound;
}

export function channelPermissionOverwriteResponseToJSON(
  channelPermissionOverwriteResponse: ChannelPermissionOverwriteResponse,
): string {
  return JSON.stringify(
    ChannelPermissionOverwriteResponse$outboundSchema.parse(
      channelPermissionOverwriteResponse,
    ),
  );
}

export function channelPermissionOverwriteResponseFromJSON(
  jsonString: string,
): SafeParseResult<ChannelPermissionOverwriteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ChannelPermissionOverwriteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChannelPermissionOverwriteResponse' from JSON`,
  );
}
