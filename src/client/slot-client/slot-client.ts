import { Slot } from "src/model/slot";
import { BaseClient } from "../base-client/base-client";
import { Response, PaginatedResponse } from "../shared/response";
import {
  ISlotClient,
  SlotCreateParams,
  SlotListParams,
  SlotLockParams,
  SlotUnlockParams,
  SlotUpdateParams,
} from "./slot-client.interface";

export class SlotClient implements ISlotClient {
  public constructor(private _baseClient: BaseClient) {}

  public async create(
    params: SlotCreateParams | SlotCreateParams[]
  ): Promise<Response<Slot[]>> {
    const result = await this._baseClient.call<Response<Slot[]>>({
      path: "/slots",
      method: "post",
      data: Array.isArray(params) ? params : [params],
    });

    return this._baseClient.normalizeResponse(result, "slot") as Response<
      Slot[]
    >;
  }

  public async get(id: string): Promise<Response<Slot>> {
    const result = await this._baseClient.call<Response<Slot>>({
      path: `/slots/${id}`,
      method: "get",
    });

    return this._baseClient.normalizeResponse(result, "slot") as Response<Slot>;
  }

  public async list(
    params: SlotListParams
  ): Promise<PaginatedResponse<Slot[]>> {
    const result = await this._baseClient.call<PaginatedResponse<Slot[]>>({
      path: `/slots`,
      method: "get",
      params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "slot"
    ) as PaginatedResponse<Slot[]>;
  }

  public async update(
    id: string,
    params: SlotUpdateParams
  ): Promise<Response<Slot>> {
    const result = await this._baseClient.call<Response<Slot>>({
      path: `/slots/${id}`,
      method: "patch",
      data: params,
    });

    return this._baseClient.normalizeResponse(result, "slot") as Response<Slot>;
  }

  public async enable(id: string): Promise<Response<Slot>> {
    const result = await this._baseClient.call<Response<Slot>>({
      path: `/slots/${id}/enable`,
      method: "post",
    });

    return this._baseClient.normalizeResponse(result, "slot") as Response<Slot>;
  }

  public async disable(id: string): Promise<Response<Slot>> {
    const result = await this._baseClient.call<Response<Slot>>({
      path: `/slots/${id}/disable`,
      method: "post",
    });

    return this._baseClient.normalizeResponse(result, "slot") as Response<Slot>;
  }

  public async lock(
    id: string,
    params: SlotLockParams
  ): Promise<Response<Slot>> {
    const result = await this._baseClient.call<Response<Slot>>({
      path: `/slots/${id}/lock`,
      method: "post",
      data: params,
    });

    return this._baseClient.normalizeResponse(result, "slot") as Response<Slot>;
  }

  public async unlock(
    id: string,
    params: SlotUnlockParams
  ): Promise<Response<Slot>> {
    const result = await this._baseClient.call<Response<Slot>>({
      path: `/slots/${id}/unlock`,
      method: "post",
      data: params,
    });

    return this._baseClient.normalizeResponse(result, "slot") as Response<Slot>;
  }

  public async delete(
    id: string
  ): Promise<Response<Record<string, never>, { [key: string]: unknown }>> {
    return this._baseClient.call({
      path: `/slots/${id}`,
      method: "delete",
    });
  }
}
