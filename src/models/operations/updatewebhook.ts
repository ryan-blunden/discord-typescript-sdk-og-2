/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type UpdateWebhookRequestBody = {
  name?: string | undefined;
  avatar?: string | null | undefined;
  channelId?: string | null | undefined;
};

export type UpdateWebhookRequest = {
  webhookId: string;
  requestBody: UpdateWebhookRequestBody;
};

/**
 * 200 response for update_webhook
 */
export type UpdateWebhookResponseBody =
  | components.ApplicationIncomingWebhookResponse
  | components.ChannelFollowerWebhookResponse
  | components.GuildIncomingWebhookResponse;

/** @internal */
export const UpdateWebhookRequestBody$inboundSchema: z.ZodType<
  UpdateWebhookRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  avatar: z.nullable(z.string()).optional(),
  channel_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
  });
});

/** @internal */
export type UpdateWebhookRequestBody$Outbound = {
  name?: string | undefined;
  avatar?: string | null | undefined;
  channel_id?: string | null | undefined;
};

/** @internal */
export const UpdateWebhookRequestBody$outboundSchema: z.ZodType<
  UpdateWebhookRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateWebhookRequestBody
> = z.object({
  name: z.string().optional(),
  avatar: z.nullable(z.string()).optional(),
  channelId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWebhookRequestBody$ {
  /** @deprecated use `UpdateWebhookRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateWebhookRequestBody$inboundSchema;
  /** @deprecated use `UpdateWebhookRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateWebhookRequestBody$outboundSchema;
  /** @deprecated use `UpdateWebhookRequestBody$Outbound` instead. */
  export type Outbound = UpdateWebhookRequestBody$Outbound;
}

/** @internal */
export const UpdateWebhookRequest$inboundSchema: z.ZodType<
  UpdateWebhookRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  webhook_id: z.string(),
  RequestBody: z.lazy(() => UpdateWebhookRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "webhook_id": "webhookId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateWebhookRequest$Outbound = {
  webhook_id: string;
  RequestBody: UpdateWebhookRequestBody$Outbound;
};

/** @internal */
export const UpdateWebhookRequest$outboundSchema: z.ZodType<
  UpdateWebhookRequest$Outbound,
  z.ZodTypeDef,
  UpdateWebhookRequest
> = z.object({
  webhookId: z.string(),
  requestBody: z.lazy(() => UpdateWebhookRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    webhookId: "webhook_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWebhookRequest$ {
  /** @deprecated use `UpdateWebhookRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateWebhookRequest$inboundSchema;
  /** @deprecated use `UpdateWebhookRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateWebhookRequest$outboundSchema;
  /** @deprecated use `UpdateWebhookRequest$Outbound` instead. */
  export type Outbound = UpdateWebhookRequest$Outbound;
}

/** @internal */
export const UpdateWebhookResponseBody$inboundSchema: z.ZodType<
  UpdateWebhookResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.ApplicationIncomingWebhookResponse$inboundSchema,
  components.ChannelFollowerWebhookResponse$inboundSchema,
  components.GuildIncomingWebhookResponse$inboundSchema,
]);

/** @internal */
export type UpdateWebhookResponseBody$Outbound =
  | components.ApplicationIncomingWebhookResponse$Outbound
  | components.ChannelFollowerWebhookResponse$Outbound
  | components.GuildIncomingWebhookResponse$Outbound;

/** @internal */
export const UpdateWebhookResponseBody$outboundSchema: z.ZodType<
  UpdateWebhookResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateWebhookResponseBody
> = z.union([
  components.ApplicationIncomingWebhookResponse$outboundSchema,
  components.ChannelFollowerWebhookResponse$outboundSchema,
  components.GuildIncomingWebhookResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWebhookResponseBody$ {
  /** @deprecated use `UpdateWebhookResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateWebhookResponseBody$inboundSchema;
  /** @deprecated use `UpdateWebhookResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateWebhookResponseBody$outboundSchema;
  /** @deprecated use `UpdateWebhookResponseBody$Outbound` instead. */
  export type Outbound = UpdateWebhookResponseBody$Outbound;
}
