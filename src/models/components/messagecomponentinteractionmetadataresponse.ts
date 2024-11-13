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

export type MessageComponentInteractionMetadataResponse = {
  id: string;
  type?: 1 | undefined;
  user?: UserResponse | null | undefined;
  authorizingIntegrationOwners: { [k: string]: string };
  originalResponseMessageId?: string | null | undefined;
  interactedMessageId: string;
};

/** @internal */
export const MessageComponentInteractionMetadataResponse$inboundSchema:
  z.ZodType<
    MessageComponentInteractionMetadataResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    id: z.string(),
    type: z.literal(1).optional(),
    user: z.nullable(UserResponse$inboundSchema).optional(),
    authorizing_integration_owners: z.record(z.string()),
    original_response_message_id: z.nullable(z.string()).optional(),
    interacted_message_id: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "authorizing_integration_owners": "authorizingIntegrationOwners",
      "original_response_message_id": "originalResponseMessageId",
      "interacted_message_id": "interactedMessageId",
    });
  });

/** @internal */
export type MessageComponentInteractionMetadataResponse$Outbound = {
  id: string;
  type: 1;
  user?: UserResponse$Outbound | null | undefined;
  authorizing_integration_owners: { [k: string]: string };
  original_response_message_id?: string | null | undefined;
  interacted_message_id: string;
};

/** @internal */
export const MessageComponentInteractionMetadataResponse$outboundSchema:
  z.ZodType<
    MessageComponentInteractionMetadataResponse$Outbound,
    z.ZodTypeDef,
    MessageComponentInteractionMetadataResponse
  > = z.object({
    id: z.string(),
    type: z.literal(1).default(1 as const),
    user: z.nullable(UserResponse$outboundSchema).optional(),
    authorizingIntegrationOwners: z.record(z.string()),
    originalResponseMessageId: z.nullable(z.string()).optional(),
    interactedMessageId: z.string(),
  }).transform((v) => {
    return remap$(v, {
      authorizingIntegrationOwners: "authorizing_integration_owners",
      originalResponseMessageId: "original_response_message_id",
      interactedMessageId: "interacted_message_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageComponentInteractionMetadataResponse$ {
  /** @deprecated use `MessageComponentInteractionMetadataResponse$inboundSchema` instead. */
  export const inboundSchema =
    MessageComponentInteractionMetadataResponse$inboundSchema;
  /** @deprecated use `MessageComponentInteractionMetadataResponse$outboundSchema` instead. */
  export const outboundSchema =
    MessageComponentInteractionMetadataResponse$outboundSchema;
  /** @deprecated use `MessageComponentInteractionMetadataResponse$Outbound` instead. */
  export type Outbound = MessageComponentInteractionMetadataResponse$Outbound;
}
