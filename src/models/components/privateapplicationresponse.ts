/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ApplicationIntegrationTypeConfigurationResponse,
  ApplicationIntegrationTypeConfigurationResponse$inboundSchema,
  ApplicationIntegrationTypeConfigurationResponse$Outbound,
  ApplicationIntegrationTypeConfigurationResponse$outboundSchema,
} from "./applicationintegrationtypeconfigurationresponse.js";
import {
  ApplicationOAuth2InstallParamsResponse,
  ApplicationOAuth2InstallParamsResponse$inboundSchema,
  ApplicationOAuth2InstallParamsResponse$Outbound,
  ApplicationOAuth2InstallParamsResponse$outboundSchema,
} from "./applicationoauth2installparamsresponse.js";
import {
  TeamResponse,
  TeamResponse$inboundSchema,
  TeamResponse$Outbound,
  TeamResponse$outboundSchema,
} from "./teamresponse.js";
import {
  UserResponse,
  UserResponse$inboundSchema,
  UserResponse$Outbound,
  UserResponse$outboundSchema,
} from "./userresponse.js";

export type PrivateApplicationResponse = {
  id: string;
  name: string;
  icon?: string | null | undefined;
  description: string;
  type?: 4 | null | undefined;
  coverImage?: string | null | undefined;
  primarySkuId?: string | null | undefined;
  bot?: UserResponse | null | undefined;
  slug?: string | null | undefined;
  guildId?: string | null | undefined;
  rpcOrigins?: Array<string> | null | undefined;
  botPublic?: boolean | null | undefined;
  botRequireCodeGrant?: boolean | null | undefined;
  termsOfServiceUrl?: string | null | undefined;
  privacyPolicyUrl?: string | null | undefined;
  customInstallUrl?: string | null | undefined;
  installParams?: ApplicationOAuth2InstallParamsResponse | null | undefined;
  integrationTypesConfig?:
    | { [k: string]: ApplicationIntegrationTypeConfigurationResponse }
    | null
    | undefined;
  verifyKey: string;
  flags: number;
  maxParticipants?: number | null | undefined;
  tags?: Array<string> | null | undefined;
  redirectUris: Array<string>;
  interactionsEndpointUrl?: string | null | undefined;
  roleConnectionsVerificationUrl?: string | null | undefined;
  owner: UserResponse;
  approximateGuildCount?: number | null | undefined;
  approximateUserInstallCount: number;
  explicitContentFilter?: 0 | undefined;
  team?: TeamResponse | null | undefined;
};

/** @internal */
export const PrivateApplicationResponse$inboundSchema: z.ZodType<
  PrivateApplicationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.nullable(z.string()).optional(),
  description: z.string(),
  type: z.nullable(z.literal(4)).optional(),
  cover_image: z.nullable(z.string()).optional(),
  primary_sku_id: z.nullable(z.string()).optional(),
  bot: z.nullable(UserResponse$inboundSchema).optional(),
  slug: z.nullable(z.string()).optional(),
  guild_id: z.nullable(z.string()).optional(),
  rpc_origins: z.nullable(z.array(z.string())).optional(),
  bot_public: z.nullable(z.boolean()).optional(),
  bot_require_code_grant: z.nullable(z.boolean()).optional(),
  terms_of_service_url: z.nullable(z.string()).optional(),
  privacy_policy_url: z.nullable(z.string()).optional(),
  custom_install_url: z.nullable(z.string()).optional(),
  install_params: z.nullable(
    ApplicationOAuth2InstallParamsResponse$inboundSchema,
  ).optional(),
  integration_types_config: z.nullable(
    z.record(ApplicationIntegrationTypeConfigurationResponse$inboundSchema),
  ).optional(),
  verify_key: z.string(),
  flags: z.number().int(),
  max_participants: z.nullable(z.number().int()).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  redirect_uris: z.array(z.string()),
  interactions_endpoint_url: z.nullable(z.string()).optional(),
  role_connections_verification_url: z.nullable(z.string()).optional(),
  owner: UserResponse$inboundSchema,
  approximate_guild_count: z.nullable(z.number().int()).optional(),
  approximate_user_install_count: z.number().int(),
  explicit_content_filter: z.literal(0).optional(),
  team: z.nullable(TeamResponse$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "cover_image": "coverImage",
    "primary_sku_id": "primarySkuId",
    "guild_id": "guildId",
    "rpc_origins": "rpcOrigins",
    "bot_public": "botPublic",
    "bot_require_code_grant": "botRequireCodeGrant",
    "terms_of_service_url": "termsOfServiceUrl",
    "privacy_policy_url": "privacyPolicyUrl",
    "custom_install_url": "customInstallUrl",
    "install_params": "installParams",
    "integration_types_config": "integrationTypesConfig",
    "verify_key": "verifyKey",
    "max_participants": "maxParticipants",
    "redirect_uris": "redirectUris",
    "interactions_endpoint_url": "interactionsEndpointUrl",
    "role_connections_verification_url": "roleConnectionsVerificationUrl",
    "approximate_guild_count": "approximateGuildCount",
    "approximate_user_install_count": "approximateUserInstallCount",
    "explicit_content_filter": "explicitContentFilter",
  });
});

