/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

/**
 * 200 response for create_dm
 */
export type CreateDmResponseBody =
  | components.PrivateChannelResponse
  | components.PrivateGroupChannelResponse;

/** @internal */
export const CreateDmResponseBody$inboundSchema: z.ZodType<
  CreateDmResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.PrivateChannelResponse$inboundSchema,
  components.PrivateGroupChannelResponse$inboundSchema,
]);

/** @internal */
export type CreateDmResponseBody$Outbound =
  | components.PrivateChannelResponse$Outbound
  | components.PrivateGroupChannelResponse$Outbound;

/** @internal */
export const CreateDmResponseBody$outboundSchema: z.ZodType<
  CreateDmResponseBody$Outbound,
  z.ZodTypeDef,
  CreateDmResponseBody
> = z.union([
  components.PrivateChannelResponse$outboundSchema,
  components.PrivateGroupChannelResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDmResponseBody$ {
  /** @deprecated use `CreateDmResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateDmResponseBody$inboundSchema;
  /** @deprecated use `CreateDmResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateDmResponseBody$outboundSchema;
  /** @deprecated use `CreateDmResponseBody$Outbound` instead. */
  export type Outbound = CreateDmResponseBody$Outbound;
}
