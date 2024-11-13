/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type UpdateApplicationCommandSecurity = {
  botToken?: string | undefined;
};

export type UpdateApplicationCommandRequest = {
  applicationId: string;
  commandId: string;
  applicationCommandPatchRequestPartial:
    components.ApplicationCommandPatchRequestPartial;
};

/** @internal */
export const UpdateApplicationCommandSecurity$inboundSchema: z.ZodType<
  UpdateApplicationCommandSecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  BotToken: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "BotToken": "botToken",
  });
});

/** @internal */
export type UpdateApplicationCommandSecurity$Outbound = {
  BotToken?: string | undefined;
};

/** @internal */
export const UpdateApplicationCommandSecurity$outboundSchema: z.ZodType<
  UpdateApplicationCommandSecurity$Outbound,
  z.ZodTypeDef,
  UpdateApplicationCommandSecurity
> = z.object({
  botToken: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    botToken: "BotToken",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateApplicationCommandSecurity$ {
  /** @deprecated use `UpdateApplicationCommandSecurity$inboundSchema` instead. */
  export const inboundSchema = UpdateApplicationCommandSecurity$inboundSchema;
  /** @deprecated use `UpdateApplicationCommandSecurity$outboundSchema` instead. */
  export const outboundSchema = UpdateApplicationCommandSecurity$outboundSchema;
  /** @deprecated use `UpdateApplicationCommandSecurity$Outbound` instead. */
  export type Outbound = UpdateApplicationCommandSecurity$Outbound;
}

/** @internal */
export const UpdateApplicationCommandRequest$inboundSchema: z.ZodType<
  UpdateApplicationCommandRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  application_id: z.string(),
  command_id: z.string(),
  ApplicationCommandPatchRequestPartial:
    components.ApplicationCommandPatchRequestPartial$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
    "command_id": "commandId",
    "ApplicationCommandPatchRequestPartial":
      "applicationCommandPatchRequestPartial",
  });
});

/** @internal */
export type UpdateApplicationCommandRequest$Outbound = {
  application_id: string;
  command_id: string;
  ApplicationCommandPatchRequestPartial:
    components.ApplicationCommandPatchRequestPartial$Outbound;
};

/** @internal */
export const UpdateApplicationCommandRequest$outboundSchema: z.ZodType<
  UpdateApplicationCommandRequest$Outbound,
  z.ZodTypeDef,
  UpdateApplicationCommandRequest
> = z.object({
  applicationId: z.string(),
  commandId: z.string(),
  applicationCommandPatchRequestPartial:
    components.ApplicationCommandPatchRequestPartial$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
    commandId: "command_id",
    applicationCommandPatchRequestPartial:
      "ApplicationCommandPatchRequestPartial",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateApplicationCommandRequest$ {
  /** @deprecated use `UpdateApplicationCommandRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateApplicationCommandRequest$inboundSchema;
  /** @deprecated use `UpdateApplicationCommandRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateApplicationCommandRequest$outboundSchema;
  /** @deprecated use `UpdateApplicationCommandRequest$Outbound` instead. */
  export type Outbound = UpdateApplicationCommandRequest$Outbound;
}
