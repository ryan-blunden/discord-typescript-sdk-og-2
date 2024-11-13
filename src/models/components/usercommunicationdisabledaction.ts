/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  UserCommunicationDisabledActionMetadata,
  UserCommunicationDisabledActionMetadata$inboundSchema,
  UserCommunicationDisabledActionMetadata$Outbound,
  UserCommunicationDisabledActionMetadata$outboundSchema,
} from "./usercommunicationdisabledactionmetadata.js";

export type UserCommunicationDisabledAction = {
  type?: 1 | undefined;
  metadata: UserCommunicationDisabledActionMetadata;
};

/** @internal */
export const UserCommunicationDisabledAction$inboundSchema: z.ZodType<
  UserCommunicationDisabledAction,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal(1).optional(),
  metadata: UserCommunicationDisabledActionMetadata$inboundSchema,
});

/** @internal */
export type UserCommunicationDisabledAction$Outbound = {
  type: 1;
  metadata: UserCommunicationDisabledActionMetadata$Outbound;
};

/** @internal */
export const UserCommunicationDisabledAction$outboundSchema: z.ZodType<
  UserCommunicationDisabledAction$Outbound,
  z.ZodTypeDef,
  UserCommunicationDisabledAction
> = z.object({
  type: z.literal(1).default(1 as const),
  metadata: UserCommunicationDisabledActionMetadata$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserCommunicationDisabledAction$ {
  /** @deprecated use `UserCommunicationDisabledAction$inboundSchema` instead. */
  export const inboundSchema = UserCommunicationDisabledAction$inboundSchema;
  /** @deprecated use `UserCommunicationDisabledAction$outboundSchema` instead. */
  export const outboundSchema = UserCommunicationDisabledAction$outboundSchema;
  /** @deprecated use `UserCommunicationDisabledAction$Outbound` instead. */
  export type Outbound = UserCommunicationDisabledAction$Outbound;
}
