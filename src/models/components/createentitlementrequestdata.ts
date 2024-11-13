/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type CreateEntitlementRequestData = {
  skuId: string;
  ownerId: string;
  ownerType: number;
};

/** @internal */
export const CreateEntitlementRequestData$inboundSchema: z.ZodType<
  CreateEntitlementRequestData,
  z.ZodTypeDef,
  unknown
> = z.object({
  sku_id: z.string(),
  owner_id: z.string(),
  owner_type: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "sku_id": "skuId",
    "owner_id": "ownerId",
    "owner_type": "ownerType",
  });
});

/** @internal */
export type CreateEntitlementRequestData$Outbound = {
  sku_id: string;
  owner_id: string;
  owner_type: number;
};

/** @internal */
export const CreateEntitlementRequestData$outboundSchema: z.ZodType<
  CreateEntitlementRequestData$Outbound,
  z.ZodTypeDef,
  CreateEntitlementRequestData
> = z.object({
  skuId: z.string(),
  ownerId: z.string(),
  ownerType: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    skuId: "sku_id",
    ownerId: "owner_id",
    ownerType: "owner_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEntitlementRequestData$ {
  /** @deprecated use `CreateEntitlementRequestData$inboundSchema` instead. */
  export const inboundSchema = CreateEntitlementRequestData$inboundSchema;
  /** @deprecated use `CreateEntitlementRequestData$outboundSchema` instead. */
  export const outboundSchema = CreateEntitlementRequestData$outboundSchema;
  /** @deprecated use `CreateEntitlementRequestData$Outbound` instead. */
  export type Outbound = CreateEntitlementRequestData$Outbound;
}
