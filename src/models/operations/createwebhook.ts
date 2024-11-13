/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type CreateWebhookRequestBody = {
  name: string;
  avatar?: string | null | undefined;
};

export type CreateWebhookRequest = {
  channelId: string;
  requestBody: CreateWebhookRequestBody;
};

/** @internal */
export const CreateWebhookRequestBody$inboundSchema: z.ZodType<
  CreateWebhookRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  avatar: z.nullable(z.string()).optional(),
});

/** @internal */
export type CreateWebhookRequestBody$Outbound = {
  name: string;
  avatar?: string | null | undefined;
};

/** @internal */
export const CreateWebhookRequestBody$outboundSchema: z.ZodType<
  CreateWebhookRequestBody$Outbound,
  z.ZodTypeDef,
  CreateWebhookRequestBody
> = z.object({
  name: z.string(),
  avatar: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWebhookRequestBody$ {
  /** @deprecated use `CreateWebhookRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateWebhookRequestBody$inboundSchema;
  /** @deprecated use `CreateWebhookRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateWebhookRequestBody$outboundSchema;
  /** @deprecated use `CreateWebhookRequestBody$Outbound` instead. */
  export type Outbound = CreateWebhookRequestBody$Outbound;
}

/** @internal */
export const CreateWebhookRequest$inboundSchema: z.ZodType<
  CreateWebhookRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
  RequestBody: z.lazy(() => CreateWebhookRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateWebhookRequest$Outbound = {
  channel_id: string;
  RequestBody: CreateWebhookRequestBody$Outbound;
};

/** @internal */
export const CreateWebhookRequest$outboundSchema: z.ZodType<
  CreateWebhookRequest$Outbound,
  z.ZodTypeDef,
  CreateWebhookRequest
> = z.object({
  channelId: z.string(),
  requestBody: z.lazy(() => CreateWebhookRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWebhookRequest$ {
  /** @deprecated use `CreateWebhookRequest$inboundSchema` instead. */
  export const inboundSchema = CreateWebhookRequest$inboundSchema;
  /** @deprecated use `CreateWebhookRequest$outboundSchema` instead. */
  export const outboundSchema = CreateWebhookRequest$outboundSchema;
  /** @deprecated use `CreateWebhookRequest$Outbound` instead. */
  export type Outbound = CreateWebhookRequest$Outbound;
}
