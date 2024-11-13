/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ApplicationCommandInteractionMetadataResponse,
  ApplicationCommandInteractionMetadataResponse$inboundSchema,
  ApplicationCommandInteractionMetadataResponse$Outbound,
  ApplicationCommandInteractionMetadataResponse$outboundSchema,
} from "./applicationcommandinteractionmetadataresponse.js";
import {
  BasicApplicationResponse,
  BasicApplicationResponse$inboundSchema,
  BasicApplicationResponse$Outbound,
  BasicApplicationResponse$outboundSchema,
} from "./basicapplicationresponse.js";
import {
  BasicMessageResponse,
  BasicMessageResponse$inboundSchema,
  BasicMessageResponse$Outbound,
  BasicMessageResponse$outboundSchema,
} from "./basicmessageresponse.js";
import {
  GuildStickerResponse,
  GuildStickerResponse$inboundSchema,
  GuildStickerResponse$Outbound,
  GuildStickerResponse$outboundSchema,
} from "./guildstickerresponse.js";
import {
  MessageActivityResponse,
  MessageActivityResponse$inboundSchema,
  MessageActivityResponse$Outbound,
  MessageActivityResponse$outboundSchema,
} from "./messageactivityresponse.js";
import {
  MessageAttachmentResponse,
  MessageAttachmentResponse$inboundSchema,
  MessageAttachmentResponse$Outbound,
  MessageAttachmentResponse$outboundSchema,
} from "./messageattachmentresponse.js";
import {
  MessageCallResponse,
  MessageCallResponse$inboundSchema,
  MessageCallResponse$Outbound,
  MessageCallResponse$outboundSchema,
} from "./messagecallresponse.js";
import {
  MessageComponentActionRowResponse,
  MessageComponentActionRowResponse$inboundSchema,
  MessageComponentActionRowResponse$Outbound,
  MessageComponentActionRowResponse$outboundSchema,
} from "./messagecomponentactionrowresponse.js";
import {
  MessageComponentButtonResponse,
  MessageComponentButtonResponse$inboundSchema,
  MessageComponentButtonResponse$Outbound,
  MessageComponentButtonResponse$outboundSchema,
} from "./messagecomponentbuttonresponse.js";
import {
  MessageComponentChannelSelectResponse,
  MessageComponentChannelSelectResponse$inboundSchema,
  MessageComponentChannelSelectResponse$Outbound,
  MessageComponentChannelSelectResponse$outboundSchema,
} from "./messagecomponentchannelselectresponse.js";
import {
  MessageComponentInputTextResponse,
  MessageComponentInputTextResponse$inboundSchema,
  MessageComponentInputTextResponse$Outbound,
  MessageComponentInputTextResponse$outboundSchema,
} from "./messagecomponentinputtextresponse.js";
import {
  MessageComponentInteractionMetadataResponse,
  MessageComponentInteractionMetadataResponse$inboundSchema,
  MessageComponentInteractionMetadataResponse$Outbound,
  MessageComponentInteractionMetadataResponse$outboundSchema,
} from "./messagecomponentinteractionmetadataresponse.js";
import {
  MessageComponentMentionableSelectResponse,
  MessageComponentMentionableSelectResponse$inboundSchema,
  MessageComponentMentionableSelectResponse$Outbound,
  MessageComponentMentionableSelectResponse$outboundSchema,
} from "./messagecomponentmentionableselectresponse.js";
import {
  MessageComponentRoleSelectResponse,
  MessageComponentRoleSelectResponse$inboundSchema,
  MessageComponentRoleSelectResponse$Outbound,
  MessageComponentRoleSelectResponse$outboundSchema,
} from "./messagecomponentroleselectresponse.js";
import {
  MessageComponentStringSelectResponse,
  MessageComponentStringSelectResponse$inboundSchema,
  MessageComponentStringSelectResponse$Outbound,
  MessageComponentStringSelectResponse$outboundSchema,
} from "./messagecomponentstringselectresponse.js";
import {
  MessageComponentUserSelectResponse,
  MessageComponentUserSelectResponse$inboundSchema,
  MessageComponentUserSelectResponse$Outbound,
  MessageComponentUserSelectResponse$outboundSchema,
} from "./messagecomponentuserselectresponse.js";
import {
  MessageEmbedResponse,
  MessageEmbedResponse$inboundSchema,
  MessageEmbedResponse$Outbound,
  MessageEmbedResponse$outboundSchema,
} from "./messageembedresponse.js";
import {
  MessageInteractionResponse,
  MessageInteractionResponse$inboundSchema,
  MessageInteractionResponse$Outbound,
  MessageInteractionResponse$outboundSchema,
} from "./messageinteractionresponse.js";
import {
  MessageMentionChannelResponse,
  MessageMentionChannelResponse$inboundSchema,
  MessageMentionChannelResponse$Outbound,
  MessageMentionChannelResponse$outboundSchema,
} from "./messagementionchannelresponse.js";
import {
  MessageReactionResponse,
  MessageReactionResponse$inboundSchema,
  MessageReactionResponse$Outbound,
  MessageReactionResponse$outboundSchema,
} from "./messagereactionresponse.js";
import {
  MessageReferenceResponse,
  MessageReferenceResponse$inboundSchema,
  MessageReferenceResponse$Outbound,
  MessageReferenceResponse$outboundSchema,
} from "./messagereferenceresponse.js";
import {
  MessageRoleSubscriptionDataResponse,
  MessageRoleSubscriptionDataResponse$inboundSchema,
  MessageRoleSubscriptionDataResponse$Outbound,
  MessageRoleSubscriptionDataResponse$outboundSchema,
} from "./messagerolesubscriptiondataresponse.js";
import {
  MessageSnapshotResponse,
  MessageSnapshotResponse$inboundSchema,
  MessageSnapshotResponse$Outbound,
  MessageSnapshotResponse$outboundSchema,
} from "./messagesnapshotresponse.js";
import {
  MessageStickerItemResponse,
  MessageStickerItemResponse$inboundSchema,
  MessageStickerItemResponse$Outbound,
  MessageStickerItemResponse$outboundSchema,
} from "./messagestickeritemresponse.js";
import {
  ModalSubmitInteractionMetadataResponse,
  ModalSubmitInteractionMetadataResponse$inboundSchema,
  ModalSubmitInteractionMetadataResponse$Outbound,
  ModalSubmitInteractionMetadataResponse$outboundSchema,
} from "./modalsubmitinteractionmetadataresponse.js";
import {
  PollResponse,
  PollResponse$inboundSchema,
  PollResponse$Outbound,
  PollResponse$outboundSchema,
} from "./pollresponse.js";
import {
  PurchaseNotificationResponse,
  PurchaseNotificationResponse$inboundSchema,
  PurchaseNotificationResponse$Outbound,
  PurchaseNotificationResponse$outboundSchema,
} from "./purchasenotificationresponse.js";
import {
  ResolvedObjectsResponse,
  ResolvedObjectsResponse$inboundSchema,
  ResolvedObjectsResponse$Outbound,
  ResolvedObjectsResponse$outboundSchema,
} from "./resolvedobjectsresponse.js";
import {
  StandardStickerResponse,
  StandardStickerResponse$inboundSchema,
  StandardStickerResponse$Outbound,
  StandardStickerResponse$outboundSchema,
} from "./standardstickerresponse.js";
import {
  ThreadResponse,
  ThreadResponse$inboundSchema,
  ThreadResponse$Outbound,
  ThreadResponse$outboundSchema,
} from "./threadresponse.js";
import {
  UserResponse,
  UserResponse$inboundSchema,
  UserResponse$Outbound,
  UserResponse$outboundSchema,
} from "./userresponse.js";

