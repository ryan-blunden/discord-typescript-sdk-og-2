/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type UpdateOriginalWebhookMessageMultipartSecurity = {
  botToken?: string | undefined;
};

export type UpdateOriginalWebhookMessageMultipartRequestBody = {
  allowedMentions?: components.MessageAllowedMentionsRequest | null | undefined;
  attachments?: Array<components.MessageAttachmentRequest> | null | undefined;
  components?: Array<components.ActionRow> | null | undefined;
  content?: string | null | undefined;
  embeds?: Array<components.RichEmbed> | null | undefined;
  files0?: string | undefined;
  files1?: string | undefined;
  files2?: string | undefined;
  files3?: string | undefined;
  files4?: string | undefined;
  files5?: string | undefined;
  files6?: string | undefined;
  files7?: string | undefined;
  files8?: string | undefined;
  files9?: string | undefined;
  flags?: number | null | undefined;
  poll?: components.PollCreateRequest | null | undefined;
};

export type UpdateOriginalWebhookMessageMultipartRequest = {
  webhookId: string;
  webhookToken: string;
  threadId?: string | undefined;
  requestBody: UpdateOriginalWebhookMessageMultipartRequestBody;
};

/** @internal */
export const UpdateOriginalWebhookMessageMultipartSecurity$inboundSchema:
  z.ZodType<
    UpdateOriginalWebhookMessageMultipartSecurity,
    z.ZodTypeDef,
    unknown
  > = z.object({
    BotToken: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "BotToken": "botToken",
    });
  });

/** @internal */
export type UpdateOriginalWebhookMessageMultipartSecurity$Outbound = {
  BotToken?: string | undefined;
};

/** @internal */
export const UpdateOriginalWebhookMessageMultipartSecurity$outboundSchema:
  z.ZodType<
    UpdateOriginalWebhookMessageMultipartSecurity$Outbound,
    z.ZodTypeDef,
    UpdateOriginalWebhookMessageMultipartSecurity
  > = z.object({
    botToken: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      botToken: "BotToken",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateOriginalWebhookMessageMultipartSecurity$ {
  /** @deprecated use `UpdateOriginalWebhookMessageMultipartSecurity$inboundSchema` instead. */
  export const inboundSchema =
    UpdateOriginalWebhookMessageMultipartSecurity$inboundSchema;
  /** @deprecated use `UpdateOriginalWebhookMessageMultipartSecurity$outboundSchema` instead. */
  export const outboundSchema =
    UpdateOriginalWebhookMessageMultipartSecurity$outboundSchema;
  /** @deprecated use `UpdateOriginalWebhookMessageMultipartSecurity$Outbound` instead. */
  export type Outbound = UpdateOriginalWebhookMessageMultipartSecurity$Outbound;
}

/** @internal */
export const UpdateOriginalWebhookMessageMultipartRequestBody$inboundSchema:
  z.ZodType<
    UpdateOriginalWebhookMessageMultipartRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    allowed_mentions: z.nullable(
      components.MessageAllowedMentionsRequest$inboundSchema,
    ).optional(),
    attachments: z.nullable(
      z.array(components.MessageAttachmentRequest$inboundSchema),
    ).optional(),
    components: z.nullable(z.array(components.ActionRow$inboundSchema))
      .optional(),
    content: z.nullable(z.string()).optional(),
    embeds: z.nullable(z.array(components.RichEmbed$inboundSchema)).optional(),
    "files[0]": z.string().optional(),
    "files[1]": z.string().optional(),
    "files[2]": z.string().optional(),
    "files[3]": z.string().optional(),
    "files[4]": z.string().optional(),
    "files[5]": z.string().optional(),
    "files[6]": z.string().optional(),
    "files[7]": z.string().optional(),
    "files[8]": z.string().optional(),
    "files[9]": z.string().optional(),
    flags: z.nullable(z.number().int()).optional(),
    poll: z.nullable(components.PollCreateRequest$inboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      "allowed_mentions": "allowedMentions",
      "files[0]": "files0",
      "files[1]": "files1",
      "files[2]": "files2",
      "files[3]": "files3",
      "files[4]": "files4",
      "files[5]": "files5",
      "files[6]": "files6",
      "files[7]": "files7",
      "files[8]": "files8",
      "files[9]": "files9",
    });
  });

/** @internal */
export type UpdateOriginalWebhookMessageMultipartRequestBody$Outbound = {
  allowed_mentions?:
    | components.MessageAllowedMentionsRequest$Outbound
    | null
    | undefined;
  attachments?:
    | Array<components.MessageAttachmentRequest$Outbound>
    | null
    | undefined;
  components?: Array<components.ActionRow$Outbound> | null | undefined;
  content?: string | null | undefined;
  embeds?: Array<components.RichEmbed$Outbound> | null | undefined;
  "files[0]"?: string | undefined;
  "files[1]"?: string | undefined;
  "files[2]"?: string | undefined;
  "files[3]"?: string | undefined;
  "files[4]"?: string | undefined;
  "files[5]"?: string | undefined;
  "files[6]"?: string | undefined;
  "files[7]"?: string | undefined;
  "files[8]"?: string | undefined;
  "files[9]"?: string | undefined;
  flags?: number | null | undefined;
  poll?: components.PollCreateRequest$Outbound | null | undefined;
};

