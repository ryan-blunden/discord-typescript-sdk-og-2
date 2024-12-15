/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  GuildMemberResponse,
  GuildMemberResponse$inboundSchema,
  GuildMemberResponse$Outbound,
  GuildMemberResponse$outboundSchema,
} from "./guildmemberresponse.js";

export type ThreadMemberResponse = {
  id: string;
  userId: string;
  joinTimestamp: Date;
  flags: number;
  member?: GuildMemberResponse | null | undefined;
};

/** @internal */
export const ThreadMemberResponse$inboundSchema: z.ZodType<
  ThreadMemberResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  user_id: z.string(),
  join_timestamp: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  flags: z.number().int(),
  member: z.nullable(GuildMemberResponse$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "user_id": "userId",
    "join_timestamp": "joinTimestamp",
  });
});

/** @internal */
export type ThreadMemberResponse$Outbound = {
  id: string;
  user_id: string;
  join_timestamp: string;
  flags: number;
  member?: GuildMemberResponse$Outbound | null | undefined;
};

/** @internal */
export const ThreadMemberResponse$outboundSchema: z.ZodType<
  ThreadMemberResponse$Outbound,
  z.ZodTypeDef,
  ThreadMemberResponse
> = z.object({
  id: z.string(),
  userId: z.string(),
  joinTimestamp: z.date().transform(v => v.toISOString()),
  flags: z.number().int(),
  member: z.nullable(GuildMemberResponse$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    userId: "user_id",
    joinTimestamp: "join_timestamp",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ThreadMemberResponse$ {
  /** @deprecated use `ThreadMemberResponse$inboundSchema` instead. */
  export const inboundSchema = ThreadMemberResponse$inboundSchema;
  /** @deprecated use `ThreadMemberResponse$outboundSchema` instead. */
  export const outboundSchema = ThreadMemberResponse$outboundSchema;
  /** @deprecated use `ThreadMemberResponse$Outbound` instead. */
  export type Outbound = ThreadMemberResponse$Outbound;
}

export function threadMemberResponseToJSON(
  threadMemberResponse: ThreadMemberResponse,
): string {
  return JSON.stringify(
    ThreadMemberResponse$outboundSchema.parse(threadMemberResponse),
  );
}

export function threadMemberResponseFromJSON(
  jsonString: string,
): SafeParseResult<ThreadMemberResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ThreadMemberResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ThreadMemberResponse' from JSON`,
  );
}
