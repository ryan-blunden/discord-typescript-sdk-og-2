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
  RichEmbed,
  RichEmbed$inboundSchema,
  RichEmbed$Outbound,
  RichEmbed$outboundSchema,
} from "./richembed.js";

export type MessageEditRequestPartial = {
  content?: string | null | undefined;
  embeds?: Array<RichEmbed> | null | undefined;
  flags?: number | null | undefined;
  allowedMentions?: MessageAllowedMentionsRequest | null | undefined;
  stickerIds?: Array<string> | null | undefined;
  components?: Array<ActionRow> | null | undefined;
  attachments?: Array<MessageAttachmentRequest> | null | undefined;
};

/** @internal */
export const MessageEditRequestPartial$inboundSchema: z.ZodType<
  MessageEditRequestPartial,
  z.ZodTypeDef,
  unknown
> = z.object({
  content: z.nullable(z.string()).optional(),
  embeds: z.nullable(z.array(RichEmbed$inboundSchema)).optional(),
  flags: z.nullable(z.number().int()).optional(),
  allowed_mentions: z.nullable(MessageAllowedMentionsRequest$inboundSchema)
    .optional(),
  sticker_ids: z.nullable(z.array(z.string())).optional(),
  components: z.nullable(z.array(ActionRow$inboundSchema)).optional(),
  attachments: z.nullable(z.array(MessageAttachmentRequest$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "allowed_mentions": "allowedMentions",
    "sticker_ids": "stickerIds",
  });
});

/** @internal */
export type MessageEditRequestPartial$Outbound = {
  content?: string | null | undefined;
  embeds?: Array<RichEmbed$Outbound> | null | undefined;
  flags?: number | null | undefined;
  allowed_mentions?: MessageAllowedMentionsRequest$Outbound | null | undefined;
  sticker_ids?: Array<string> | null | undefined;
  components?: Array<ActionRow$Outbound> | null | undefined;
  attachments?: Array<MessageAttachmentRequest$Outbound> | null | undefined;
};

/** @internal */
export const MessageEditRequestPartial$outboundSchema: z.ZodType<
  MessageEditRequestPartial$Outbound,
  z.ZodTypeDef,
  MessageEditRequestPartial
> = z.object({
  content: z.nullable(z.string()).optional(),
  embeds: z.nullable(z.array(RichEmbed$outboundSchema)).optional(),
  flags: z.nullable(z.number().int()).optional(),
  allowedMentions: z.nullable(MessageAllowedMentionsRequest$outboundSchema)
    .optional(),
  stickerIds: z.nullable(z.array(z.string())).optional(),
  components: z.nullable(z.array(ActionRow$outboundSchema)).optional(),
  attachments: z.nullable(z.array(MessageAttachmentRequest$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    allowedMentions: "allowed_mentions",
    stickerIds: "sticker_ids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageEditRequestPartial$ {
  /** @deprecated use `MessageEditRequestPartial$inboundSchema` instead. */
  export const inboundSchema = MessageEditRequestPartial$inboundSchema;
  /** @deprecated use `MessageEditRequestPartial$outboundSchema` instead. */
  export const outboundSchema = MessageEditRequestPartial$outboundSchema;
  /** @deprecated use `MessageEditRequestPartial$Outbound` instead. */
  export type Outbound = MessageEditRequestPartial$Outbound;
}
