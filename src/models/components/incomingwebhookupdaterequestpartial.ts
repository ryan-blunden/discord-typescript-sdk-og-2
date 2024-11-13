/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ActionRow,
  ActionRow$inboundSchema,
  ActionRow$Outbound,
  ActionRow$outboundSchema,
} from "./actionrow.js";
import {
  MessageAllowedMentionsRequest,
  MessageAllowedMentionsRequest$inboundSchema,
  MessageAllowedMentionsRequest$Outbound,
  MessageAllowedMentionsRequest$outboundSchema,
} from "./messageallowedmentionsrequest.js";
import {
  MessageAttachmentRequest,
  MessageAttachmentRequest$inboundSchema,
  MessageAttachmentRequest$Outbound,
  MessageAttachmentRequest$outboundSchema,
} from "./messageattachmentrequest.js";
import {
  PollCreateRequest,
  PollCreateRequest$inboundSchema,
  PollCreateRequest$Outbound,
  PollCreateRequest$outboundSchema,
} from "./pollcreaterequest.js";
import {
  RichEmbed,
  RichEmbed$inboundSchema,
  RichEmbed$Outbound,
  RichEmbed$outboundSchema,
} from "./richembed.js";

export type IncomingWebhookUpdateRequestPartial = {
  content?: string | null | undefined;
  embeds?: Array<RichEmbed> | null | undefined;
  allowedMentions?: MessageAllowedMentionsRequest | null | undefined;
  components?: Array<ActionRow> | null | undefined;
  attachments?: Array<MessageAttachmentRequest> | null | undefined;
  poll?: PollCreateRequest | null | undefined;
  flags?: number | null | undefined;
};

/** @internal */
export const IncomingWebhookUpdateRequestPartial$inboundSchema: z.ZodType<
  IncomingWebhookUpdateRequestPartial,
  z.ZodTypeDef,
  unknown
> = z.object({
  content: z.nullable(z.string()).optional(),
  embeds: z.nullable(z.array(RichEmbed$inboundSchema)).optional(),
  allowed_mentions: z.nullable(MessageAllowedMentionsRequest$inboundSchema)
    .optional(),
  components: z.nullable(z.array(ActionRow$inboundSchema)).optional(),
  attachments: z.nullable(z.array(MessageAttachmentRequest$inboundSchema))
    .optional(),
  poll: z.nullable(PollCreateRequest$inboundSchema).optional(),
  flags: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "allowed_mentions": "allowedMentions",
  });
});

/** @internal */
export type IncomingWebhookUpdateRequestPartial$Outbound = {
  content?: string | null | undefined;
  embeds?: Array<RichEmbed$Outbound> | null | undefined;
  allowed_mentions?: MessageAllowedMentionsRequest$Outbound | null | undefined;
  components?: Array<ActionRow$Outbound> | null | undefined;
  attachments?: Array<MessageAttachmentRequest$Outbound> | null | undefined;
  poll?: PollCreateRequest$Outbound | null | undefined;
  flags?: number | null | undefined;
};

/** @internal */
export const IncomingWebhookUpdateRequestPartial$outboundSchema: z.ZodType<
  IncomingWebhookUpdateRequestPartial$Outbound,
  z.ZodTypeDef,
  IncomingWebhookUpdateRequestPartial
> = z.object({
  content: z.nullable(z.string()).optional(),
  embeds: z.nullable(z.array(RichEmbed$outboundSchema)).optional(),
  allowedMentions: z.nullable(MessageAllowedMentionsRequest$outboundSchema)
    .optional(),
  components: z.nullable(z.array(ActionRow$outboundSchema)).optional(),
  attachments: z.nullable(z.array(MessageAttachmentRequest$outboundSchema))
    .optional(),
  poll: z.nullable(PollCreateRequest$outboundSchema).optional(),
  flags: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    allowedMentions: "allowed_mentions",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IncomingWebhookUpdateRequestPartial$ {
  /** @deprecated use `IncomingWebhookUpdateRequestPartial$inboundSchema` instead. */
  export const inboundSchema =
    IncomingWebhookUpdateRequestPartial$inboundSchema;
  /** @deprecated use `IncomingWebhookUpdateRequestPartial$outboundSchema` instead. */
  export const outboundSchema =
    IncomingWebhookUpdateRequestPartial$outboundSchema;
  /** @deprecated use `IncomingWebhookUpdateRequestPartial$Outbound` instead. */
  export type Outbound = IncomingWebhookUpdateRequestPartial$Outbound;
}
