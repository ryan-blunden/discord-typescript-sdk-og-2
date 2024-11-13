/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ApplicationCommandSubcommandOptionResponse,
  ApplicationCommandSubcommandOptionResponse$inboundSchema,
  ApplicationCommandSubcommandOptionResponse$Outbound,
  ApplicationCommandSubcommandOptionResponse$outboundSchema,
} from "./applicationcommandsubcommandoptionresponse.js";

export type ApplicationCommandSubcommandGroupOptionResponse = {
  type?: 1 | undefined;
  name: string;
  nameLocalized?: string | null | undefined;
  nameLocalizations?: { [k: string]: string } | null | undefined;
  description: string;
  descriptionLocalized?: string | null | undefined;
  descriptionLocalizations?: { [k: string]: string } | null | undefined;
  required?: boolean | null | undefined;
  options?:
    | Array<ApplicationCommandSubcommandOptionResponse>
    | null
    | undefined;
};

/** @internal */
export const ApplicationCommandSubcommandGroupOptionResponse$inboundSchema:
  z.ZodType<
    ApplicationCommandSubcommandGroupOptionResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    type: z.literal(1).optional(),
    name: z.string(),
    name_localized: z.nullable(z.string()).optional(),
    name_localizations: z.nullable(z.record(z.string())).optional(),
    description: z.string(),
    description_localized: z.nullable(z.string()).optional(),
    description_localizations: z.nullable(z.record(z.string())).optional(),
    required: z.nullable(z.boolean()).optional(),
    options: z.nullable(
      z.array(ApplicationCommandSubcommandOptionResponse$inboundSchema),
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "name_localized": "nameLocalized",
      "name_localizations": "nameLocalizations",
      "description_localized": "descriptionLocalized",
      "description_localizations": "descriptionLocalizations",
    });
  });

/** @internal */
export type ApplicationCommandSubcommandGroupOptionResponse$Outbound = {
  type: 1;
  name: string;
  name_localized?: string | null | undefined;
  name_localizations?: { [k: string]: string } | null | undefined;
  description: string;
  description_localized?: string | null | undefined;
  description_localizations?: { [k: string]: string } | null | undefined;
  required?: boolean | null | undefined;
  options?:
    | Array<ApplicationCommandSubcommandOptionResponse$Outbound>
    | null
    | undefined;
};

/** @internal */
export const ApplicationCommandSubcommandGroupOptionResponse$outboundSchema:
  z.ZodType<
    ApplicationCommandSubcommandGroupOptionResponse$Outbound,
    z.ZodTypeDef,
    ApplicationCommandSubcommandGroupOptionResponse
  > = z.object({
    type: z.literal(1).default(1 as const),
    name: z.string(),
    nameLocalized: z.nullable(z.string()).optional(),
    nameLocalizations: z.nullable(z.record(z.string())).optional(),
    description: z.string(),
    descriptionLocalized: z.nullable(z.string()).optional(),
    descriptionLocalizations: z.nullable(z.record(z.string())).optional(),
    required: z.nullable(z.boolean()).optional(),
    options: z.nullable(
      z.array(ApplicationCommandSubcommandOptionResponse$outboundSchema),
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      nameLocalized: "name_localized",
      nameLocalizations: "name_localizations",
      descriptionLocalized: "description_localized",
      descriptionLocalizations: "description_localizations",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationCommandSubcommandGroupOptionResponse$ {
  /** @deprecated use `ApplicationCommandSubcommandGroupOptionResponse$inboundSchema` instead. */
  export const inboundSchema =
    ApplicationCommandSubcommandGroupOptionResponse$inboundSchema;
  /** @deprecated use `ApplicationCommandSubcommandGroupOptionResponse$outboundSchema` instead. */
  export const outboundSchema =
    ApplicationCommandSubcommandGroupOptionResponse$outboundSchema;
  /** @deprecated use `ApplicationCommandSubcommandGroupOptionResponse$Outbound` instead. */
  export type Outbound =
    ApplicationCommandSubcommandGroupOptionResponse$Outbound;
}
