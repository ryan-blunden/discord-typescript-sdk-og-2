/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  GuildChannelLocation,
  GuildChannelLocation$inboundSchema,
  GuildChannelLocation$Outbound,
  GuildChannelLocation$outboundSchema,
} from "./guildchannellocation.js";
import {
  PrivateChannelLocation,
  PrivateChannelLocation$inboundSchema,
  PrivateChannelLocation$Outbound,
  PrivateChannelLocation$outboundSchema,
} from "./privatechannellocation.js";

export type Location = PrivateChannelLocation | GuildChannelLocation;

export type EmbeddedActivityInstance = {
  applicationId: string;
  instanceId: string;
  launchId: string;
  location?: PrivateChannelLocation | GuildChannelLocation | null | undefined;
  users: Array<string>;
};

/** @internal */
export const Location$inboundSchema: z.ZodType<
  Location,
  z.ZodTypeDef,
  unknown
> = z.union([
  PrivateChannelLocation$inboundSchema,
  GuildChannelLocation$inboundSchema,
]);

/** @internal */
export type Location$Outbound =
  | PrivateChannelLocation$Outbound
  | GuildChannelLocation$Outbound;

/** @internal */
export const Location$outboundSchema: z.ZodType<
  Location$Outbound,
  z.ZodTypeDef,
  Location
> = z.union([
  PrivateChannelLocation$outboundSchema,
  GuildChannelLocation$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Location$ {
  /** @deprecated use `Location$inboundSchema` instead. */
  export const inboundSchema = Location$inboundSchema;
  /** @deprecated use `Location$outboundSchema` instead. */
  export const outboundSchema = Location$outboundSchema;
  /** @deprecated use `Location$Outbound` instead. */
  export type Outbound = Location$Outbound;
}

export function locationToJSON(location: Location): string {
  return JSON.stringify(Location$outboundSchema.parse(location));
}

export function locationFromJSON(
  jsonString: string,
): SafeParseResult<Location, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Location$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Location' from JSON`,
  );
}

/** @internal */
export const EmbeddedActivityInstance$inboundSchema: z.ZodType<
  EmbeddedActivityInstance,
  z.ZodTypeDef,
  unknown
> = z.object({
  application_id: z.string(),
  instance_id: z.string(),
  launch_id: z.string(),
  location: z.nullable(
    z.union([
      PrivateChannelLocation$inboundSchema,
      GuildChannelLocation$inboundSchema,
    ]),
  ).optional(),
  users: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
    "instance_id": "instanceId",
    "launch_id": "launchId",
  });
});

/** @internal */
export type EmbeddedActivityInstance$Outbound = {
  application_id: string;
  instance_id: string;
  launch_id: string;
  location?:
    | PrivateChannelLocation$Outbound
    | GuildChannelLocation$Outbound
    | null
    | undefined;
  users: Array<string>;
};

/** @internal */
export const EmbeddedActivityInstance$outboundSchema: z.ZodType<
  EmbeddedActivityInstance$Outbound,
  z.ZodTypeDef,
  EmbeddedActivityInstance
> = z.object({
  applicationId: z.string(),
  instanceId: z.string(),
  launchId: z.string(),
  location: z.nullable(
    z.union([
      PrivateChannelLocation$outboundSchema,
      GuildChannelLocation$outboundSchema,
    ]),
  ).optional(),
  users: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
    instanceId: "instance_id",
    launchId: "launch_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmbeddedActivityInstance$ {
  /** @deprecated use `EmbeddedActivityInstance$inboundSchema` instead. */
  export const inboundSchema = EmbeddedActivityInstance$inboundSchema;
  /** @deprecated use `EmbeddedActivityInstance$outboundSchema` instead. */
  export const outboundSchema = EmbeddedActivityInstance$outboundSchema;
  /** @deprecated use `EmbeddedActivityInstance$Outbound` instead. */
  export type Outbound = EmbeddedActivityInstance$Outbound;
}

export function embeddedActivityInstanceToJSON(
  embeddedActivityInstance: EmbeddedActivityInstance,
): string {
  return JSON.stringify(
    EmbeddedActivityInstance$outboundSchema.parse(embeddedActivityInstance),
  );
}

export function embeddedActivityInstanceFromJSON(
  jsonString: string,
): SafeParseResult<EmbeddedActivityInstance, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EmbeddedActivityInstance$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EmbeddedActivityInstance' from JSON`,
  );
}
