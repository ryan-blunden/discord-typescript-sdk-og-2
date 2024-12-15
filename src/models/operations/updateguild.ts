/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateGuildRequest = {
  guildId: string;
  guildPatchRequestPartial: components.GuildPatchRequestPartial;
};

/** @internal */
export const UpdateGuildRequest$inboundSchema: z.ZodType<
  UpdateGuildRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  GuildPatchRequestPartial: components.GuildPatchRequestPartial$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "GuildPatchRequestPartial": "guildPatchRequestPartial",
  });
});

/** @internal */
export type UpdateGuildRequest$Outbound = {
  guild_id: string;
  GuildPatchRequestPartial: components.GuildPatchRequestPartial$Outbound;
};

/** @internal */
export const UpdateGuildRequest$outboundSchema: z.ZodType<
  UpdateGuildRequest$Outbound,
  z.ZodTypeDef,
  UpdateGuildRequest
> = z.object({
  guildId: z.string(),
  guildPatchRequestPartial: components.GuildPatchRequestPartial$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    guildPatchRequestPartial: "GuildPatchRequestPartial",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateGuildRequest$ {
  /** @deprecated use `UpdateGuildRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateGuildRequest$inboundSchema;
  /** @deprecated use `UpdateGuildRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateGuildRequest$outboundSchema;
  /** @deprecated use `UpdateGuildRequest$Outbound` instead. */
  export type Outbound = UpdateGuildRequest$Outbound;
}

export function updateGuildRequestToJSON(
  updateGuildRequest: UpdateGuildRequest,
): string {
  return JSON.stringify(
    UpdateGuildRequest$outboundSchema.parse(updateGuildRequest),
  );
}

export function updateGuildRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateGuildRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateGuildRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateGuildRequest' from JSON`,
  );
}
