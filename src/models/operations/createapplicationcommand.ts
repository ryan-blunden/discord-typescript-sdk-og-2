/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CreateApplicationCommandSecurity = {
  botToken?: string | undefined;
};

export type CreateApplicationCommandRequest = {
  applicationId: string;
  applicationCommandCreateRequest: components.ApplicationCommandCreateRequest;
};

/** @internal */
export const CreateApplicationCommandSecurity$inboundSchema: z.ZodType<
  CreateApplicationCommandSecurity,
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
export type CreateApplicationCommandSecurity$Outbound = {
  BotToken?: string | undefined;
};

/** @internal */
export const CreateApplicationCommandSecurity$outboundSchema: z.ZodType<
  CreateApplicationCommandSecurity$Outbound,
  z.ZodTypeDef,
  CreateApplicationCommandSecurity
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
export namespace CreateApplicationCommandSecurity$ {
  /** @deprecated use `CreateApplicationCommandSecurity$inboundSchema` instead. */
  export const inboundSchema = CreateApplicationCommandSecurity$inboundSchema;
  /** @deprecated use `CreateApplicationCommandSecurity$outboundSchema` instead. */
  export const outboundSchema = CreateApplicationCommandSecurity$outboundSchema;
  /** @deprecated use `CreateApplicationCommandSecurity$Outbound` instead. */
  export type Outbound = CreateApplicationCommandSecurity$Outbound;
}

/** @internal */
export const CreateApplicationCommandRequest$inboundSchema: z.ZodType<
  CreateApplicationCommandRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  application_id: z.string(),
  ApplicationCommandCreateRequest:
    components.ApplicationCommandCreateRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
    "ApplicationCommandCreateRequest": "applicationCommandCreateRequest",
  });
});

/** @internal */
export type CreateApplicationCommandRequest$Outbound = {
  application_id: string;
  ApplicationCommandCreateRequest:
    components.ApplicationCommandCreateRequest$Outbound;
};

/** @internal */
export const CreateApplicationCommandRequest$outboundSchema: z.ZodType<
  CreateApplicationCommandRequest$Outbound,
  z.ZodTypeDef,
  CreateApplicationCommandRequest
> = z.object({
  applicationId: z.string(),
  applicationCommandCreateRequest:
    components.ApplicationCommandCreateRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
    applicationCommandCreateRequest: "ApplicationCommandCreateRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateApplicationCommandRequest$ {
  /** @deprecated use `CreateApplicationCommandRequest$inboundSchema` instead. */
  export const inboundSchema = CreateApplicationCommandRequest$inboundSchema;
  /** @deprecated use `CreateApplicationCommandRequest$outboundSchema` instead. */
  export const outboundSchema = CreateApplicationCommandRequest$outboundSchema;
  /** @deprecated use `CreateApplicationCommandRequest$Outbound` instead. */
  export type Outbound = CreateApplicationCommandRequest$Outbound;
}