/** @internal */
export const UpdateOriginalWebhookMessageMultipartRequestBody$outboundSchema:
  z.ZodType<
    UpdateOriginalWebhookMessageMultipartRequestBody$Outbound,
    z.ZodTypeDef,
    UpdateOriginalWebhookMessageMultipartRequestBody
  > = z.object({
    allowedMentions: z.nullable(
      components.MessageAllowedMentionsRequest$outboundSchema,
    ).optional(),
    attachments: z.nullable(
      z.array(components.MessageAttachmentRequest$outboundSchema),
    ).optional(),
    components: z.nullable(z.array(components.ActionRow$outboundSchema))
      .optional(),
    content: z.nullable(z.string()).optional(),
    embeds: z.nullable(z.array(components.RichEmbed$outboundSchema)).optional(),
    files0: z.string().optional(),
    files1: z.string().optional(),
    files2: z.string().optional(),
    files3: z.string().optional(),
    files4: z.string().optional(),
    files5: z.string().optional(),
    files6: z.string().optional(),
    files7: z.string().optional(),
    files8: z.string().optional(),
    files9: z.string().optional(),
    flags: z.nullable(z.number().int()).optional(),
    poll: z.nullable(components.PollCreateRequest$outboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      allowedMentions: "allowed_mentions",
      files0: "files[0]",
      files1: "files[1]",
      files2: "files[2]",
      files3: "files[3]",
      files4: "files[4]",
      files5: "files[5]",
      files6: "files[6]",
      files7: "files[7]",
      files8: "files[8]",
      files9: "files[9]",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateOriginalWebhookMessageMultipartRequestBody$ {
  /** @deprecated use `UpdateOriginalWebhookMessageMultipartRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    UpdateOriginalWebhookMessageMultipartRequestBody$inboundSchema;
  /** @deprecated use `UpdateOriginalWebhookMessageMultipartRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    UpdateOriginalWebhookMessageMultipartRequestBody$outboundSchema;
  /** @deprecated use `UpdateOriginalWebhookMessageMultipartRequestBody$Outbound` instead. */
  export type Outbound =
    UpdateOriginalWebhookMessageMultipartRequestBody$Outbound;
}

/** @internal */
export const UpdateOriginalWebhookMessageMultipartRequest$inboundSchema:
  z.ZodType<
    UpdateOriginalWebhookMessageMultipartRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    webhook_id: z.string(),
    webhook_token: z.string(),
    thread_id: z.string().optional(),
    RequestBody: z.lazy(() =>
      UpdateOriginalWebhookMessageMultipartRequestBody$inboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      "webhook_id": "webhookId",
      "webhook_token": "webhookToken",
      "thread_id": "threadId",
      "RequestBody": "requestBody",
    });
  });

/** @internal */
export type UpdateOriginalWebhookMessageMultipartRequest$Outbound = {
  webhook_id: string;
  webhook_token: string;
  thread_id?: string | undefined;
  RequestBody: UpdateOriginalWebhookMessageMultipartRequestBody$Outbound;
};

/** @internal */
export const UpdateOriginalWebhookMessageMultipartRequest$outboundSchema:
  z.ZodType<
    UpdateOriginalWebhookMessageMultipartRequest$Outbound,
    z.ZodTypeDef,
    UpdateOriginalWebhookMessageMultipartRequest
  > = z.object({
    webhookId: z.string(),
    webhookToken: z.string(),
    threadId: z.string().optional(),
    requestBody: z.lazy(() =>
      UpdateOriginalWebhookMessageMultipartRequestBody$outboundSchema
    ),
  }).transform((v) => {
    return remap$(v, {
      webhookId: "webhook_id",
      webhookToken: "webhook_token",
      threadId: "thread_id",
      requestBody: "RequestBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateOriginalWebhookMessageMultipartRequest$ {
  /** @deprecated use `UpdateOriginalWebhookMessageMultipartRequest$inboundSchema` instead. */
  export const inboundSchema =
    UpdateOriginalWebhookMessageMultipartRequest$inboundSchema;
  /** @deprecated use `UpdateOriginalWebhookMessageMultipartRequest$outboundSchema` instead. */
  export const outboundSchema =
    UpdateOriginalWebhookMessageMultipartRequest$outboundSchema;
  /** @deprecated use `UpdateOriginalWebhookMessageMultipartRequest$Outbound` instead. */
  export type Outbound = UpdateOriginalWebhookMessageMultipartRequest$Outbound;
}
