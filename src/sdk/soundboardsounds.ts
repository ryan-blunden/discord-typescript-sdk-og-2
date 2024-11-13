/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { guildsSoundboardSoundsUpdate } from "../funcs/guildsSoundboardSoundsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class SoundboardSounds extends ClientSDK {
  async update(
    request: operations.UpdateGuildSoundboardSoundRequest,
    options?: RequestOptions,
  ): Promise<components.SoundboardSoundResponse> {
    return unwrapAsync(guildsSoundboardSoundsUpdate(
      this,
      request,
      options,
    ));
  }
}