export type MessageResponseComponents =
  | MessageComponentActionRowResponse
  | MessageComponentMentionableSelectResponse
  | MessageComponentRoleSelectResponse
  | MessageComponentStringSelectResponse
  | MessageComponentUserSelectResponse
  | MessageComponentButtonResponse
  | MessageComponentChannelSelectResponse
  | MessageComponentInputTextResponse;

export type Stickers = StandardStickerResponse | GuildStickerResponse;

export type Nonce = number | string;

export type InteractionMetadata =
  | MessageComponentInteractionMetadataResponse
  | ModalSubmitInteractionMetadataResponse
  | ApplicationCommandInteractionMetadataResponse;

export type MessageResponse = {
  type?: 0 | undefined;
  content: string;
  mentions: Array<UserResponse>;
  mentionRoles: Array<string>;
  attachments: Array<MessageAttachmentResponse>;
  embeds: Array<MessageEmbedResponse>;
  timestamp: Date;
  editedTimestamp?: Date | null | undefined;
  flags: number;
  components: Array<
    | MessageComponentActionRowResponse
    | MessageComponentMentionableSelectResponse
    | MessageComponentRoleSelectResponse
    | MessageComponentStringSelectResponse
    | MessageComponentUserSelectResponse
    | MessageComponentButtonResponse
    | MessageComponentChannelSelectResponse
    | MessageComponentInputTextResponse
  >;
  resolved?: ResolvedObjectsResponse | null | undefined;
  stickers?:
    | Array<StandardStickerResponse | GuildStickerResponse>
    | null
    | undefined;
  stickerItems?: Array<MessageStickerItemResponse> | null | undefined;
  id: string;
  channelId: string;
  author: UserResponse;
  pinned: boolean;
  mentionEveryone: boolean;
  tts: boolean;
  call?: MessageCallResponse | null | undefined;
  activity?: MessageActivityResponse | null | undefined;
  application?: BasicApplicationResponse | null | undefined;
  applicationId?: string | null | undefined;
  interaction?: MessageInteractionResponse | null | undefined;
  nonce?: number | string | null | undefined;
  webhookId?: string | null | undefined;
  messageReference?: MessageReferenceResponse | null | undefined;
  thread?: ThreadResponse | null | undefined;
  mentionChannels?: Array<MessageMentionChannelResponse> | null | undefined;
  roleSubscriptionData?: MessageRoleSubscriptionDataResponse | null | undefined;
  purchaseNotification?: PurchaseNotificationResponse | null | undefined;
  position?: number | null | undefined;
  poll?: PollResponse | null | undefined;
  interactionMetadata?:
    | MessageComponentInteractionMetadataResponse
    | ModalSubmitInteractionMetadataResponse
    | ApplicationCommandInteractionMetadataResponse
    | null
    | undefined;
  messageSnapshots?: Array<MessageSnapshotResponse> | null | undefined;
  reactions?: Array<MessageReactionResponse> | null | undefined;
  referencedMessage?: BasicMessageResponse | null | undefined;
};

