/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type MessageComponentInputTextResponse = {
  type?: 1 | undefined;
  id: number;
  customId: string;
  style?: 1 | undefined;
  label?: string | null | undefined;
  value?: string | null | undefined;
  placeholder?: string | null | undefined;
  required?: boolean | null | undefined;
  minLength?: number | null | undefined;
  maxLength?: number | null | undefined;
};

/** @internal */
export const MessageComponentInputTextResponse$inboundSchema: z.ZodType<
  MessageComponentInputTextResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal(1).optional(),
  id: z.number().int(),
  custom_id: z.string(),
  style: z.literal(1).optional(),
  label: z.nullable(z.string()).optional(),
  value: z.nullable(z.string()).optional(),
  placeholder: z.nullable(z.string()).optional(),
  required: z.nullable(z.boolean()).optional(),
  min_length: z.nullable(z.number().int()).optional(),
  max_length: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "custom_id": "customId",
    "min_length": "minLength",
    "max_length": "maxLength",
  });
});

/** @internal */
export type MessageComponentInputTextResponse$Outbound = {
  type: 1;
  id: number;
  custom_id: string;
  style: 1;
  label?: string | null | undefined;
  value?: string | null | undefined;
  placeholder?: string | null | undefined;
  required?: boolean | null | undefined;
  min_length?: number | null | undefined;
  max_length?: number | null | undefined;
};

/** @internal */
export const MessageComponentInputTextResponse$outboundSchema: z.ZodType<
  MessageComponentInputTextResponse$Outbound,
  z.ZodTypeDef,
  MessageComponentInputTextResponse
> = z.object({
  type: z.literal(1).default(1 as const),
  id: z.number().int(),
  customId: z.string(),
  style: z.literal(1).default(1 as const),
  label: z.nullable(z.string()).optional(),
  value: z.nullable(z.string()).optional(),
  placeholder: z.nullable(z.string()).optional(),
  required: z.nullable(z.boolean()).optional(),
  minLength: z.nullable(z.number().int()).optional(),
  maxLength: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    customId: "custom_id",
    minLength: "min_length",
    maxLength: "max_length",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageComponentInputTextResponse$ {
  /** @deprecated use `MessageComponentInputTextResponse$inboundSchema` instead. */
  export const inboundSchema = MessageComponentInputTextResponse$inboundSchema;
  /** @deprecated use `MessageComponentInputTextResponse$outboundSchema` instead. */
  export const outboundSchema =
    MessageComponentInputTextResponse$outboundSchema;
  /** @deprecated use `MessageComponentInputTextResponse$Outbound` instead. */
  export type Outbound = MessageComponentInputTextResponse$Outbound;
}
