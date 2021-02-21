import { BaseClient } from "../base-client/base-client";
import { Response, PaginatedResponse } from "../shared/response";
import { Overbooked } from "../../";

export class SlotClient implements Overbooked.ISlotClient {
  public constructor(private _baseClient: BaseClient) {}

  /**
   * public.slot.create
   *
   * Creates new Slot object, that can be used to create Bookings.
   *
   * https://docs.overbooked.io/api-reference/api-resources/slot/create-slot
   */
  public async create(
    params: Overbooked.SlotCreateParams
  ): Promise<Response<Overbooked.Slot>> {
    const result = await this._baseClient.call<Response<Overbooked.Slot[]>>({
      path: "/slots",
      method: "post",
      data: params,
    });

    return this._baseClient.normalizeResponse(
      result,
      "slot"
    ) as Response<Overbooked.Slot>;
  }

  /**
   * public.slot.get
   *
   * Retrieves a Slot details.
   *
   * https://docs.overbooked.io/api-reference/api-resources/slot/get-a-slot
   */
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

  /**
   * public.slot.list
   *
   * Returns paginated list of all Slots matched by given filters.
   *
   * https://docs.overbooked.io/api-reference/api-resources/slot/list-slots
   */
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

  /**
   * public.slot.update
   *
   * Updates the specified Slot by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   *
   * https://docs.overbooked.io/api-reference/api-resources/slot/update-a-slot
   */
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

  /**
   * public.slot.enable
   *
   * Changes the status from disabled to active and makes Slot publicly visible.
   *
   * https://docs.overbooked.io/api-reference/api-resources/slot/enable-a-slot
   */
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

  /**
   * public.slot.disable
   *
   * Changes the status from active to disabled and makes Slot not visible.
   *
   * https://docs.overbooked.io/api-reference/api-resources/slot/disable-a-slot
   */
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

  /**
   * public.slot.lock
   *
   * Locks the Slot for a while, making it impossible for others to book.
   *
   * https://docs.overbooked.io/api-reference/api-resources/slot/lock-a-slot
   */
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

  /**
   * public.slot.unlock
   *
   * Unlocks the Slot making it available to book by others.
   *
   * https://docs.overbooked.io/api-reference/api-resources/slot/unlock-a-slot
   */
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

  /**
   * public.slot.delete
   *
   * Permanently deletes the Slot and all Bookings assigned to it.
   *
   * https://docs.overbooked.io/api-reference/api-resources/slot/delete-a-slot
   */
  public async delete(
    id: string
  ): Promise<Response<Record<string, never>, { [key: string]: unknown }>> {
    return this._baseClient.call({
      path: `/slots/${id}`,
      method: "delete",
    });
  }
}
