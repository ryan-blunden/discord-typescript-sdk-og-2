/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ApplicationResponse,
  ApplicationResponse$inboundSchema,
  ApplicationResponse$Outbound,
  ApplicationResponse$outboundSchema,
} from "./applicationresponse.js";
import {
  UserResponse,
  UserResponse$inboundSchema,
  UserResponse$Outbound,
  UserResponse$outboundSchema,
} from "./userresponse.js";

export type OAuth2GetAuthorizationResponse = {
  application: ApplicationResponse;
  expires: Date;
  scopes: Array<string>;
  user?: UserResponse | null | undefined;
};

/** @internal */
export const OAuth2GetAuthorizationResponse$inboundSchema: z.ZodType<
  OAuth2GetAuthorizationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  application: ApplicationResponse$inboundSchema,
  expires: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  scopes: z.array(z.string()),
  user: z.nullable(UserResponse$inboundSchema).optional(),
});

/** @internal */
export type OAuth2GetAuthorizationResponse$Outbound = {
  application: ApplicationResponse$Outbound;
  expires: string;
  scopes: Array<string>;
  user?: UserResponse$Outbound | null | undefined;
};

/** @internal */
export const OAuth2GetAuthorizationResponse$outboundSchema: z.ZodType<
  OAuth2GetAuthorizationResponse$Outbound,
  z.ZodTypeDef,
  OAuth2GetAuthorizationResponse
> = z.object({
  application: ApplicationResponse$outboundSchema,
  expires: z.date().transform(v => v.toISOString()),
  scopes: z.array(z.string()),
  user: z.nullable(UserResponse$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OAuth2GetAuthorizationResponse$ {
  /** @deprecated use `OAuth2GetAuthorizationResponse$inboundSchema` instead. */
  export const inboundSchema = OAuth2GetAuthorizationResponse$inboundSchema;
  /** @deprecated use `OAuth2GetAuthorizationResponse$outboundSchema` instead. */
  export const outboundSchema = OAuth2GetAuthorizationResponse$outboundSchema;
  /** @deprecated use `OAuth2GetAuthorizationResponse$Outbound` instead. */
  export type Outbound = OAuth2GetAuthorizationResponse$Outbound;
}

export function oAuth2GetAuthorizationResponseToJSON(
  oAuth2GetAuthorizationResponse: OAuth2GetAuthorizationResponse,
): string {
  return JSON.stringify(
    OAuth2GetAuthorizationResponse$outboundSchema.parse(
      oAuth2GetAuthorizationResponse,
    ),
  );
}

export function oAuth2GetAuthorizationResponseFromJSON(
  jsonString: string,
): SafeParseResult<OAuth2GetAuthorizationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OAuth2GetAuthorizationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OAuth2GetAuthorizationResponse' from JSON`,
  );
}
