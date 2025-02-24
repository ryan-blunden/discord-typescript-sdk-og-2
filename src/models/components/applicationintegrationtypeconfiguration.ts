/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ApplicationOAuth2InstallParams,
  ApplicationOAuth2InstallParams$inboundSchema,
  ApplicationOAuth2InstallParams$Outbound,
  ApplicationOAuth2InstallParams$outboundSchema,
} from "./applicationoauth2installparams.js";

export type ApplicationIntegrationTypeConfiguration = {
  oauth2InstallParams?: ApplicationOAuth2InstallParams | null | undefined;
};

/** @internal */
export const ApplicationIntegrationTypeConfiguration$inboundSchema: z.ZodType<
  ApplicationIntegrationTypeConfiguration,
  z.ZodTypeDef,
  unknown
> = z.object({
  oauth2_install_params: z.nullable(
    ApplicationOAuth2InstallParams$inboundSchema,
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "oauth2_install_params": "oauth2InstallParams",
  });
});

/** @internal */
export type ApplicationIntegrationTypeConfiguration$Outbound = {
  oauth2_install_params?:
    | ApplicationOAuth2InstallParams$Outbound
    | null
    | undefined;
};

/** @internal */
export const ApplicationIntegrationTypeConfiguration$outboundSchema: z.ZodType<
  ApplicationIntegrationTypeConfiguration$Outbound,
  z.ZodTypeDef,
  ApplicationIntegrationTypeConfiguration
> = z.object({
  oauth2InstallParams: z.nullable(ApplicationOAuth2InstallParams$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    oauth2InstallParams: "oauth2_install_params",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationIntegrationTypeConfiguration$ {
  /** @deprecated use `ApplicationIntegrationTypeConfiguration$inboundSchema` instead. */
  export const inboundSchema =
    ApplicationIntegrationTypeConfiguration$inboundSchema;
  /** @deprecated use `ApplicationIntegrationTypeConfiguration$outboundSchema` instead. */
  export const outboundSchema =
    ApplicationIntegrationTypeConfiguration$outboundSchema;
  /** @deprecated use `ApplicationIntegrationTypeConfiguration$Outbound` instead. */
  export type Outbound = ApplicationIntegrationTypeConfiguration$Outbound;
}

export function applicationIntegrationTypeConfigurationToJSON(
  applicationIntegrationTypeConfiguration:
    ApplicationIntegrationTypeConfiguration,
): string {
  return JSON.stringify(
    ApplicationIntegrationTypeConfiguration$outboundSchema.parse(
      applicationIntegrationTypeConfiguration,
    ),
  );
}

export function applicationIntegrationTypeConfigurationFromJSON(
  jsonString: string,
): SafeParseResult<
  ApplicationIntegrationTypeConfiguration,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ApplicationIntegrationTypeConfiguration$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ApplicationIntegrationTypeConfiguration' from JSON`,
  );
}
