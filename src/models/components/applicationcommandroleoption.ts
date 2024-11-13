/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ApplicationCommandRoleOption = {
  type?: 1 | undefined;
  name: string;
  nameLocalizations?: { [k: string]: string } | null | undefined;
  description: string;
  descriptionLocalizations?: { [k: string]: string } | null | undefined;
  required?: boolean | null | undefined;
};

/** @internal */
export const ApplicationCommandRoleOption$inboundSchema: z.ZodType<
  ApplicationCommandRoleOption,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal(1).optional(),
  name: z.string(),
  name_localizations: z.nullable(z.record(z.string())).optional(),
  description: z.string(),
  description_localizations: z.nullable(z.record(z.string())).optional(),
  required: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    "name_localizations": "nameLocalizations",
    "description_localizations": "descriptionLocalizations",
  });
});

/** @internal */
export type ApplicationCommandRoleOption$Outbound = {
  type: 1;
  name: string;
  name_localizations?: { [k: string]: string } | null | undefined;
  description: string;
  description_localizations?: { [k: string]: string } | null | undefined;
  required?: boolean | null | undefined;
};

/** @internal */
export const ApplicationCommandRoleOption$outboundSchema: z.ZodType<
  ApplicationCommandRoleOption$Outbound,
  z.ZodTypeDef,
  ApplicationCommandRoleOption
> = z.object({
  type: z.literal(1).default(1 as const),
  name: z.string(),
  nameLocalizations: z.nullable(z.record(z.string())).optional(),
  description: z.string(),
  descriptionLocalizations: z.nullable(z.record(z.string())).optional(),
  required: z.nullable(z.boolean()).optional(),
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
export namespace ApplicationCommandRoleOption$ {
  /** @deprecated use `ApplicationCommandRoleOption$inboundSchema` instead. */
  export const inboundSchema = ApplicationCommandRoleOption$inboundSchema;
  /** @deprecated use `ApplicationCommandRoleOption$outboundSchema` instead. */
  export const outboundSchema = ApplicationCommandRoleOption$outboundSchema;
  /** @deprecated use `ApplicationCommandRoleOption$Outbound` instead. */
  export type Outbound = ApplicationCommandRoleOption$Outbound;
}
