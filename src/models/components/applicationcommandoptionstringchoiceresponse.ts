/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ApplicationCommandOptionStringChoiceResponse = {
  name: string;
  nameLocalized?: string | null | undefined;
  nameLocalizations?: { [k: string]: string } | null | undefined;
  value: string;
};

/** @internal */
export const ApplicationCommandOptionStringChoiceResponse$inboundSchema:
  z.ZodType<
    ApplicationCommandOptionStringChoiceResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    name: z.string(),
    name_localized: z.nullable(z.string()).optional(),
    name_localizations: z.nullable(z.record(z.string())).optional(),
    value: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "name_localized": "nameLocalized",
      "name_localizations": "nameLocalizations",
    });
  });

/** @internal */
export type ApplicationCommandOptionStringChoiceResponse$Outbound = {
  name: string;
  name_localized?: string | null | undefined;
  name_localizations?: { [k: string]: string } | null | undefined;
  value: string;
};

/** @internal */
export const ApplicationCommandOptionStringChoiceResponse$outboundSchema:
  z.ZodType<
    ApplicationCommandOptionStringChoiceResponse$Outbound,
    z.ZodTypeDef,
    ApplicationCommandOptionStringChoiceResponse
  > = z.object({
    name: z.string(),
    nameLocalized: z.nullable(z.string()).optional(),
    nameLocalizations: z.nullable(z.record(z.string())).optional(),
    value: z.string(),
  }).transform((v) => {
    return remap$(v, {
      nameLocalized: "name_localized",
      nameLocalizations: "name_localizations",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationCommandOptionStringChoiceResponse$ {
  /** @deprecated use `ApplicationCommandOptionStringChoiceResponse$inboundSchema` instead. */
  export const inboundSchema =
    ApplicationCommandOptionStringChoiceResponse$inboundSchema;
  /** @deprecated use `ApplicationCommandOptionStringChoiceResponse$outboundSchema` instead. */
  export const outboundSchema =
    ApplicationCommandOptionStringChoiceResponse$outboundSchema;
  /** @deprecated use `ApplicationCommandOptionStringChoiceResponse$Outbound` instead. */
  export type Outbound = ApplicationCommandOptionStringChoiceResponse$Outbound;
}

export function applicationCommandOptionStringChoiceResponseToJSON(
  applicationCommandOptionStringChoiceResponse:
    ApplicationCommandOptionStringChoiceResponse,
): string {
  return JSON.stringify(
    ApplicationCommandOptionStringChoiceResponse$outboundSchema.parse(
      applicationCommandOptionStringChoiceResponse,
    ),
  );
}

export function applicationCommandOptionStringChoiceResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  ApplicationCommandOptionStringChoiceResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ApplicationCommandOptionStringChoiceResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ApplicationCommandOptionStringChoiceResponse' from JSON`,
  );
}
