import { BaseClient } from "../base-client/base-client";
import { Response, PaginatedResponse } from "../shared/response";
import { Overbooked } from "../../";

export class SlotClient implements Overbooked.ISlotClient {
  public constructor(private _baseClient: BaseClient) {}

  public async create(
    params: Overbooked.SlotCreateParams | Overbooked.SlotCreateParams[]
  ): Promise<Response<Overbooked.Slot[]>> {
    const result = await this._baseClient.call<Response<Overbooked.Slot[]>>({
      path: "/slots",
      method: "post",
      data: Array.isArray(params) ? params : [params],
    });

    return this._baseClient.normalizeResponse(result, "slot") as Response<
      Overbooked.Slot[]
    >;
  }

  public async get(id: string): Promise<Response<Overbooked.Slot>> {
    const result = await this._baseClient.call<Response<Overbooked.Slot>>({
      path: `/slots/${id}`,
      method: "get",
    });

    return this._baseClient.normalizeResponse(
      result,
      "slot"
    ) as Response<Overbooked.Slot>;
  }

  public async list(
    params: Overbooked.SlotListParams
  ): Promise<PaginatedResponse<Overbooked.Slot[]>> {
    const result = await this._baseClient.call<
      PaginatedResponse<Overbooked.Slot[]>
    >({
      path: `/slots`,
      method: "get",
      params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "slot"
    ) as PaginatedResponse<Overbooked.Slot[]>;
  }

  public async update(
    id: string,
    params: Overbooked.SlotUpdateParams
  ): Promise<Response<Overbooked.Slot>> {
    const result = await this._baseClient.call<Response<Overbooked.Slot>>({
      path: `/slots/${id}`,
      method: "patch",
      data: params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "slot"
    ) as Response<Overbooked.Slot>;
  }

  public async enable(id: string): Promise<Response<Overbooked.Slot>> {
    const result = await this._baseClient.call<Response<Overbooked.Slot>>({
      path: `/slots/${id}/enable`,
      method: "post",
    });

    return this._baseClient.normalizeResponse(
      result,
      "slot"
    ) as Response<Overbooked.Slot>;
  }

  public async disable(id: string): Promise<Response<Overbooked.Slot>> {
    const result = await this._baseClient.call<Response<Overbooked.Slot>>({
      path: `/slots/${id}/disable`,
      method: "post",
    });

    return this._baseClient.normalizeResponse(
      result,
      "slot"
    ) as Response<Overbooked.Slot>;
  }

  public async lock(
    id: string,
    params: Overbooked.SlotLockParams
  ): Promise<Response<Overbooked.Slot>> {
    const result = await this._baseClient.call<Response<Overbooked.Slot>>({
      path: `/slots/${id}/lock`,
      method: "post",
      data: params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "slot"
    ) as Response<Overbooked.Slot>;
  }

  public async unlock(
    id: string,
    params: Overbooked.SlotUnlockParams
  ): Promise<Response<Overbooked.Slot>> {
    const result = await this._baseClient.call<Response<Overbooked.Slot>>({
      path: `/slots/${id}/unlock`,
      method: "post",
      data: params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "slot"
    ) as Response<Overbooked.Slot>;
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
