/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  SettingsEmojiResponse,
  SettingsEmojiResponse$inboundSchema,
  SettingsEmojiResponse$Outbound,
  SettingsEmojiResponse$outboundSchema,
} from "./settingsemojiresponse.js";

export type OnboardingPromptOptionResponse = {
  id: string;
  title: string;
  description: string;
  emoji: SettingsEmojiResponse;
  roleIds: Array<string>;
  channelIds: Array<string>;
};

/** @internal */
export const OnboardingPromptOptionResponse$inboundSchema: z.ZodType<
  OnboardingPromptOptionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  emoji: SettingsEmojiResponse$inboundSchema,
  role_ids: z.array(z.string()),
  channel_ids: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    "role_ids": "roleIds",
    "channel_ids": "channelIds",
  });
});

/** @internal */
export type OnboardingPromptOptionResponse$Outbound = {
  id: string;
  title: string;
  description: string;
  emoji: SettingsEmojiResponse$Outbound;
  role_ids: Array<string>;
  channel_ids: Array<string>;
};

/** @internal */
export const OnboardingPromptOptionResponse$outboundSchema: z.ZodType<
  OnboardingPromptOptionResponse$Outbound,
  z.ZodTypeDef,
  OnboardingPromptOptionResponse
> = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  emoji: SettingsEmojiResponse$outboundSchema,
  roleIds: z.array(z.string()),
  channelIds: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    roleIds: "role_ids",
    channelIds: "channel_ids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OnboardingPromptOptionResponse$ {
  /** @deprecated use `OnboardingPromptOptionResponse$inboundSchema` instead. */
  export const inboundSchema = OnboardingPromptOptionResponse$inboundSchema;
  /** @deprecated use `OnboardingPromptOptionResponse$outboundSchema` instead. */
  export const outboundSchema = OnboardingPromptOptionResponse$outboundSchema;
  /** @deprecated use `OnboardingPromptOptionResponse$Outbound` instead. */
  export type Outbound = OnboardingPromptOptionResponse$Outbound;
}