/** @internal */
export const MessageResponseComponents$inboundSchema: z.ZodType<
  MessageResponseComponents,
  z.ZodTypeDef,
  unknown
> = z.union([
  MessageComponentActionRowResponse$inboundSchema,
  MessageComponentMentionableSelectResponse$inboundSchema,
  MessageComponentRoleSelectResponse$inboundSchema,
  MessageComponentStringSelectResponse$inboundSchema,
  MessageComponentUserSelectResponse$inboundSchema,
  MessageComponentButtonResponse$inboundSchema,
  MessageComponentChannelSelectResponse$inboundSchema,
  MessageComponentInputTextResponse$inboundSchema,
]);

/** @internal */
export type MessageResponseComponents$Outbound =
  | MessageComponentActionRowResponse$Outbound
  | MessageComponentMentionableSelectResponse$Outbound
  | MessageComponentRoleSelectResponse$Outbound
  | MessageComponentStringSelectResponse$Outbound
  | MessageComponentUserSelectResponse$Outbound
  | MessageComponentButtonResponse$Outbound
  | MessageComponentChannelSelectResponse$Outbound
  | MessageComponentInputTextResponse$Outbound;

/** @internal */
export const MessageResponseComponents$outboundSchema: z.ZodType<
  MessageResponseComponents$Outbound,
  z.ZodTypeDef,
  MessageResponseComponents
