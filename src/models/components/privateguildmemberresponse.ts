/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  UserAvatarDecorationResponse,
  UserAvatarDecorationResponse$inboundSchema,
  UserAvatarDecorationResponse$Outbound,
  UserAvatarDecorationResponse$outboundSchema,
} from "./useravatardecorationresponse.js";
import {
  UserResponse,
  UserResponse$inboundSchema,
  UserResponse$Outbound,
  UserResponse$outboundSchema,
} from "./userresponse.js";

export type PrivateGuildMemberResponse = {
  avatar?: string | null | undefined;
  avatarDecorationData?: UserAvatarDecorationResponse | null | undefined;
  banner?: string | null | undefined;
  communicationDisabledUntil?: Date | null | undefined;
  flags: number;
  joinedAt: Date;
  nick?: string | null | undefined;
  pending: boolean;
  premiumSince?: Date | null | undefined;
  roles: Array<string>;
  user: UserResponse;
  mute: boolean;
  deaf: boolean;
};

/** @internal */
export const PrivateGuildMemberResponse$inboundSchema: z.ZodType<
  PrivateGuildMemberResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  avatar: z.nullable(z.string()).optional(),
  avatar_decoration_data: z.nullable(UserAvatarDecorationResponse$inboundSchema)
    .optional(),
  banner: z.nullable(z.string()).optional(),
  communication_disabled_until: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  flags: z.number().int(),
  joined_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  nick: z.nullable(z.string()).optional(),
  pending: z.boolean(),
  premium_since: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  roles: z.array(z.string()),
  user: UserResponse$inboundSchema,
  mute: z.boolean(),
  deaf: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "avatar_decoration_data": "avatarDecorationData",
    "communication_disabled_until": "communicationDisabledUntil",
    "joined_at": "joinedAt",
    "premium_since": "premiumSince",
  });
});

/** @internal */
export type PrivateGuildMemberResponse$Outbound = {
  avatar?: string | null | undefined;
  avatar_decoration_data?:
    | UserAvatarDecorationResponse$Outbound
    | null
    | undefined;
  banner?: string | null | undefined;
  communication_disabled_until?: string | null | undefined;
  flags: number;
  joined_at: string;
  nick?: string | null | undefined;
  pending: boolean;
  premium_since?: string | null | undefined;
  roles: Array<string>;
  user: UserResponse$Outbound;
  mute: boolean;
  deaf: boolean;
};

/** @internal */
export const PrivateGuildMemberResponse$outboundSchema: z.ZodType<
  PrivateGuildMemberResponse$Outbound,
  z.ZodTypeDef,
  PrivateGuildMemberResponse
> = z.object({
  avatar: z.nullable(z.string()).optional(),
  avatarDecorationData: z.nullable(UserAvatarDecorationResponse$outboundSchema)
    .optional(),
  banner: z.nullable(z.string()).optional(),
  communicationDisabledUntil: z.nullable(
    z.date().transform(v => v.toISOString()),
  ).optional(),
  flags: z.number().int(),
  joinedAt: z.date().transform(v => v.toISOString()),
  nick: z.nullable(z.string()).optional(),
  pending: z.boolean(),
  premiumSince: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  roles: z.array(z.string()),
  user: UserResponse$outboundSchema,
  mute: z.boolean(),
  deaf: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    avatarDecorationData: "avatar_decoration_data",
    communicationDisabledUntil: "communication_disabled_until",
    joinedAt: "joined_at",
    premiumSince: "premium_since",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PrivateGuildMemberResponse$ {
  /** @deprecated use `PrivateGuildMemberResponse$inboundSchema` instead. */
  export const inboundSchema = PrivateGuildMemberResponse$inboundSchema;
  /** @deprecated use `PrivateGuildMemberResponse$outboundSchema` instead. */
  export const outboundSchema = PrivateGuildMemberResponse$outboundSchema;
  /** @deprecated use `PrivateGuildMemberResponse$Outbound` instead. */
  export type Outbound = PrivateGuildMemberResponse$Outbound;
}

export function privateGuildMemberResponseToJSON(
  privateGuildMemberResponse: PrivateGuildMemberResponse,
): string {
  return JSON.stringify(
    PrivateGuildMemberResponse$outboundSchema.parse(privateGuildMemberResponse),
  );
}

export function privateGuildMemberResponseFromJSON(
  jsonString: string,
): SafeParseResult<PrivateGuildMemberResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PrivateGuildMemberResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PrivateGuildMemberResponse' from JSON`,
  );
}
