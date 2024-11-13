/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type CreateGuildTemplateRequestBody = {
  name: string;
  description?: string | null | undefined;
};

export type CreateGuildTemplateRequest = {
  guildId: string;
  requestBody: CreateGuildTemplateRequestBody;
};

/** @internal */
export const CreateGuildTemplateRequestBody$inboundSchema: z.ZodType<
  CreateGuildTemplateRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
});

/** @internal */
export type CreateGuildTemplateRequestBody$Outbound = {
  name: string;
  description?: string | null | undefined;
};

/** @internal */
export const CreateGuildTemplateRequestBody$outboundSchema: z.ZodType<
  CreateGuildTemplateRequestBody$Outbound,
  z.ZodTypeDef,
  CreateGuildTemplateRequestBody
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateGuildTemplateRequestBody$ {
  /** @deprecated use `CreateGuildTemplateRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateGuildTemplateRequestBody$inboundSchema;
  /** @deprecated use `CreateGuildTemplateRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateGuildTemplateRequestBody$outboundSchema;
  /** @deprecated use `CreateGuildTemplateRequestBody$Outbound` instead. */
  export type Outbound = CreateGuildTemplateRequestBody$Outbound;
}

/** @internal */
export const CreateGuildTemplateRequest$inboundSchema: z.ZodType<
  CreateGuildTemplateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  RequestBody: z.lazy(() => CreateGuildTemplateRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateGuildTemplateRequest$Outbound = {
  guild_id: string;
  RequestBody: CreateGuildTemplateRequestBody$Outbound;
};

/** @internal */
export const CreateGuildTemplateRequest$outboundSchema: z.ZodType<
  CreateGuildTemplateRequest$Outbound,
  z.ZodTypeDef,
  CreateGuildTemplateRequest
> = z.object({
  guildId: z.string(),
  requestBody: z.lazy(() => CreateGuildTemplateRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateGuildTemplateRequest$ {
  /** @deprecated use `CreateGuildTemplateRequest$inboundSchema` instead. */
  export const inboundSchema = CreateGuildTemplateRequest$inboundSchema;
  /** @deprecated use `CreateGuildTemplateRequest$outboundSchema` instead. */
  export const outboundSchema = CreateGuildTemplateRequest$outboundSchema;
  /** @deprecated use `CreateGuildTemplateRequest$Outbound` instead. */
  export type Outbound = CreateGuildTemplateRequest$Outbound;
}
