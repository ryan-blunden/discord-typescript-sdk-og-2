/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { guildBansBulkBan } from "../funcs/guildBansBulkBan.js";
import { guildBansGet } from "../funcs/guildBansGet.js";
import { guildBansList } from "../funcs/guildBansList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class GuildBans extends ClientSDK {
  async bulkBan(
    request: operations.BulkBanUsersFromGuildRequest,
    options?: RequestOptions,
  ): Promise<components.BulkBanUsersResponse> {
    return unwrapAsync(guildBansBulkBan(
      this,
      request,
      options,
    ));
  }

  async get(
    request: operations.GetGuildBanRequest,
    options?: RequestOptions,
  ): Promise<components.GuildBanResponse> {
    return unwrapAsync(guildBansGet(
      this,
      request,
      options,
    ));
  }

  async list(
    request: operations.ListGuildBansRequest,
    options?: RequestOptions,
  ): Promise<Array<components.GuildBanResponse>> {
    return unwrapAsync(guildBansList(
      this,
      request,
      options,
    ));
  }
}
