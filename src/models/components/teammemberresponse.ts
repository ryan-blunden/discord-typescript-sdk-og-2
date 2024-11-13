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

export type TeamMemberResponse = {
  user: UserResponse;
  teamId: string;
  membershipState?: 1 | undefined;
};

/** @internal */
export const TeamMemberResponse$inboundSchema: z.ZodType<
  TeamMemberResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  user: UserResponse$inboundSchema,
  team_id: z.string(),
  membership_state: z.literal(1).optional(),
}).transform((v) => {
  return remap$(v, {
    "team_id": "teamId",
    "membership_state": "membershipState",
  });
});

/** @internal */
export type TeamMemberResponse$Outbound = {
  user: UserResponse$Outbound;
  team_id: string;
  membership_state: 1;
};

/** @internal */
export const TeamMemberResponse$outboundSchema: z.ZodType<
  TeamMemberResponse$Outbound,
  z.ZodTypeDef,
  TeamMemberResponse
> = z.object({
  user: UserResponse$outboundSchema,
  teamId: z.string(),
  membershipState: z.literal(1).default(1 as const),
}).transform((v) => {
  return remap$(v, {
    teamId: "team_id",
    membershipState: "membership_state",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TeamMemberResponse$ {
  /** @deprecated use `TeamMemberResponse$inboundSchema` instead. */
  export const inboundSchema = TeamMemberResponse$inboundSchema;
  /** @deprecated use `TeamMemberResponse$outboundSchema` instead. */
  export const outboundSchema = TeamMemberResponse$outboundSchema;
  /** @deprecated use `TeamMemberResponse$Outbound` instead. */
  export type Outbound = TeamMemberResponse$Outbound;
}
