/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetPublicKeysSecurity = {
  botToken?: string | undefined;
};

/** @internal */
export const GetPublicKeysSecurity$inboundSchema: z.ZodType<
  GetPublicKeysSecurity,
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
export type GetPublicKeysSecurity$Outbound = {
  BotToken?: string | undefined;
};

/** @internal */
export const GetPublicKeysSecurity$outboundSchema: z.ZodType<
  GetPublicKeysSecurity$Outbound,
  z.ZodTypeDef,
  GetPublicKeysSecurity
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
export namespace GetPublicKeysSecurity$ {
  /** @deprecated use `GetPublicKeysSecurity$inboundSchema` instead. */
  export const inboundSchema = GetPublicKeysSecurity$inboundSchema;
  /** @deprecated use `GetPublicKeysSecurity$outboundSchema` instead. */
  export const outboundSchema = GetPublicKeysSecurity$outboundSchema;
  /** @deprecated use `GetPublicKeysSecurity$Outbound` instead. */
  export type Outbound = GetPublicKeysSecurity$Outbound;
}

export function getPublicKeysSecurityToJSON(
  getPublicKeysSecurity: GetPublicKeysSecurity,
): string {
  return JSON.stringify(
    GetPublicKeysSecurity$outboundSchema.parse(getPublicKeysSecurity),
  );
}

export function getPublicKeysSecurityFromJSON(
  jsonString: string,
): SafeParseResult<GetPublicKeysSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetPublicKeysSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPublicKeysSecurity' from JSON`,
  );
}
