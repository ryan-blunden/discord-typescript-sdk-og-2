/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { webhookMessagesGetOriginal } from "../funcs/webhookMessagesGetOriginal.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class WebhookMessages extends ClientSDK {
  async getOriginal(
    request: operations.GetOriginalWebhookMessageRequest,
    security?: operations.GetOriginalWebhookMessageSecurity | undefined,
    options?: RequestOptions,
  ): Promise<components.MessageResponse> {
    return unwrapAsync(webhookMessagesGetOriginal(
      this,
      request,
      security,
      options,
    ));
  }
}
