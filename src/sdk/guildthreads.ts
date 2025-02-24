/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { guildThreadsGetActive } from "../funcs/guildThreadsGetActive.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class GuildThreads extends ClientSDK {
  async getActive(
    request: operations.GetActiveGuildThreadsRequest,
    options?: RequestOptions,
  ): Promise<components.ThreadsResponse> {
    return unwrapAsync(guildThreadsGetActive(
      this,
      request,
      options,
    ));
  }
}
