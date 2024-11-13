/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  UserResponse,
  UserResponse$inboundSchema,
  UserResponse$Outbound,
  UserResponse$outboundSchema,
} from "./userresponse.js";

export type EmojiResponse = {
  id: string;
  name: string;
  user?: UserResponse | null | undefined;
  roles: Array<string>;
  requireColons: boolean;
  managed: boolean;
  animated: boolean;
  available: boolean;
};

/** @internal */
export const EmojiResponse$inboundSchema: z.ZodType<
  EmojiResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  user: z.nullable(UserResponse$inboundSchema).optional(),
  roles: z.array(z.string()),
  require_colons: z.boolean(),
  managed: z.boolean(),
  animated: z.boolean(),
  available: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "require_colons": "requireColons",
  });
});

/** @internal */
export type EmojiResponse$Outbound = {
  id: string;
  name: string;
  user?: UserResponse$Outbound | null | undefined;
  roles: Array<string>;
  require_colons: boolean;
  managed: boolean;
  animated: boolean;
  available: boolean;
};

/** @internal */
export const EmojiResponse$outboundSchema: z.ZodType<
  EmojiResponse$Outbound,
  z.ZodTypeDef,
  EmojiResponse
> = z.object({
  id: z.string(),
  name: z.string(),
  user: z.nullable(UserResponse$outboundSchema).optional(),
  roles: z.array(z.string()),
  requireColons: z.boolean(),
  managed: z.boolean(),
  animated: z.boolean(),
  available: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    requireColons: "require_colons",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmojiResponse$ {
  /** @deprecated use `EmojiResponse$inboundSchema` instead. */
  export const inboundSchema = EmojiResponse$inboundSchema;
  /** @deprecated use `EmojiResponse$outboundSchema` instead. */
  export const outboundSchema = EmojiResponse$outboundSchema;
  /** @deprecated use `EmojiResponse$Outbound` instead. */
  export type Outbound = EmojiResponse$Outbound;
}
