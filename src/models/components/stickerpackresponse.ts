/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  StandardStickerResponse,
  StandardStickerResponse$inboundSchema,
  StandardStickerResponse$Outbound,
  StandardStickerResponse$outboundSchema,
} from "./standardstickerresponse.js";

export type StickerPackResponse = {
  id: string;
  skuId: string;
  name: string;
  description?: string | null | undefined;
  stickers: Array<StandardStickerResponse>;
  coverStickerId?: string | null | undefined;
  bannerAssetId?: string | null | undefined;
};

/** @internal */
export const StickerPackResponse$inboundSchema: z.ZodType<
  StickerPackResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  sku_id: z.string(),
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  stickers: z.array(StandardStickerResponse$inboundSchema),
  cover_sticker_id: z.nullable(z.string()).optional(),
  banner_asset_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "sku_id": "skuId",
    "cover_sticker_id": "coverStickerId",
    "banner_asset_id": "bannerAssetId",
  });
});

/** @internal */
export type StickerPackResponse$Outbound = {
  id: string;
  sku_id: string;
  name: string;
  description?: string | null | undefined;
  stickers: Array<StandardStickerResponse$Outbound>;
  cover_sticker_id?: string | null | undefined;
  banner_asset_id?: string | null | undefined;
};

/** @internal */
export const StickerPackResponse$outboundSchema: z.ZodType<
  StickerPackResponse$Outbound,
  z.ZodTypeDef,
  StickerPackResponse
> = z.object({
  id: z.string(),
  skuId: z.string(),
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  stickers: z.array(StandardStickerResponse$outboundSchema),
  coverStickerId: z.nullable(z.string()).optional(),
  bannerAssetId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    skuId: "sku_id",
    coverStickerId: "cover_sticker_id",
    bannerAssetId: "banner_asset_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StickerPackResponse$ {
  /** @deprecated use `StickerPackResponse$inboundSchema` instead. */
  export const inboundSchema = StickerPackResponse$inboundSchema;
  /** @deprecated use `StickerPackResponse$outboundSchema` instead. */
  export const outboundSchema = StickerPackResponse$outboundSchema;
  /** @deprecated use `StickerPackResponse$Outbound` instead. */
  export type Outbound = StickerPackResponse$Outbound;
}

export function stickerPackResponseToJSON(
  stickerPackResponse: StickerPackResponse,
): string {
  return JSON.stringify(
    StickerPackResponse$outboundSchema.parse(stickerPackResponse),
  );
}

export function stickerPackResponseFromJSON(
  jsonString: string,
): SafeParseResult<StickerPackResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StickerPackResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StickerPackResponse' from JSON`,
  );
}
