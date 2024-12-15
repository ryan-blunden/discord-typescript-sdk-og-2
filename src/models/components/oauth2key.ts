/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type OAuth2Key = {
  kty: string;
  use: string;
  kid: string;
  n: string;
  e: string;
  alg: string;
};

/** @internal */
export const OAuth2Key$inboundSchema: z.ZodType<
  OAuth2Key,
  z.ZodTypeDef,
  unknown
> = z.object({
  kty: z.string(),
  use: z.string(),
  kid: z.string(),
  n: z.string(),
  e: z.string(),
  alg: z.string(),
});

/** @internal */
export type OAuth2Key$Outbound = {
  kty: string;
  use: string;
  kid: string;
  n: string;
  e: string;
  alg: string;
};

/** @internal */
export const OAuth2Key$outboundSchema: z.ZodType<
  OAuth2Key$Outbound,
  z.ZodTypeDef,
  OAuth2Key
> = z.object({
  kty: z.string(),
  use: z.string(),
  kid: z.string(),
  n: z.string(),
  e: z.string(),
  alg: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OAuth2Key$ {
  /** @deprecated use `OAuth2Key$inboundSchema` instead. */
  export const inboundSchema = OAuth2Key$inboundSchema;
  /** @deprecated use `OAuth2Key$outboundSchema` instead. */
  export const outboundSchema = OAuth2Key$outboundSchema;
  /** @deprecated use `OAuth2Key$Outbound` instead. */
  export type Outbound = OAuth2Key$Outbound;
}

export function oAuth2KeyToJSON(oAuth2Key: OAuth2Key): string {
  return JSON.stringify(OAuth2Key$outboundSchema.parse(oAuth2Key));
}

export function oAuth2KeyFromJSON(
  jsonString: string,
): SafeParseResult<OAuth2Key, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OAuth2Key$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OAuth2Key' from JSON`,
  );
}