> = z.union([
  MessageComponentActionRowResponse$outboundSchema,
  MessageComponentMentionableSelectResponse$outboundSchema,
  MessageComponentRoleSelectResponse$outboundSchema,
  MessageComponentStringSelectResponse$outboundSchema,
  MessageComponentUserSelectResponse$outboundSchema,
  MessageComponentButtonResponse$outboundSchema,
  MessageComponentChannelSelectResponse$outboundSchema,
  MessageComponentInputTextResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageResponseComponents$ {
  /** @deprecated use `MessageResponseComponents$inboundSchema` instead. */
  export const inboundSchema = MessageResponseComponents$inboundSchema;
  /** @deprecated use `MessageResponseComponents$outboundSchema` instead. */
  export const outboundSchema = MessageResponseComponents$outboundSchema;
  /** @deprecated use `MessageResponseComponents$Outbound` instead. */
  export type Outbound = MessageResponseComponents$Outbound;
}

/** @internal */
export const Stickers$inboundSchema: z.ZodType<
  Stickers,
  z.ZodTypeDef,
  unknown
> = z.union([
  StandardStickerResponse$inboundSchema,
  GuildStickerResponse$inboundSchema,
]);

/** @internal */
export type Stickers$Outbound =
  | StandardStickerResponse$Outbound
  | GuildStickerResponse$Outbound;

/** @internal */
export const Stickers$outboundSchema: z.ZodType<
  Stickers$Outbound,
  z.ZodTypeDef,
  Stickers
> = z.union([
  StandardStickerResponse$outboundSchema,
  GuildStickerResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Stickers$ {
  /** @deprecated use `Stickers$inboundSchema` instead. */
  export const inboundSchema = Stickers$inboundSchema;
  /** @deprecated use `Stickers$outboundSchema` instead. */
  export const outboundSchema = Stickers$outboundSchema;
  /** @deprecated use `Stickers$Outbound` instead. */
  export type Outbound = Stickers$Outbound;
}

/** @internal */
export const Nonce$inboundSchema: z.ZodType<Nonce, z.ZodTypeDef, unknown> = z
  .union([z.number().int(), z.string()]);

/** @internal */
export type Nonce$Outbound = number | string;

/** @internal */
export const Nonce$outboundSchema: z.ZodType<
  Nonce$Outbound,
  z.ZodTypeDef,
  Nonce
> = z.union([z.number().int(), z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Nonce$ {
  /** @deprecated use `Nonce$inboundSchema` instead. */
  export const inboundSchema = Nonce$inboundSchema;
  /** @deprecated use `Nonce$outboundSchema` instead. */
  export const outboundSchema = Nonce$outboundSchema;
  /** @deprecated use `Nonce$Outbound` instead. */
  export type Outbound = Nonce$Outbound;
}

/** @internal */
export const InteractionMetadata$inboundSchema: z.ZodType<
  InteractionMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([
  MessageComponentInteractionMetadataResponse$inboundSchema,
  ModalSubmitInteractionMetadataResponse$inboundSchema,
  ApplicationCommandInteractionMetadataResponse$inboundSchema,
]);

/** @internal */
export type InteractionMetadata$Outbound =
  | MessageComponentInteractionMetadataResponse$Outbound
  | ModalSubmitInteractionMetadataResponse$Outbound
  | ApplicationCommandInteractionMetadataResponse$Outbound;

/** @internal */
export const InteractionMetadata$outboundSchema: z.ZodType<
  InteractionMetadata$Outbound,
  z.ZodTypeDef,
  InteractionMetadata
> = z.union([
  MessageComponentInteractionMetadataResponse$outboundSchema,
  ModalSubmitInteractionMetadataResponse$outboundSchema,
  ApplicationCommandInteractionMetadataResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InteractionMetadata$ {
  /** @deprecated use `InteractionMetadata$inboundSchema` instead. */
  export const inboundSchema = InteractionMetadata$inboundSchema;
  /** @deprecated use `InteractionMetadata$outboundSchema` instead. */
  export const outboundSchema = InteractionMetadata$outboundSchema;
  /** @deprecated use `InteractionMetadata$Outbound` instead. */
  export type Outbound = InteractionMetadata$Outbound;
}

/** @internal */
export const MessageResponse$inboundSchema: z.ZodType<
  MessageResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal(0).optional(),
  content: z.string(),
  mentions: z.array(UserResponse$inboundSchema),
  mention_roles: z.array(z.string()),
  attachments: z.array(MessageAttachmentResponse$inboundSchema),
  embeds: z.array(MessageEmbedResponse$inboundSchema),
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  edited_timestamp: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  flags: z.number().int(),
  components: z.array(
    z.union([
      MessageComponentActionRowResponse$inboundSchema,
      MessageComponentMentionableSelectResponse$inboundSchema,
      MessageComponentRoleSelectResponse$inboundSchema,
      MessageComponentStringSelectResponse$inboundSchema,
      MessageComponentUserSelectResponse$inboundSchema,
      MessageComponentButtonResponse$inboundSchema,
      MessageComponentChannelSelectResponse$inboundSchema,
      MessageComponentInputTextResponse$inboundSchema,
    ]),
  ),
  resolved: z.nullable(ResolvedObjectsResponse$inboundSchema).optional(),
  stickers: z.nullable(
    z.array(
      z.union([
        StandardStickerResponse$inboundSchema,
        GuildStickerResponse$inboundSchema,
      ]),
    ),
  ).optional(),
  sticker_items: z.nullable(z.array(MessageStickerItemResponse$inboundSchema))
    .optional(),
  id: z.string(),
  channel_id: z.string(),
  author: UserResponse$inboundSchema,
  pinned: z.boolean(),
  mention_everyone: z.boolean(),
  tts: z.boolean(),
  call: z.nullable(MessageCallResponse$inboundSchema).optional(),
  activity: z.nullable(MessageActivityResponse$inboundSchema).optional(),
  application: z.nullable(BasicApplicationResponse$inboundSchema).optional(),
  application_id: z.nullable(z.string()).optional(),
  interaction: z.nullable(MessageInteractionResponse$inboundSchema).optional(),
  nonce: z.nullable(z.union([z.number().int(), z.string()])).optional(),
  webhook_id: z.nullable(z.string()).optional(),
  message_reference: z.nullable(MessageReferenceResponse$inboundSchema)
    .optional(),
  thread: z.nullable(ThreadResponse$inboundSchema).optional(),
  mention_channels: z.nullable(
    z.array(MessageMentionChannelResponse$inboundSchema),
  ).optional(),
  role_subscription_data: z.nullable(
    MessageRoleSubscriptionDataResponse$inboundSchema,
  ).optional(),
  purchase_notification: z.nullable(PurchaseNotificationResponse$inboundSchema)
    .optional(),
  position: z.nullable(z.number().int()).optional(),
  poll: z.nullable(PollResponse$inboundSchema).optional(),
  interaction_metadata: z.nullable(
    z.union([
      MessageComponentInteractionMetadataResponse$inboundSchema,
      ModalSubmitInteractionMetadataResponse$inboundSchema,
      ApplicationCommandInteractionMetadataResponse$inboundSchema,
    ]),
  ).optional(),
  message_snapshots: z.nullable(z.array(MessageSnapshotResponse$inboundSchema))
    .optional(),
  reactions: z.nullable(z.array(MessageReactionResponse$inboundSchema))
    .optional(),
  referenced_message: z.nullable(BasicMessageResponse$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "mention_roles": "mentionRoles",
    "edited_timestamp": "editedTimestamp",
    "sticker_items": "stickerItems",
    "channel_id": "channelId",
    "mention_everyone": "mentionEveryone",
    "application_id": "applicationId",
    "webhook_id": "webhookId",
    "message_reference": "messageReference",
    "mention_channels": "mentionChannels",
    "role_subscription_data": "roleSubscriptionData",
    "purchase_notification": "purchaseNotification",
    "interaction_metadata": "interactionMetadata",
    "message_snapshots": "messageSnapshots",
    "referenced_message": "referencedMessage",
  });
});

/** @internal */
export type MessageResponse$Outbound = {
  type: 0;
  content: string;
  mentions: Array<UserResponse$Outbound>;
  mention_roles: Array<string>;
  attachments: Array<MessageAttachmentResponse$Outbound>;
  embeds: Array<MessageEmbedResponse$Outbound>;
  timestamp: string;
  edited_timestamp?: string | null | undefined;
  flags: number;
  components: Array<
    | MessageComponentActionRowResponse$Outbound
    | MessageComponentMentionableSelectResponse$Outbound
    | MessageComponentRoleSelectResponse$Outbound
    | MessageComponentStringSelectResponse$Outbound
    | MessageComponentUserSelectResponse$Outbound
    | MessageComponentButtonResponse$Outbound
    | MessageComponentChannelSelectResponse$Outbound
    | MessageComponentInputTextResponse$Outbound
  >;
  resolved?: ResolvedObjectsResponse$Outbound | null | undefined;
  stickers?:
    | Array<StandardStickerResponse$Outbound | GuildStickerResponse$Outbound>
    | null
    | undefined;
  sticker_items?: Array<MessageStickerItemResponse$Outbound> | null | undefined;
  id: string;
  channel_id: string;
  author: UserResponse$Outbound;
  pinned: boolean;
  mention_everyone: boolean;
  tts: boolean;
  call?: MessageCallResponse$Outbound | null | undefined;
  activity?: MessageActivityResponse$Outbound | null | undefined;
  application?: BasicApplicationResponse$Outbound | null | undefined;
  application_id?: string | null | undefined;
  interaction?: MessageInteractionResponse$Outbound | null | undefined;
  nonce?: number | string | null | undefined;
  webhook_id?: string | null | undefined;
  message_reference?: MessageReferenceResponse$Outbound | null | undefined;
  thread?: ThreadResponse$Outbound | null | undefined;
  mention_channels?:
    | Array<MessageMentionChannelResponse$Outbound>
    | null
    | undefined;
  role_subscription_data?:
    | MessageRoleSubscriptionDataResponse$Outbound
    | null
    | undefined;
  purchase_notification?:
    | PurchaseNotificationResponse$Outbound
    | null
    | undefined;
  position?: number | null | undefined;
  poll?: PollResponse$Outbound | null | undefined;
  interaction_metadata?:
    | MessageComponentInteractionMetadataResponse$Outbound
    | ModalSubmitInteractionMetadataResponse$Outbound
    | ApplicationCommandInteractionMetadataResponse$Outbound
    | null
    | undefined;
  message_snapshots?:
    | Array<MessageSnapshotResponse$Outbound>
    | null
    | undefined;
  reactions?: Array<MessageReactionResponse$Outbound> | null | undefined;
  referenced_message?: BasicMessageResponse$Outbound | null | undefined;
};

/** @internal */
export const MessageResponse$outboundSchema: z.ZodType<
  MessageResponse$Outbound,
  z.ZodTypeDef,
  MessageResponse
> = z.object({
  type: z.literal(0).default(0 as const),
  content: z.string(),
  mentions: z.array(UserResponse$outboundSchema),
  mentionRoles: z.array(z.string()),
  attachments: z.array(MessageAttachmentResponse$outboundSchema),
  embeds: z.array(MessageEmbedResponse$outboundSchema),
  timestamp: z.date().transform(v => v.toISOString()),
  editedTimestamp: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
  flags: z.number().int(),
  components: z.array(
    z.union([
      MessageComponentActionRowResponse$outboundSchema,
      MessageComponentMentionableSelectResponse$outboundSchema,
      MessageComponentRoleSelectResponse$outboundSchema,
      MessageComponentStringSelectResponse$outboundSchema,
      MessageComponentUserSelectResponse$outboundSchema,
      MessageComponentButtonResponse$outboundSchema,
      MessageComponentChannelSelectResponse$outboundSchema,
      MessageComponentInputTextResponse$outboundSchema,
    ]),
  ),
  resolved: z.nullable(ResolvedObjectsResponse$outboundSchema).optional(),
  stickers: z.nullable(
    z.array(
      z.union([
        StandardStickerResponse$outboundSchema,
        GuildStickerResponse$outboundSchema,
      ]),
    ),
  ).optional(),
  stickerItems: z.nullable(z.array(MessageStickerItemResponse$outboundSchema))
    .optional(),
  id: z.string(),
  channelId: z.string(),
  author: UserResponse$outboundSchema,
  pinned: z.boolean(),
  mentionEveryone: z.boolean(),
  tts: z.boolean(),
  call: z.nullable(MessageCallResponse$outboundSchema).optional(),
  activity: z.nullable(MessageActivityResponse$outboundSchema).optional(),
  application: z.nullable(BasicApplicationResponse$outboundSchema).optional(),
  applicationId: z.nullable(z.string()).optional(),
  interaction: z.nullable(MessageInteractionResponse$outboundSchema).optional(),
  nonce: z.nullable(z.union([z.number().int(), z.string()])).optional(),
  webhookId: z.nullable(z.string()).optional(),
  messageReference: z.nullable(MessageReferenceResponse$outboundSchema)
    .optional(),
  thread: z.nullable(ThreadResponse$outboundSchema).optional(),
  mentionChannels: z.nullable(
    z.array(MessageMentionChannelResponse$outboundSchema),
  ).optional(),
  roleSubscriptionData: z.nullable(
    MessageRoleSubscriptionDataResponse$outboundSchema,
  ).optional(),
  purchaseNotification: z.nullable(PurchaseNotificationResponse$outboundSchema)
    .optional(),
  position: z.nullable(z.number().int()).optional(),
  poll: z.nullable(PollResponse$outboundSchema).optional(),
  interactionMetadata: z.nullable(
    z.union([
      MessageComponentInteractionMetadataResponse$outboundSchema,
      ModalSubmitInteractionMetadataResponse$outboundSchema,
      ApplicationCommandInteractionMetadataResponse$outboundSchema,
    ]),
  ).optional(),
  messageSnapshots: z.nullable(z.array(MessageSnapshotResponse$outboundSchema))
    .optional(),
  reactions: z.nullable(z.array(MessageReactionResponse$outboundSchema))
    .optional(),
  referencedMessage: z.nullable(BasicMessageResponse$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    mentionRoles: "mention_roles",
    editedTimestamp: "edited_timestamp",
    stickerItems: "sticker_items",
    channelId: "channel_id",
    mentionEveryone: "mention_everyone",
    applicationId: "application_id",
    webhookId: "webhook_id",
    messageReference: "message_reference",
    mentionChannels: "mention_channels",
    roleSubscriptionData: "role_subscription_data",
    purchaseNotification: "purchase_notification",
    interactionMetadata: "interaction_metadata",
    messageSnapshots: "message_snapshots",
    referencedMessage: "referenced_message",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageResponse$ {
  /** @deprecated use `MessageResponse$inboundSchema` instead. */
  export const inboundSchema = MessageResponse$inboundSchema;
  /** @deprecated use `MessageResponse$outboundSchema` instead. */
  export const outboundSchema = MessageResponse$outboundSchema;
  /** @deprecated use `MessageResponse$Outbound` instead. */
  export type Outbound = MessageResponse$Outbound;
}
