/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  RoleSelectDefaultValue,
  RoleSelectDefaultValue$inboundSchema,
  RoleSelectDefaultValue$Outbound,
  RoleSelectDefaultValue$outboundSchema,
} from "./roleselectdefaultvalue.js";

export type RoleSelect = {
  type?: 1 | undefined;
  customId: string;
  placeholder?: string | null | undefined;
  minValues?: number | null | undefined;
  maxValues?: number | null | undefined;
  disabled?: boolean | null | undefined;
  defaultValues?: Array<RoleSelectDefaultValue> | null | undefined;
};

/** @internal */
export const RoleSelect$inboundSchema: z.ZodType<
  RoleSelect,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal(1).optional(),
  custom_id: z.string(),
  placeholder: z.nullable(z.string()).optional(),
  min_values: z.nullable(z.number().int()).optional(),
  max_values: z.nullable(z.number().int()).optional(),
  disabled: z.nullable(z.boolean()).optional(),
  default_values: z.nullable(z.array(RoleSelectDefaultValue$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "custom_id": "customId",
    "min_values": "minValues",
    "max_values": "maxValues",
    "default_values": "defaultValues",
  });
});

/** @internal */
export type RoleSelect$Outbound = {
  type: 1;
  custom_id: string;
  placeholder?: string | null | undefined;
  min_values?: number | null | undefined;
  max_values?: number | null | undefined;
  disabled?: boolean | null | undefined;
  default_values?: Array<RoleSelectDefaultValue$Outbound> | null | undefined;
};

/** @internal */
export const RoleSelect$outboundSchema: z.ZodType<
  RoleSelect$Outbound,
  z.ZodTypeDef,
  RoleSelect
> = z.object({
  type: z.literal(1).default(1 as const),
  customId: z.string(),
  placeholder: z.nullable(z.string()).optional(),
  minValues: z.nullable(z.number().int()).optional(),
  maxValues: z.nullable(z.number().int()).optional(),
  disabled: z.nullable(z.boolean()).optional(),
  defaultValues: z.nullable(z.array(RoleSelectDefaultValue$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    customId: "custom_id",
    minValues: "min_values",
    maxValues: "max_values",
    defaultValues: "default_values",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RoleSelect$ {
  /** @deprecated use `RoleSelect$inboundSchema` instead. */
  export const inboundSchema = RoleSelect$inboundSchema;
  /** @deprecated use `RoleSelect$outboundSchema` instead. */
  export const outboundSchema = RoleSelect$outboundSchema;
  /** @deprecated use `RoleSelect$Outbound` instead. */
  export type Outbound = RoleSelect$Outbound;
}
