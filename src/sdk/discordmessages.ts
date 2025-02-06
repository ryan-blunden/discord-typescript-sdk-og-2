/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { channelsMessagesBulkDelete } from "../funcs/channelsMessagesBulkDelete.js";
import { channelsMessagesCreateForm } from "../funcs/channelsMessagesCreateForm.js";
import { channelsMessagesCreateJson } from "../funcs/channelsMessagesCreateJson.js";
import { channelsMessagesCreateMultipart } from "../funcs/channelsMessagesCreateMultipart.js";
import { channelsMessagesDeleteAllReactions } from "../funcs/channelsMessagesDeleteAllReactions.js";
import { channelsMessagesDeleteMyReaction } from "../funcs/channelsMessagesDeleteMyReaction.js";
import { channelsMessagesGet } from "../funcs/channelsMessagesGet.js";
import { channelsMessagesList } from "../funcs/channelsMessagesList.js";
import { channelsMessagesUpdateForm } from "../funcs/channelsMessagesUpdateForm.js";
import { channelsMessagesUpdateJson } from "../funcs/channelsMessagesUpdateJson.js";
import { channelsMessagesUpdateMultipart } from "../funcs/channelsMessagesUpdateMultipart.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Reactions } from "./reactions.js";

export class DiscordMessages extends ClientSDK {
  private _reactions?: Reactions;
  get reactions(): Reactions {
    return (this._reactions ??= new Reactions(this._options));
  }

  async deleteMyReaction(
    request: operations.DeleteMyMessageReactionRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(channelsMessagesDeleteMyReaction(
      this,
      request,
      options,
    ));
  }

  async bulkDelete(
    request: operations.BulkDeleteMessagesRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(channelsMessagesBulkDelete(
      this,
      request,
      options,
    ));
  }

  async deleteAllReactions(
    request: operations.DeleteAllMessageReactionsRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(channelsMessagesDeleteAllReactions(
      this,
      request,
      options,
    ));
  }

  async get(
    request: operations.GetMessageRequest,
    options?: RequestOptions,
  ): Promise<components.MessageResponse> {
    return unwrapAsync(channelsMessagesGet(
      this,
      request,
      options,
    ));
  }

  async updateJson(
    request: operations.UpdateMessageJsonRequest,
    options?: RequestOptions,
  ): Promise<components.MessageResponse> {
    return unwrapAsync(channelsMessagesUpdateJson(
      this,
      request,
      options,
    ));
  }

  async updateForm(
    request: operations.UpdateMessageFormRequest,
    options?: RequestOptions,
  ): Promise<components.MessageResponse> {
    return unwrapAsync(channelsMessagesUpdateForm(
      this,
      request,
      options,
    ));
  }

  async updateMultipart(
    request: operations.UpdateMessageMultipartRequest,
    options?: RequestOptions,
  ): Promise<components.MessageResponse> {
    return unwrapAsync(channelsMessagesUpdateMultipart(
      this,
      request,
      options,
    ));
  }

  async list(
    request: operations.ListMessagesRequest,
    options?: RequestOptions,
  ): Promise<Array<components.MessageResponse>> {
    return unwrapAsync(channelsMessagesList(
      this,
      request,
      options,
    ));
  }

  async createMultipart(
    request: operations.CreateMessageMultipartRequest,
    options?: RequestOptions,
  ): Promise<components.MessageResponse> {
    return unwrapAsync(channelsMessagesCreateMultipart(
      this,
      request,
      options,
    ));
  }

  async createJson(
    request: operations.CreateMessageJsonRequest,
    options?: RequestOptions,
  ): Promise<components.MessageResponse> {
    return unwrapAsync(channelsMessagesCreateJson(
      this,
      request,
      options,
    ));
  }

  async createForm(
    request: operations.CreateMessageFormRequest,
    options?: RequestOptions,
  ): Promise<components.MessageResponse> {
    return unwrapAsync(channelsMessagesCreateForm(
      this,
      request,
      options,
    ));
  }
}
