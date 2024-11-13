/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { stickersGet } from "../funcs/stickersGet.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Stickers extends ClientSDK {
  async get(
    request: operations.GetStickerRequest,
    options?: RequestOptions,
  ): Promise<operations.GetStickerResponseBody> {
    return unwrapAsync(stickersGet(
      this,
      request,
      options,
    ));
  }
}
