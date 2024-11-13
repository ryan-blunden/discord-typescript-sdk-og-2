/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type DefaultKeywordListTriggerMetadataResponse = {
  allowList: Array<string>;
  presets: Array<number>;
};

/** @internal */
export const DefaultKeywordListTriggerMetadataResponse$inboundSchema: z.ZodType<
  DefaultKeywordListTriggerMetadataResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  allow_list: z.array(z.string()),
  presets: z.array(z.number().int()),
}).transform((v) => {
  return remap$(v, {
    "allow_list": "allowList",
  });
});

/** @internal */
export type DefaultKeywordListTriggerMetadataResponse$Outbound = {
  allow_list: Array<string>;
  presets: Array<number>;
};

/** @internal */
export const DefaultKeywordListTriggerMetadataResponse$outboundSchema:
  z.ZodType<
    DefaultKeywordListTriggerMetadataResponse$Outbound,
    z.ZodTypeDef,
    DefaultKeywordListTriggerMetadataResponse
  > = z.object({
    allowList: z.array(z.string()),
    presets: z.array(z.number().int()),
  }).transform((v) => {
    return remap$(v, {
      allowList: "allow_list",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DefaultKeywordListTriggerMetadataResponse$ {
  /** @deprecated use `DefaultKeywordListTriggerMetadataResponse$inboundSchema` instead. */
  export const inboundSchema =
    DefaultKeywordListTriggerMetadataResponse$inboundSchema;
  /** @deprecated use `DefaultKeywordListTriggerMetadataResponse$outboundSchema` instead. */
  export const outboundSchema =
    DefaultKeywordListTriggerMetadataResponse$outboundSchema;
  /** @deprecated use `DefaultKeywordListTriggerMetadataResponse$Outbound` instead. */
  export type Outbound = DefaultKeywordListTriggerMetadataResponse$Outbound;
}
