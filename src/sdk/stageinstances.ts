/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { stageInstancesCreate } from "../funcs/stageInstancesCreate.js";
import { stageInstancesDelete } from "../funcs/stageInstancesDelete.js";
import { stageInstancesGet } from "../funcs/stageInstancesGet.js";
import { stageInstancesUpdate } from "../funcs/stageInstancesUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class StageInstances extends ClientSDK {
  async create(
    request: operations.CreateStageInstanceRequestBody,
    options?: RequestOptions,
  ): Promise<components.StageInstanceResponse> {
    return unwrapAsync(stageInstancesCreate(
      this,
      request,
      options,
    ));
  }

  async get(
    request: operations.GetStageInstanceRequest,
    options?: RequestOptions,
  ): Promise<components.StageInstanceResponse> {
    return unwrapAsync(stageInstancesGet(
      this,
      request,
      options,
    ));
  }

  async delete(
    request: operations.DeleteStageInstanceRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(stageInstancesDelete(
      this,
      request,
      options,
    ));
  }

  async update(
    request: operations.UpdateStageInstanceRequest,
    options?: RequestOptions,
  ): Promise<components.StageInstanceResponse> {
    return unwrapAsync(stageInstancesUpdate(
      this,
      request,
      options,
    ));
  }
}
