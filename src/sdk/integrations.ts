/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { guildsIntegrationsList } from "../funcs/guildsIntegrationsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Integrations extends ClientSDK {
  async list(
    request: operations.ListGuildIntegrationsRequest,
    options?: RequestOptions,
  ): Promise<Array<operations.ListGuildIntegrationsResponseBody>> {
    return unwrapAsync(guildsIntegrationsList(
      this,
      request,
      options,
    ));
  }
}
