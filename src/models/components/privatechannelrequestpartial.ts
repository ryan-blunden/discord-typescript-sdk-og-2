/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PrivateChannelRequestPartial = {
  name?: string | null | undefined;
  icon?: string | null | undefined;
};

/** @internal */
export const PrivateChannelRequestPartial$inboundSchema: z.ZodType<
  PrivateChannelRequestPartial,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  icon: z.nullable(z.string()).optional(),
});

/** @internal */
export type PrivateChannelRequestPartial$Outbound = {
  name?: string | null | undefined;
  icon?: string | null | undefined;
};

/** @internal */
export const PrivateChannelRequestPartial$outboundSchema: z.ZodType<
  PrivateChannelRequestPartial$Outbound,
  z.ZodTypeDef,
  PrivateChannelRequestPartial
> = z.object({
  name: z.nullable(z.string()).optional(),
  icon: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PrivateChannelRequestPartial$ {
  /** @deprecated use `PrivateChannelRequestPartial$inboundSchema` instead. */
  export const inboundSchema = PrivateChannelRequestPartial$inboundSchema;
  /** @deprecated use `PrivateChannelRequestPartial$outboundSchema` instead. */
  export const outboundSchema = PrivateChannelRequestPartial$outboundSchema;
  /** @deprecated use `PrivateChannelRequestPartial$Outbound` instead. */
  export type Outbound = PrivateChannelRequestPartial$Outbound;
}

export function privateChannelRequestPartialToJSON(
  privateChannelRequestPartial: PrivateChannelRequestPartial,
): string {
  return JSON.stringify(
    PrivateChannelRequestPartial$outboundSchema.parse(
      privateChannelRequestPartial,
    ),
  );
}

export function privateChannelRequestPartialFromJSON(
  jsonString: string,
): SafeParseResult<PrivateChannelRequestPartial, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PrivateChannelRequestPartial$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PrivateChannelRequestPartial' from JSON`,
  );
}
