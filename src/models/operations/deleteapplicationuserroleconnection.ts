/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type DeleteApplicationUserRoleConnectionRequest = {
  applicationId: string;
};

/** @internal */
export const DeleteApplicationUserRoleConnectionRequest$inboundSchema:
  z.ZodType<DeleteApplicationUserRoleConnectionRequest, z.ZodTypeDef, unknown> =
    z.object({
      application_id: z.string(),
    }).transform((v) => {
      return remap$(v, {
        "application_id": "applicationId",
      });
    });

/** @internal */
export type DeleteApplicationUserRoleConnectionRequest$Outbound = {
  application_id: string;
};

/** @internal */
export const DeleteApplicationUserRoleConnectionRequest$outboundSchema:
  z.ZodType<
    DeleteApplicationUserRoleConnectionRequest$Outbound,
    z.ZodTypeDef,
    DeleteApplicationUserRoleConnectionRequest
  > = z.object({
    applicationId: z.string(),
  }).transform((v) => {
    return remap$(v, {
      applicationId: "application_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteApplicationUserRoleConnectionRequest$ {
  /** @deprecated use `DeleteApplicationUserRoleConnectionRequest$inboundSchema` instead. */
  export const inboundSchema =
    DeleteApplicationUserRoleConnectionRequest$inboundSchema;
  /** @deprecated use `DeleteApplicationUserRoleConnectionRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeleteApplicationUserRoleConnectionRequest$outboundSchema;
  /** @deprecated use `DeleteApplicationUserRoleConnectionRequest$Outbound` instead. */
  export type Outbound = DeleteApplicationUserRoleConnectionRequest$Outbound;
}