/** @internal */
export type PrivateApplicationResponse$Outbound = {
  id: string;
  name: string;
  icon?: string | null | undefined;
  description: string;
  type: 4 | null;
  cover_image?: string | null | undefined;
  primary_sku_id?: string | null | undefined;
  bot?: UserResponse$Outbound | null | undefined;
  slug?: string | null | undefined;
  guild_id?: string | null | undefined;
  rpc_origins?: Array<string> | null | undefined;
  bot_public?: boolean | null | undefined;
  bot_require_code_grant?: boolean | null | undefined;
  terms_of_service_url?: string | null | undefined;
  privacy_policy_url?: string | null | undefined;
  custom_install_url?: string | null | undefined;
  install_params?:
    | ApplicationOAuth2InstallParamsResponse$Outbound
    | null
    | undefined;
  integration_types_config?:
    | { [k: string]: ApplicationIntegrationTypeConfigurationResponse$Outbound }
    | null
    | undefined;
  verify_key: string;
  flags: number;
  max_participants?: number | null | undefined;
  tags?: Array<string> | null | undefined;
  redirect_uris: Array<string>;
  interactions_endpoint_url?: string | null | undefined;
  role_connections_verification_url?: string | null | undefined;
  owner: UserResponse$Outbound;
  approximate_guild_count?: number | null | undefined;
  approximate_user_install_count: number;
  explicit_content_filter: 0;
  team?: TeamResponse$Outbound | null | undefined;
};

/** @internal */
export const PrivateApplicationResponse$outboundSchema: z.ZodType<
  PrivateApplicationResponse$Outbound,
  z.ZodTypeDef,
  PrivateApplicationResponse
> = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.nullable(z.string()).optional(),
  description: z.string(),
  type: z.nullable(z.literal(4).default(4 as const)),
  coverImage: z.nullable(z.string()).optional(),
  primarySkuId: z.nullable(z.string()).optional(),
  bot: z.nullable(UserResponse$outboundSchema).optional(),
  slug: z.nullable(z.string()).optional(),
  guildId: z.nullable(z.string()).optional(),
  rpcOrigins: z.nullable(z.array(z.string())).optional(),
  botPublic: z.nullable(z.boolean()).optional(),
  botRequireCodeGrant: z.nullable(z.boolean()).optional(),
  termsOfServiceUrl: z.nullable(z.string()).optional(),
  privacyPolicyUrl: z.nullable(z.string()).optional(),
  customInstallUrl: z.nullable(z.string()).optional(),
  installParams: z.nullable(
    ApplicationOAuth2InstallParamsResponse$outboundSchema,
  ).optional(),
  integrationTypesConfig: z.nullable(
    z.record(ApplicationIntegrationTypeConfigurationResponse$outboundSchema),
  ).optional(),
  verifyKey: z.string(),
  flags: z.number().int(),
  maxParticipants: z.nullable(z.number().int()).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  redirectUris: z.array(z.string()),
  interactionsEndpointUrl: z.nullable(z.string()).optional(),
  roleConnectionsVerificationUrl: z.nullable(z.string()).optional(),
  owner: UserResponse$outboundSchema,
  approximateGuildCount: z.nullable(z.number().int()).optional(),
  approximateUserInstallCount: z.number().int(),
  explicitContentFilter: z.literal(0).default(0 as const),
  team: z.nullable(TeamResponse$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    coverImage: "cover_image",
    primarySkuId: "primary_sku_id",
    guildId: "guild_id",
    rpcOrigins: "rpc_origins",
    botPublic: "bot_public",
    botRequireCodeGrant: "bot_require_code_grant",
    termsOfServiceUrl: "terms_of_service_url",
    privacyPolicyUrl: "privacy_policy_url",
    customInstallUrl: "custom_install_url",
    installParams: "install_params",
    integrationTypesConfig: "integration_types_config",
    verifyKey: "verify_key",
    maxParticipants: "max_participants",
    redirectUris: "redirect_uris",
    interactionsEndpointUrl: "interactions_endpoint_url",
    roleConnectionsVerificationUrl: "role_connections_verification_url",
    approximateGuildCount: "approximate_guild_count",
    approximateUserInstallCount: "approximate_user_install_count",
    explicitContentFilter: "explicit_content_filter",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PrivateApplicationResponse$ {
  /** @deprecated use `PrivateApplicationResponse$inboundSchema` instead. */
  export const inboundSchema = PrivateApplicationResponse$inboundSchema;
  /** @deprecated use `PrivateApplicationResponse$outboundSchema` instead. */
  export const outboundSchema = PrivateApplicationResponse$outboundSchema;
  /** @deprecated use `PrivateApplicationResponse$Outbound` instead. */
  export type Outbound = PrivateApplicationResponse$Outbound;
}

export function privateApplicationResponseToJSON(
  privateApplicationResponse: PrivateApplicationResponse,
): string {
  return JSON.stringify(
    PrivateApplicationResponse$outboundSchema.parse(privateApplicationResponse),
  );
}

export function privateApplicationResponseFromJSON(
  jsonString: string,
): SafeParseResult<PrivateApplicationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PrivateApplicationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PrivateApplicationResponse' from JSON`,
  );
}
