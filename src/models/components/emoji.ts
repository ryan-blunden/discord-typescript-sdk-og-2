/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Emoji = {
  id?: string | null | undefined;
  name: string;
  animated?: boolean | null | undefined;
};

/** @internal */
export const Emoji$inboundSchema: z.ZodType<Emoji, z.ZodTypeDef, unknown> = z
  .object({
    id: z.nullable(z.string()).optional(),
    name: z.string(),
    animated: z.nullable(z.boolean()).optional(),
  });

/** @internal */
export type Emoji$Outbound = {
  id?: string | null | undefined;
  name: string;
  animated?: boolean | null | undefined;
};

/** @internal */
export const Emoji$outboundSchema: z.ZodType<
  Emoji$Outbound,
  z.ZodTypeDef,
  Emoji
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.string(),
  animated: z.nullable(z.boolean()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Emoji$ {
  /** @deprecated use `Emoji$inboundSchema` instead. */
  export const inboundSchema = Emoji$inboundSchema;
  /** @deprecated use `Emoji$outboundSchema` instead. */
  export const outboundSchema = Emoji$outboundSchema;
  /** @deprecated use `Emoji$Outbound` instead. */
  export type Outbound = Emoji$Outbound;
}
