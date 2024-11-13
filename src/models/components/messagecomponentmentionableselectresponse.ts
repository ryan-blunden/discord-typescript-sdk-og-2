/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  RoleSelectDefaultValueResponse,
  RoleSelectDefaultValueResponse$inboundSchema,
  RoleSelectDefaultValueResponse$Outbound,
  RoleSelectDefaultValueResponse$outboundSchema,
} from "./roleselectdefaultvalueresponse.js";
import {
  UserSelectDefaultValueResponse,
  UserSelectDefaultValueResponse$inboundSchema,
  UserSelectDefaultValueResponse$Outbound,
  UserSelectDefaultValueResponse$outboundSchema,
} from "./userselectdefaultvalueresponse.js";

export type DefaultValues =
  | RoleSelectDefaultValueResponse
  | UserSelectDefaultValueResponse;

export type MessageComponentMentionableSelectResponse = {
  type?: 1 | undefined;
  id: number;
  customId: string;
  placeholder?: string | null | undefined;
  minValues?: number | null | undefined;
  maxValues?: number | null | undefined;
  disabled?: boolean | null | undefined;
  defaultValues?:
    | Array<RoleSelectDefaultValueResponse | UserSelectDefaultValueResponse>
    | null
    | undefined;
};

/** @internal */
export const DefaultValues$inboundSchema: z.ZodType<
  DefaultValues,
  z.ZodTypeDef,
  unknown
> = z.union([
  RoleSelectDefaultValueResponse$inboundSchema,
  UserSelectDefaultValueResponse$inboundSchema,
]);

/** @internal */
export type DefaultValues$Outbound =
  | RoleSelectDefaultValueResponse$Outbound
  | UserSelectDefaultValueResponse$Outbound;

/** @internal */
export const DefaultValues$outboundSchema: z.ZodType<
  DefaultValues$Outbound,
  z.ZodTypeDef,
  DefaultValues
> = z.union([
  RoleSelectDefaultValueResponse$outboundSchema,
  UserSelectDefaultValueResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultValues$ {
  /** @deprecated use `DefaultValues$inboundSchema` instead. */
  export const inboundSchema = DefaultValues$inboundSchema;
  /** @deprecated use `DefaultValues$outboundSchema` instead. */
  export const outboundSchema = DefaultValues$outboundSchema;
  /** @deprecated use `DefaultValues$Outbound` instead. */
  export type Outbound = DefaultValues$Outbound;
}

/** @internal */
export const MessageComponentMentionableSelectResponse$inboundSchema: z.ZodType<
  MessageComponentMentionableSelectResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal(1).optional(),
  id: z.number().int(),
  custom_id: z.string(),
  placeholder: z.nullable(z.string()).optional(),
  min_values: z.nullable(z.number().int()).optional(),
  max_values: z.nullable(z.number().int()).optional(),
  disabled: z.nullable(z.boolean()).optional(),
  default_values: z.nullable(
    z.array(
      z.union([
        RoleSelectDefaultValueResponse$inboundSchema,
        UserSelectDefaultValueResponse$inboundSchema,
      ]),
    ),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "custom_id": "customId",
    "min_values": "minValues",
    "max_values": "maxValues",
    "default_values": "defaultValues",
  });
});

/** @internal */
export type MessageComponentMentionableSelectResponse$Outbound = {
  type: 1;
  id: number;
  custom_id: string;
  placeholder?: string | null | undefined;
  min_values?: number | null | undefined;
  max_values?: number | null | undefined;
  disabled?: boolean | null | undefined;
  default_values?:
    | Array<
      | RoleSelectDefaultValueResponse$Outbound
      | UserSelectDefaultValueResponse$Outbound
    >
    | null
    | undefined;
};

/** @internal */
export const MessageComponentMentionableSelectResponse$outboundSchema:
  z.ZodType<
    MessageComponentMentionableSelectResponse$Outbound,
    z.ZodTypeDef,
    MessageComponentMentionableSelectResponse
  > = z.object({
    type: z.literal(1).default(1 as const),
    id: z.number().int(),
    customId: z.string(),
    placeholder: z.nullable(z.string()).optional(),
    minValues: z.nullable(z.number().int()).optional(),
    maxValues: z.nullable(z.number().int()).optional(),
    disabled: z.nullable(z.boolean()).optional(),
    defaultValues: z.nullable(
      z.array(
        z.union([
          RoleSelectDefaultValueResponse$outboundSchema,
          UserSelectDefaultValueResponse$outboundSchema,
        ]),
      ),
    ).optional(),
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
export namespace MessageComponentMentionableSelectResponse$ {
  /** @deprecated use `MessageComponentMentionableSelectResponse$inboundSchema` instead. */
  export const inboundSchema =
    MessageComponentMentionableSelectResponse$inboundSchema;
  /** @deprecated use `MessageComponentMentionableSelectResponse$outboundSchema` instead. */
  export const outboundSchema =
    MessageComponentMentionableSelectResponse$outboundSchema;
  /** @deprecated use `MessageComponentMentionableSelectResponse$Outbound` instead. */
  export type Outbound = MessageComponentMentionableSelectResponse$Outbound;
}
