/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type PollResultsEntryResponse = {
  id: number;
  count: number;
  meVoted?: boolean | null | undefined;
};

/** @internal */
export const PollResultsEntryResponse$inboundSchema: z.ZodType<
  PollResultsEntryResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
  count: z.number().int(),
  me_voted: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    "me_voted": "meVoted",
  });
});

/** @internal */
export type PollResultsEntryResponse$Outbound = {
  id: number;
  count: number;
  me_voted?: boolean | null | undefined;
};

/** @internal */
export const PollResultsEntryResponse$outboundSchema: z.ZodType<
  PollResultsEntryResponse$Outbound,
  z.ZodTypeDef,
  PollResultsEntryResponse
> = z.object({
  id: z.number().int(),
  count: z.number().int(),
  meVoted: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    meVoted: "me_voted",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PollResultsEntryResponse$ {
  /** @deprecated use `PollResultsEntryResponse$inboundSchema` instead. */
  export const inboundSchema = PollResultsEntryResponse$inboundSchema;
  /** @deprecated use `PollResultsEntryResponse$outboundSchema` instead. */
  export const outboundSchema = PollResultsEntryResponse$outboundSchema;
  /** @deprecated use `PollResultsEntryResponse$Outbound` instead. */
  export type Outbound = PollResultsEntryResponse$Outbound;
}
