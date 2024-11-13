/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  OnboardingPromptResponse,
  OnboardingPromptResponse$inboundSchema,
  OnboardingPromptResponse$Outbound,
  OnboardingPromptResponse$outboundSchema,
} from "./onboardingpromptresponse.js";

export type UserGuildOnboardingResponse = {
  guildId: string;
  prompts: Array<OnboardingPromptResponse>;
  defaultChannelIds: Array<string>;
  enabled: boolean;
};

/** @internal */
export const UserGuildOnboardingResponse$inboundSchema: z.ZodType<
  UserGuildOnboardingResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  prompts: z.array(OnboardingPromptResponse$inboundSchema),
  default_channel_ids: z.array(z.string()),
  enabled: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "default_channel_ids": "defaultChannelIds",
  });
});

/** @internal */
export type UserGuildOnboardingResponse$Outbound = {
  guild_id: string;
  prompts: Array<OnboardingPromptResponse$Outbound>;
  default_channel_ids: Array<string>;
  enabled: boolean;
};

/** @internal */
export const UserGuildOnboardingResponse$outboundSchema: z.ZodType<
  UserGuildOnboardingResponse$Outbound,
  z.ZodTypeDef,
  UserGuildOnboardingResponse
> = z.object({
  guildId: z.string(),
  prompts: z.array(OnboardingPromptResponse$outboundSchema),
  defaultChannelIds: z.array(z.string()),
  enabled: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    defaultChannelIds: "default_channel_ids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserGuildOnboardingResponse$ {
  /** @deprecated use `UserGuildOnboardingResponse$inboundSchema` instead. */
  export const inboundSchema = UserGuildOnboardingResponse$inboundSchema;
  /** @deprecated use `UserGuildOnboardingResponse$outboundSchema` instead. */
  export const outboundSchema = UserGuildOnboardingResponse$outboundSchema;
  /** @deprecated use `UserGuildOnboardingResponse$Outbound` instead. */
  export type Outbound = UserGuildOnboardingResponse$Outbound;
}
