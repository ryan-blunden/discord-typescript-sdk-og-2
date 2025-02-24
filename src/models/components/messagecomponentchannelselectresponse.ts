/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ChannelSelectDefaultValueResponse,
  ChannelSelectDefaultValueResponse$inboundSchema,
  ChannelSelectDefaultValueResponse$Outbound,
  ChannelSelectDefaultValueResponse$outboundSchema,
} from "./channelselectdefaultvalueresponse.js";

export type MessageComponentChannelSelectResponse = {
  type?: 1 | undefined;
  id: number;
  customId: string;
  placeholder?: string | null | undefined;
  minValues?: number | null | undefined;
  maxValues?: number | null | undefined;
  disabled?: boolean | null | undefined;
  channelTypes?: Array<number> | null | undefined;
  defaultValues?: Array<ChannelSelectDefaultValueResponse> | null | undefined;
};

/** @internal */
export const MessageComponentChannelSelectResponse$inboundSchema: z.ZodType<
  MessageComponentChannelSelectResponse,
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
  channel_types: z.nullable(z.array(z.number().int())).optional(),
  default_values: z.nullable(
    z.array(ChannelSelectDefaultValueResponse$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "custom_id": "customId",
    "min_values": "minValues",
    "max_values": "maxValues",
    "channel_types": "channelTypes",
    "default_values": "defaultValues",
  });
});

/** @internal */
export type MessageComponentChannelSelectResponse$Outbound = {
  type: 1;
  id: number;
  custom_id: string;
  placeholder?: string | null | undefined;
  min_values?: number | null | undefined;
  max_values?: number | null | undefined;
  disabled?: boolean | null | undefined;
  channel_types?: Array<number> | null | undefined;
  default_values?:
    | Array<ChannelSelectDefaultValueResponse$Outbound>
    | null
    | undefined;
};

/** @internal */
export const MessageComponentChannelSelectResponse$outboundSchema: z.ZodType<
  MessageComponentChannelSelectResponse$Outbound,
  z.ZodTypeDef,
  MessageComponentChannelSelectResponse
> = z.object({
  type: z.literal(1).default(1 as const),
  id: z.number().int(),
  customId: z.string(),
  placeholder: z.nullable(z.string()).optional(),
  minValues: z.nullable(z.number().int()).optional(),
  maxValues: z.nullable(z.number().int()).optional(),
  disabled: z.nullable(z.boolean()).optional(),
  channelTypes: z.nullable(z.array(z.number().int())).optional(),
  defaultValues: z.nullable(
    z.array(ChannelSelectDefaultValueResponse$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    customId: "custom_id",
    minValues: "min_values",
    maxValues: "max_values",
    channelTypes: "channel_types",
    defaultValues: "default_values",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageComponentChannelSelectResponse$ {
  /** @deprecated use `MessageComponentChannelSelectResponse$inboundSchema` instead. */
  export const inboundSchema =
    MessageComponentChannelSelectResponse$inboundSchema;
  /** @deprecated use `MessageComponentChannelSelectResponse$outboundSchema` instead. */
  export const outboundSchema =
    MessageComponentChannelSelectResponse$outboundSchema;
  /** @deprecated use `MessageComponentChannelSelectResponse$Outbound` instead. */
  export type Outbound = MessageComponentChannelSelectResponse$Outbound;
}
