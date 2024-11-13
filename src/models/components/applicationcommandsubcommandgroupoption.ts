/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ApplicationCommandSubcommandOption,
  ApplicationCommandSubcommandOption$inboundSchema,
  ApplicationCommandSubcommandOption$Outbound,
  ApplicationCommandSubcommandOption$outboundSchema,
} from "./applicationcommandsubcommandoption.js";

export type ApplicationCommandSubcommandGroupOption = {
  type?: 1 | undefined;
  name: string;
  nameLocalizations?: { [k: string]: string } | null | undefined;
  description: string;
  descriptionLocalizations?: { [k: string]: string } | null | undefined;
  required?: boolean | null | undefined;
  options?: Array<ApplicationCommandSubcommandOption> | null | undefined;
};

/** @internal */
export const ApplicationCommandSubcommandGroupOption$inboundSchema: z.ZodType<
  ApplicationCommandSubcommandGroupOption,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal(1).optional(),
  name: z.string(),
  name_localizations: z.nullable(z.record(z.string())).optional(),
  description: z.string(),
  description_localizations: z.nullable(z.record(z.string())).optional(),
  required: z.nullable(z.boolean()).optional(),
  options: z.nullable(z.array(ApplicationCommandSubcommandOption$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "name_localizations": "nameLocalizations",
    "description_localizations": "descriptionLocalizations",
  });
});

/** @internal */
export type ApplicationCommandSubcommandGroupOption$Outbound = {
  type: 1;
  name: string;
  name_localizations?: { [k: string]: string } | null | undefined;
  description: string;
  description_localizations?: { [k: string]: string } | null | undefined;
  required?: boolean | null | undefined;
  options?:
    | Array<ApplicationCommandSubcommandOption$Outbound>
    | null
    | undefined;
};

/** @internal */
export const ApplicationCommandSubcommandGroupOption$outboundSchema: z.ZodType<
  ApplicationCommandSubcommandGroupOption$Outbound,
  z.ZodTypeDef,
  ApplicationCommandSubcommandGroupOption
> = z.object({
  type: z.literal(1).default(1 as const),
  name: z.string(),
  nameLocalizations: z.nullable(z.record(z.string())).optional(),
  description: z.string(),
  descriptionLocalizations: z.nullable(z.record(z.string())).optional(),
  required: z.nullable(z.boolean()).optional(),
  options: z.nullable(
    z.array(ApplicationCommandSubcommandOption$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    nameLocalizations: "name_localizations",
    descriptionLocalizations: "description_localizations",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationCommandSubcommandGroupOption$ {
  /** @deprecated use `ApplicationCommandSubcommandGroupOption$inboundSchema` instead. */
  export const inboundSchema =
    ApplicationCommandSubcommandGroupOption$inboundSchema;
  /** @deprecated use `ApplicationCommandSubcommandGroupOption$outboundSchema` instead. */
  export const outboundSchema =
    ApplicationCommandSubcommandGroupOption$outboundSchema;
  /** @deprecated use `ApplicationCommandSubcommandGroupOption$Outbound` instead. */
  export type Outbound = ApplicationCommandSubcommandGroupOption$Outbound;
}
