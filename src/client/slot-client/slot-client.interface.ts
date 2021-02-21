import { Overbooked } from "./../../";
import { Response, PaginatedResponse } from "./../shared/response";

export type SlotCreateParams = {
  resource_id: string;
  start_date: Date;
  end_date: Date;
  capacity: number;
  lockable?: boolean;
  metadata?: Overbooked.Metadata;
};

export type SlotListParams = {
  page: number;
  limit: number;
  available?: boolean;
  start_date?: Date;
  end_date?: Date;
  resoure_id?: string;
};

export type SlotUpdateParams = {
  start_date?: Date;
  end_date?: Date;
  metadata?: Overbooked.Metadata;
  lockable?: boolean;
  capacity?: number;
};

export type SlotLockParams = {
  lock_until: Date;
  lock_key: string;
};

export type SlotUnlockParams = {
  lock_key: string;
};

export interface ISlotClient {
  /**
   * public.slot.create
   *
   * Creates new Slot object, that can be used to create Bookings.
   *
   * https://docs.overbooked.io/api-reference/api-resources/slot/create-slot
   */
  create(
    params: Overbooked.SlotCreateParams
  ): Promise<Response<Overbooked.Slot>>;

  /**
   * public.slot.get
   *
   * Retrieves a Slot details.
   *
   * https://docs.overbooked.io/api-reference/api-resources/slot/get-a-slot
   */
  get(id: string): Promise<Response<Overbooked.Slot>>;

  /**
   * public.slot.list
   *
   * Returns paginated list of all Slots matched by given filters.
   *
   * https://docs.overbooked.io/api-reference/api-resources/slot/list-slots
   */
  list(params: SlotListParams): Promise<PaginatedResponse<Overbooked.Slot[]>>;

  /**
   * public.slot.update
   *
   * Updates the specified Slot by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   *
   * https://docs.overbooked.io/api-reference/api-resources/slot/update-a-slot
   */
  update(
    id: string,
    params: SlotUpdateParams
  ): Promise<Response<Overbooked.Slot>>;

  /**
   * public.slot.enable
   *
   * Changes the status from disabled to active and makes Slot publicly visible.
   *
   * https://docs.overbooked.io/api-reference/api-resources/slot/enable-a-slot
   */
  enable(id: string): Promise<Response<Overbooked.Slot>>;

  /**
   * public.slot.disable
   *
   * Changes the status from active to disabled and makes Slot not visible.
   *
   * https://docs.overbooked.io/api-reference/api-resources/slot/disable-a-slot
   */
  disable(id: string): Promise<Response<Overbooked.Slot>>;

  /**
   * public.slot.lock
   *
   * Locks the Slot for a while, making it impossible for others to book.
   *
   * https://docs.overbooked.io/api-reference/api-resources/slot/lock-a-slot
   */
  lock(id: string, params: SlotLockParams): Promise<Response<Overbooked.Slot>>;

  /**
   * public.slot.unlock
   *
   * Unlocks the Slot making it available to book by others.
   *
   * https://docs.overbooked.io/api-reference/api-resources/slot/unlock-a-slot
   */
  unlock(
    id: string,
    params: SlotUnlockParams
  ): Promise<Response<Overbooked.Slot>>;

  /**
   * public.slot.delete
   *
   * Permanently deletes the Slot and all Bookings assigned to it.
   *
   * https://docs.overbooked.io/api-reference/api-resources/slot/delete-a-slot
   */
  delete(id: string): Promise<Response<Record<string, never>>>;
}
