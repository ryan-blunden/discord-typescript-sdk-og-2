/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UserSelectDefaultValueResponse = {
  type?: "user" | undefined;
  id: string;
};

/** @internal */
export const UserSelectDefaultValueResponse$inboundSchema: z.ZodType<
  UserSelectDefaultValueResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("user").optional(),
  id: z.string(),
});

/** @internal */
export type UserSelectDefaultValueResponse$Outbound = {
  type: "user";
  id: string;
};

/** @internal */
export const UserSelectDefaultValueResponse$outboundSchema: z.ZodType<
  UserSelectDefaultValueResponse$Outbound,
  z.ZodTypeDef,
  UserSelectDefaultValueResponse
> = z.object({
  type: z.literal("user").default("user" as const),
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserSelectDefaultValueResponse$ {
  /** @deprecated use `UserSelectDefaultValueResponse$inboundSchema` instead. */
  export const inboundSchema = UserSelectDefaultValueResponse$inboundSchema;
  /** @deprecated use `UserSelectDefaultValueResponse$outboundSchema` instead. */
  export const outboundSchema = UserSelectDefaultValueResponse$outboundSchema;
  /** @deprecated use `UserSelectDefaultValueResponse$Outbound` instead. */
  export type Outbound = UserSelectDefaultValueResponse$Outbound;
}
