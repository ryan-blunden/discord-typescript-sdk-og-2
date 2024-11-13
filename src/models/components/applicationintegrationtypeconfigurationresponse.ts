/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ApplicationOAuth2InstallParamsResponse,
  ApplicationOAuth2InstallParamsResponse$inboundSchema,
  ApplicationOAuth2InstallParamsResponse$Outbound,
  ApplicationOAuth2InstallParamsResponse$outboundSchema,
} from "./applicationoauth2installparamsresponse.js";

export type ApplicationIntegrationTypeConfigurationResponse = {
  oauth2InstallParams?:
    | ApplicationOAuth2InstallParamsResponse
    | null
    | undefined;
};

/** @internal */
export const ApplicationIntegrationTypeConfigurationResponse$inboundSchema:
  z.ZodType<
    ApplicationIntegrationTypeConfigurationResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    oauth2_install_params: z.nullable(
      ApplicationOAuth2InstallParamsResponse$inboundSchema,
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "oauth2_install_params": "oauth2InstallParams",
    });
  });

/** @internal */
export type ApplicationIntegrationTypeConfigurationResponse$Outbound = {
  oauth2_install_params?:
    | ApplicationOAuth2InstallParamsResponse$Outbound
    | null
    | undefined;
};

/** @internal */
export const ApplicationIntegrationTypeConfigurationResponse$outboundSchema:
  z.ZodType<
    ApplicationIntegrationTypeConfigurationResponse$Outbound,
    z.ZodTypeDef,
    ApplicationIntegrationTypeConfigurationResponse
  > = z.object({
    oauth2InstallParams: z.nullable(
      ApplicationOAuth2InstallParamsResponse$outboundSchema,
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      oauth2InstallParams: "oauth2_install_params",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationIntegrationTypeConfigurationResponse$ {
  /** @deprecated use `ApplicationIntegrationTypeConfigurationResponse$inboundSchema` instead. */
  export const inboundSchema =
    ApplicationIntegrationTypeConfigurationResponse$inboundSchema;
  /** @deprecated use `ApplicationIntegrationTypeConfigurationResponse$outboundSchema` instead. */
  export const outboundSchema =
    ApplicationIntegrationTypeConfigurationResponse$outboundSchema;
  /** @deprecated use `ApplicationIntegrationTypeConfigurationResponse$Outbound` instead. */
  export type Outbound =
    ApplicationIntegrationTypeConfigurationResponse$Outbound;
}
